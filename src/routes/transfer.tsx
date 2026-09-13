import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Star, UserRound } from "lucide-react";
import { useState } from "react";

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

function TransferPage() {
  const [phone, setPhone] = useState("");

  return (
    <main dir="rtl" className="mx-auto flex h-dvh max-w-[430px] flex-col bg-[#f2f2f4] text-foreground shadow-2xl">
      <header className="relative flex h-[64px] items-center justify-center bg-[#f2f2f4]">
        <h1 className="text-[22px] font-extrabold">تحويل أموال</h1>
        <Link
          to="/"
          aria-label="رجوع"
          className="absolute left-4 top-1/2 grid size-[44px] -translate-y-1/2 place-items-center rounded-full bg-white shadow-sm"
        >
          <ChevronRight size={26} strokeWidth={2.5} />
        </Link>
      </header>

      <div className="flex-1 px-4 pt-6">
        <h2 className="mb-3 text-[20px] font-extrabold">حول إلي</h2>

        <label className="flex h-[64px] items-center gap-3 rounded-[16px] border border-foreground/15 bg-white px-4">
          <span className="grid size-[38px] shrink-0 place-items-center rounded-[8px] border-2 border-alert text-alert">
            <UserRound size={22} />
          </span>
          <input
            type="tel"
            inputMode="numeric"
            dir="rtl"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
            placeholder="رقم الموبايل"
            className="h-full flex-1 bg-transparent text-[16px] outline-none placeholder:text-foreground/70"
          />
        </label>

        <div className="mt-4 rounded-[16px] bg-white p-2.5">
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
          className="h-[56px] w-full rounded-[14px] bg-alert/50 text-[18px] font-bold text-white"
        >
          تأكيد
        </button>
      </div>
    </main>
  );
}
