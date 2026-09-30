"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/terms");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#2DFF72] via-[#00C6FF] to-[#0052D4]">
      {/* Glow */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-yellow-300/30 blur-3xl animate-pulse" />

      {/* Card */}
      <section className="relative z-10 flex flex-col items-center px-6 text-center animate-[fadeIn_1.2s_ease]">
        <div className="rounded-full shadow-[0_0_90px_rgba(255,255,0,0.45)]">
          <img
            src="/icon/app_icon.png"
            alt="CashPay Logo"
            className="w-[140px] h-[140px] object-contain animate-[zoomIn_1.3s_ease]"
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-wide text-white">
          CashPay
        </h1>

        <p className="mt-3 text-sm text-white/80 sm:text-base">
          Paga fácil, rápido y sin complicaciones
        </p>

        <div className="mt-10 h-7 w-7 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}