"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Wand2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { generateProductDescription } from "@/lib/actions";

const productFormSchema = z.object({
  name: z.string().min(3, {
    message: "Product name must be at least 3 characters.",
  }),
  ean: z.string().min(12, {
    message: "EAN must be at least 12 characters.",
  }),
  sku: z.string().min(3, "SKU must be at least 3 characters."),
  description: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

export function ProductForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      ean: "",
      sku: "",
      description: "",
    },
  });

  function onSubmit(data: ProductFormValues) {
    toast({
      title: "Product Saved",
      description: "The new product has been added to the catalog.",
    });
    console.log(data);
  }

  const handleGenerateDescription = () => {
    const productName = form.getValues("name");
    const eanCode = form.getValues("ean");

    if (!productName || !eanCode) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please enter a Product Name and EAN code first.",
      });
      return;
    }

    startTransition(async () => {
      const result = await generateProductDescription(productName, eanCode);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: result.error,
        });
      } else {
        form.setValue("description", result.description || "");
        toast({
          title: "Description Generated",
          description: "The AI-powered description has been added.",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form id="product-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Wireless Headphones" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SKU</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. SKU-12345" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="ean"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EAN Code</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 5056453811123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Description</FormLabel>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateDescription}
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate with AI
                </Button>
              </div>
              <FormControl>
                <Textarea
                  placeholder="A detailed description of the product."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end md:hidden">
            <Button size="sm" type="submit" form="product-form">Save Product</Button>
        </div>
      </form>
    </Form>
  );
}
