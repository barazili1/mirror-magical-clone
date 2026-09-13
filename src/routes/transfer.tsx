import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Star, X } from "lucide-react";
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
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="3" width="15" height="18" rx="2" />
      <circle cx="10.5" cy="9.5" r="2.3" />
      <path d="M6.8 15.8c.55-2.2 2-3.3 3.7-3.3s3.15 1.1 3.7 3.3" />
      <path d="M18.5 6.5v2.4M18.5 11v2.4M18.5 15.5v2.4" />
      <path d="M18.5 3h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1" />
    </svg>
  );
}

function FeesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="12" x2="9" y2="12" />
      <line x1="16" y1="16" x2="9" y2="16" />
    </svg>
  );
}

const quickAmounts = [
  { value: 10, label: "١٠" },
  { value: 100, label: "١٠٠" },
  { value: 500, label: "٥٠٠" },
];

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
      {/* Header */}
      <header className="relative flex h-[72px] items-center justify-center bg-white">
        <h1 className="text-[24px] font-black">تحويل أموال</h1>
        <Link
          to="/"
          aria-label="رجوع"
          className="absolute right-5 top-1/2 grid size-[52px] -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <ChevronRight size={30} strokeWidth={2.5} />
        </Link>
      </header>

      <div className="flex-1 px-5 pt-7">
        <h2 className="mb-4 text-[26px] font-black">حول إلي</h2>

        {/* Phone field */}
        <div className="relative flex h-[78px] items-center rounded-[20px] border-2 border-transparent bg-white px-5 transition-colors focus-within:border-[#5aa8b5]">
          <label className="flex flex-1 flex-col justify-center">
            {phone.length > 0 && (
              <span className="text-[13px] text-foreground/50">رقم الموبايل</span>
            )}
            <input
              type="tel"
              inputMode="numeric"
              dir="rtl"
              value={phone}
              placeholder={phone.length === 0 ? "رقم الموبايل" : ""}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              className={`bg-transparent outline-none placeholder:text-foreground/90 ${
                phone.length === 0
                  ? "text-[19px] font-semibold placeholder:text-[19px] placeholder:font-semibold"
                  : "text-[21px] font-bold"
              }`}
            />
          </label>
          {phone.length > 0 ? (
            <button
              type="button"
              aria-label="مسح الرقم"
              onClick={() => { setPhone(""); setAmount(""); }}
              className="grid size-[36px] shrink-0 place-items-center text-foreground/80"
            >
              <X size={26} strokeWidth={2.2} />
            </button>
          ) : (
            <ContactBookIcon className="size-[34px] shrink-0 text-[#e60000]" />
          )}
        </div>

        {/* Amount section */}
        {showAmount && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[24px] font-black">مبلغ</span>
              <button
                type="button"
                className="flex items-center gap-1.5 text-[15px] font-semibold text-foreground/50"
              >
                <FeesIcon className="size-[20px]" />
                الرسوم
              </button>
            </div>

            <div className="rounded-[18px] bg-white px-4 pb-5 pt-7">
              <div className="flex items-center justify-center gap-2.5 pb-6">
                <span className="size-[11px] rounded-full bg-[#2e8b9a]" />
                <span className="text-[28px] font-black leading-none">جنيه</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  dir="rtl"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                  style={{ width: amount ? `${amount.length + 0.5}ch` : "0px" }}
                  className="bg-transparent text-[28px] font-black leading-none outline-none transition-[width]"
                  aria-label="المبلغ"
                />
              </div>

              <div className="flex justify-center gap-3 pb-4">
                {quickAmounts.map((chip) => (
                  <button
                    key={chip.value}
                    type="button"
                    onClick={() => addAmount(chip.value)}
                    className="flex h-[44px] items-center justify-center gap-1.5 rounded-full border border-foreground/25 bg-white px-5"
                  >
                    <span className="text-[17px] font-black leading-none">+</span>
                    <span className="text-[15px] font-bold">جنيه</span>
                    <span className="text-[17px] font-black leading-none">{chip.label}</span>
                  </button>
                ))}
              </div>

              <p className="text-center text-[13px] text-foreground/50">
                المبلغ المسموح به من 0 جنيه إلى ٦٠٠٠٠ جنيه
              </p>
            </div>
          </div>
        )}

        {/* Favorites card */}
        {!showAmount && (
          <div className="mt-7 rounded-[20px] bg-white p-2.5">
            <div className="flex flex-col items-center rounded-[16px] bg-[#f2f2f4] px-6 py-10 text-center">
              <Star size={38} strokeWidth={1.5} className="mb-4" />
              <p className="text-[15px] font-medium leading-relaxed">
                زود أرقامك المفضلة هنا علشان تلاقيهم بسهولة !
              </p>
              <button type="button" className="mt-2 text-[17px] font-bold text-[#e60000]">
                زود رقم مفضل
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirm */}
      <div className="px-5 pb-9">
        <button
          type="button"
          className="h-[58px] w-full rounded-[16px] bg-[#e57373]/90 text-[19px] font-bold text-white"
        >
          تأكيد
        </button>
      </div>
    </main>
  );
}
