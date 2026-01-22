import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebook",
  description: "Strona startowa ebooka. Jesli widzisz ten ekran, odswiez strone.",
};

export default function EbookEntry() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center text-sm text-muted-foreground">
      Przekierowuje do wersji ebooka. Jesli nic sie nie dzieje, odswiez strone.
    </div>
  );
}
