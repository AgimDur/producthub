import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductForm } from "@/components/product-form";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function NewProductPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto grid w-full max-w-2xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 font-headline">
            New Product
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Link href="/">
                <Button variant="outline" size="sm">
                Discard
                </Button>
            </Link>
            <Button size="sm" type="submit" form="product-form">Save Product</Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              Fill in the form below to add a new product to your catalog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProductForm />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
