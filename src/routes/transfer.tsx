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
  const [amount, setAmount] = useState("");
  const showAmount = phone.length === 11;

  const addAmount = (value: number) => {
    const current = amount === "" ? 0 : parseFloat(amount);
    setAmount(String(current + value));
  };

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

        <div className="relative flex h-[72px] items-center rounded-[16px] border border-foreground/10 bg-white px-4">
          <button
            type="button"
            onClick={() => { setPhone(""); setAmount(""; }}
            className="absolute left-4 top-1/2 grid size-[32px] -translate-y-1/2 place-items-center text-foreground/70"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <label className="flex flex-1 flex-col pr-1">
            <span className="text-[13px] text-foreground/60">رقم الموبايل</span>
            <input
              type="tel"
              inputMode="numeric"
              dir="rtl"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              className="bg-transparent text-[18px] font-semibold outline-none"
            />
          </label>
        </div>

        {showAmount && (
          <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[17px] font-extrabold">مبلغ</span>
              <button type="button" className="flex items-center gap-1 text-[14px] font-bold text-foreground/60">
                الرسوم
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="size-[18px]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </button>
            </div>

            <div className="rounded-[18px] bg-white p-4">
              <div className="flex items-center justify-center gap-2 pb-5">
                <span className="text-[22px] font-black">جنيه</span>
                <span className="size-2 rounded-full bg-[#5aa8b5]" />
                <input
                  type="tel"
                  inputMode="numeric"
                  dir="rtl"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                  className="w-[120px] bg-transparent text-center text-[22px] font-black outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pb-3">
                {[50, 100, 200].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => addAmount(value)}
                    className="flex h-[40px] items-center justify-center gap-1 rounded-full border border-foreground/15 bg-white text-[13px] font-bold"
                  >
                    <span className="text-alert">+</span>
                    <span>{value}</span>
                    <span className="text-[12px]">جنيه</span>
                  </button>
                ))}
              </div>

              <p className="text-center text-[13px] text-foreground/60">
                المبلغ المسموح به من 0 جنيه إلى ٦٠٠٠٠ جنيه
              </p>
            </div>
          </div>
        )}

        {!showAmount && (
          <div className="mt-4 rounded-[18px] bg-white p-2.5">
            <div className="flex flex-col items-center rounded-[14px] bg-[#f2f2f4] px-6 py-8 text-center">
              <Star size={34} strokeWidth={1.6} className="mb-3" />
              <p className="text-[15px]">زود أرقامك المفضلة هنا علشان تلاقيهم بسهولة !</p>
              <button type="button" className="mt-2 text-[16px] font-bold text-alert">
                زود رقم مفضل
              </button>
            </div>
          </div>
        )}
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
