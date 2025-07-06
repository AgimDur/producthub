import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Edit } from "lucide-react";

import { products } from "@/lib/data";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Barcode } from "@/components/barcode";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="mx-auto grid w-full max-w-4xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 font-headline">
            {product.name}
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Product
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Detailed information about the product.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SKU</span>
                  <Badge variant="secondary">{product.sku}</Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">EAN Code</span>
                  <span>{product.ean}</span>
                </div>
                 <Separator />
                 <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                    <p className="text-sm leading-relaxed">
                        {product.description || "No description available."}
                    </p>
                 </div>
              </CardContent>
            </Card>
            <div className="md:hidden">
              <Barcode ean={product.ean} />
            </div>
          </div>
          <div className="grid auto-rows-max items-start gap-4">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Product Image</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src={product.imageUrl || "https://placehold.co/300x300.png"}
                  width="300"
                  data-ai-hint={product.aiHint || "product image"}
                />
              </CardContent>
            </Card>
            <div className="hidden md:block">
              <Barcode ean={product.ean} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
