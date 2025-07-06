import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Barcode({ ean }: { ean: string }) {
  if (!ean) return null;
  const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${ean}&code=EAN13&dpi=300`;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Barcode (EAN-13)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-white p-4 text-center">
          <Image
            src={barcodeUrl}
            alt={`Barcode for EAN ${ean}`}
            width={250}
            height={100}
            className="mx-auto"
            style={{
                maxWidth: "100%",
                height: "auto",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
