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
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#D4A94D20] hover:border-[#D4A94D60] transition-all"
        style={{ background: "rgba(21,17,10,.9)", color: "#EAD9B8" }}
      >
        <span style={{ fontSize: "16px" }}>🌐</span>
        <span className="uppercase text-xs tracking-wider">{selected.code}</span>
        <span style={{ fontSize: "10px" }}>▼</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-md overflow-hidden"
          style={{
            background: "rgba(15,12,9,.98)",
            border: "1px solid rgba(212,169,77,.15)",
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
                  ? "text-[#D4A94D] bg-[#1C160E]"
                  : "text-gray-300 hover:bg-[#1C160E]"
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