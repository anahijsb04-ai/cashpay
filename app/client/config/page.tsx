"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ConfigPage() {
  const router = useRouter();
  const params = useSearchParams();

  const phone = params.get("phone") || "Usuario";

  const [ocultarMontos, setOcultarMontos] = useState(false);

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-[26px] bg-white p-5 shadow-sm ring-1 ring-gray-200">
      {children}
    </div>
  );

  const Item = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-gray-900 text-right">
        {value}
      </span>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#111827] pb-10">
      {/* HEADER */}
      <section className="relative h-[230px] overflow-hidden">
        <img
          src="/images/aa.jpg"
          alt="header"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-white">
          <h1 className="text-3xl font-bold">
            Configuración
          </h1>

          <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg">
            👤
          </div>

          <p className="mt-4 text-sm font-medium text-white/90">
            {phone}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-xl space-y-5 px-5 pt-6">
        {/* Cuenta */}
        <Card>
          <h2 className="text-lg font-bold text-gray-900">
            Cuenta
          </h2>

          <div className="mt-4">
            <Item label="Teléfono" value={phone} />
          </div>
        </Card>

        {/* Seguridad */}
        <Card>
          <h2 className="text-lg font-bold text-gray-900">
            Seguridad
          </h2>

          <div className="mt-4 space-y-2">
            <Item
              label="Capturas bloqueadas"
              value="Activo"
            />

            <div className="flex items-center justify-between gap-4 py-2">
              <span className="text-sm text-gray-500">
                Ocultar montos
              </span>

              <button
                onClick={() =>
                  setOcultarMontos(!ocultarMontos)
                }
                className={`relative h-7 w-14 rounded-full transition ${
                  ocultarMontos
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    ocultarMontos
                      ? "left-8"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Soporte */}
        <Card>
          <h2 className="text-lg font-bold text-gray-900">
            Soporte
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Contacto de ayuda:
          </p>

          <p className="mt-2 break-all text-sm font-bold text-blue-700">
            paymentsreport@yopmail.com
          </p>
        </Card>

        {/* Logout */}
        <button
          onClick={() => router.push("/login")}
          className="h-[56px] w-full rounded-[22px] bg-red-500 font-semibold text-white shadow-lg"
        >
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}