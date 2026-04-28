"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ClientLayout({
  children,
}: Props) {
  const pathname = usePathname();

  const nav = [
    {
      name: "Solicitar",
      icon: "🏠",
      href: "/client/solicitar",
    },
    {
      name: "Préstamos",
      icon: "💳",
      href: "/client/prestamos",
    },
    {
      name: "Config",
      icon: "⚙️",
      href: "/client/config",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#111827] pb-28">
      {/* Header */}
      <header className="bg-white px-5 pt-10 pb-6 shadow-sm">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">
                Bienvenido
              </p>

              <h1 className="text-3xl font-extrabold text-gray-900">
                CashPay
              </h1>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg">
              C
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-5 text-white shadow-lg">
            <p className="text-sm text-white/75">
              Cuenta activa
            </p>

            <p className="mt-1 text-lg font-semibold">
              Cliente
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-xl px-5 pt-5">
        {children}
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-5 left-0 right-0 px-4">
        <div className="mx-auto flex max-w-xl items-center justify-between rounded-[28px] bg-white px-3 py-3 shadow-2xl ring-1 ring-gray-200">
          {nav.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </main>
  );
}