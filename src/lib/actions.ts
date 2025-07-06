// src/lib/actions.ts
"use server";

import { generateProductDescription as genkitGenerate } from "@/ai/flows/generate-product-description";

export async function generateProductDescription(
  productName: string,
  eanCode: string
) {
  if (!productName || !eanCode) {
    return { error: "Product Name and EAN code are required." };
  }
  try {
    const result = await genkitGenerate({ productName, eanCode });
    return { description: result.productDescription };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate description. Please try again." };
  }
}
