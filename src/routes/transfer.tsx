import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Star } from "lucide-react";
import { useState, type SVGProps } from "react";

export const Route = createFileRoute("/transfer")({
  head: () => ({
    meta: [
      { title: "تحويل أموال | محفظتي" },
      { name: "description", content: "حوّل الأموال إلى أي رقم موبايل بسهولة" },
      { property: "og:title", content: "تحويل أموال | محفظتي" },
      { property: "og:description", content: "حوّل الأموال إلى أي رقم موبايل بسهولة" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TransferPage,
});

function ContactBookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <circle cx="11.5" cy="10" r="2.4" />
      <path d="M7.5 16.2c.6-2.3 2.2-3.4 4-3.4s3.4 1.1 4 3.4" />
      <path d="M17 7.2h3M17 12h3M17 16.8h3" />
    </svg>
  );
}

function TransferPage() {
  const [phone, setPhone] = useState("");

  return (
    <main dir="rtl" className="mx-auto flex h-dvh max-w-[430px] flex-col bg-[#f2f2f4] text-foreground shadow-2xl">
      <header className="relative flex h-[64px] items-center justify-center">
        <h1 className="text-[22px] font-extrabold">تحويل أموال</h1>
        <Link
          to="/"
          aria-label="رجوع"
          className="absolute right-4 top-1/2 grid size-[44px] -translate-y-1/2 place-items-center rounded-full bg-white shadow-sm"
        >
          <ChevronRight size={26} strokeWidth={2.5} />
        </Link>
      </header>

      <div className="flex-1 px-4 pt-5">
        <h2 className="mb-3 text-[21px] font-extrabold">حول إلي</h2>

        <label className="flex h-[64px] items-center gap-3 rounded-[16px] border-2 border-foreground/15 bg-white px-4 transition-colors focus-within:border-[#5aa8b5]">
          <input
            type="tel"
            inputMode="numeric"
            dir="rtl"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
            placeholder="رقم الموبايل"
            className="h-full flex-1 bg-transparent text-[16px] outline-none placeholder:text-foreground/70"
          />
          <ContactBookIcon className="size-[30px] shrink-0 text-alert" />
        </label>

        <div className="mt-4 rounded-[18px] bg-white p-2.5">
          <div className="flex flex-col items-center rounded-[14px] bg-[#f2f2f4] px-6 py-8 text-center">
            <Star size={34} strokeWidth={1.6} className="mb-3" />
            <p className="text-[15px]">زود أرقامك المفضلة هنا علشان تلاقيهم بسهولة !</p>
            <button type="button" className="mt-2 text-[16px] font-bold text-alert">
              زود رقم مفضل
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8">
        <button
          type="button"
          className="h-[56px] w-full rounded-[14px] bg-[#e57373]/70 text-[18px] font-bold text-white"
        >
          تأكيد
        </button>
      </div>
    </main>
  );
}
