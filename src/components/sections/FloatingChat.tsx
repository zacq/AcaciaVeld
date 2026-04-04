"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ChatStep = "idle" | "open" | "sent";

export default function FloatingChat() {
  const [step, setStep] = useState<ChatStep>("idle");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (step !== "open") return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setStep("idle");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [step]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const greeting = name.trim() ? `Hi, I'm ${name.trim()}. ` : "";
    const href = buildWhatsAppLink(`${greeting}${message.trim()}`);
    window.open(href, "_blank", "noopener,noreferrer");
    setStep("sent");
    setName("");
    setMessage("");
  }

  const quickReplies = [
    "I'd like pricing on Dorper sheep",
    "Do you have Boer goats available?",
    "What's the delivery process?",
  ];

  return (
    <div ref={panelRef} className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {step !== "idle" && (
        <div
          className="w-[min(340px,calc(100vw-2rem))] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
          style={{ animation: "slideUp 0.25s ease-out" }}
        >
          {/* Header */}
          <div className="bg-brand-green px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-brand-accent border-2 border-brand-green" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">AcaciaVelds</p>
                <p className="text-[10px] text-white/70 mt-0.5">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setStep("idle")}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {step === "sent" ? (
            <div className="px-4 py-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <span className="text-2xl">✅</span>
              </div>
              <p className="font-semibold text-gray-900 mb-1">Message sent!</p>
              <p className="text-sm text-gray-500 mb-4">
                We'll respond on WhatsApp shortly.
              </p>
              <button
                onClick={() => setStep("open")}
                className="text-xs text-brand-green underline underline-offset-2 hover:text-brand-accent transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="p-4">
              {/* Bot bubble */}
              <div className="mb-4 flex gap-2 items-start">
                <div className="h-7 w-7 shrink-0 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold">
                  A
                </div>
                <div className="rounded-2xl rounded-tl-none bg-gray-50 border border-gray-100 px-3 py-2 text-sm text-gray-700 max-w-[calc(100%-2.5rem)]">
                  Hi there! 👋 How can we help you today?
                </div>
              </div>

              {/* Quick replies */}
              <div className="mb-4 flex flex-col gap-1.5 pl-9">
                {quickReplies.map((r) => (
                  <button
                    key={r}
                    onClick={() => setMessage(r)}
                    className={`text-left rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                      message === r
                        ? "border-brand-green bg-brand-green text-white"
                        : "border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSend} className="space-y-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-brand-green focus:bg-white transition"
                />
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message…"
                    rows={2}
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 pr-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-brand-green focus:bg-white transition"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-white transition hover:bg-brand-accent disabled:opacity-40 disabled:pointer-events-none"
                    aria-label="Send message"
                  >
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setStep(step === "idle" ? "open" : "idle")}
        aria-label={step === "idle" ? "Open chat" : "Close chat"}
        className="chat-pulse flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg shadow-brand-green/30 transition-transform hover:scale-110"
      >
        {step !== "idle" ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
