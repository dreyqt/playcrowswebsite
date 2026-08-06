import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "kr", label: "한국어" },
  { code: "th", label: "ไทย" },
  { code: "br", label: "Português" },
  { code: "tw", label: "繁體中文" },
];

export default function Translator() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // Derive "selected" from i18n's current language instead of separate state
  const selected =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#3B9EFF20] hover:border-[#3B9EFF60] transition-all"
        style={{ background: "rgba(9,17,29,.9)", color: "#A8C8E8" }}
      >
        <span style={{ fontSize: "16px" }}>🌐</span>
        <span className="uppercase text-xs tracking-wider">{selected.code}</span>
        <span style={{ fontSize: "10px" }}>▼</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-md overflow-hidden"
          style={{
            background: "rgba(5,8,16,.98)",
            border: "1px solid rgba(59,158,255,.15)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 15px 40px rgba(0,0,0,.45)",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                localStorage.setItem("lang", lang.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 transition ${
                selected.code === lang.code
                  ? "text-[#3B9EFF] bg-[#0D1626]"
                  : "text-gray-300 hover:bg-[#0D1626]"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}