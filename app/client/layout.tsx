"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const phone = params.get("phone") || "";

  const goTo = (path: string) => {
    router.push(`${path}?phone=${encodeURIComponent(phone)}`);
  };

  const navItems = [
    {
      label: "Solicitar",
      icon: "🏠",
      path: "/client/solicitar",
    },
    {
      label: "Mis préstamos",
      icon: "💳",
      path: "/client/prestamos",
    },
    {
      label: "Config",
      icon: "⚙️",
      path: "/client/config",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#111827] pb-28">
      <header className="bg-white px-5 pt-10 pb-6 shadow-sm">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-medium text-gray-400">Bienvenido</p>

          <div className="mt-1 flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-gray-900">
              CashPay
            </h1>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg">
              C
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-5 text-white shadow-lg">
            <p className="text-sm text-white/75">Cuenta activa</p>
            <p className="mt-1 text-lg font-semibold">
              {phone || "Sin teléfono"}
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-xl px-5 pt-5">
        {children}
      </section>

      <nav className="fixed bottom-5 left-0 right-0 px-4">
        <div className="mx-auto flex max-w-xl items-center justify-between rounded-[28px] bg-white px-3 py-3 shadow-2xl ring-1 ring-gray-200">
          {navItems.map((item) => {
            const active = pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => goTo(item.path)}
                className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}