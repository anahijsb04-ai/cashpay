"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCode = () => {
    const random = Math.floor(100 + Math.random() * 900).toString();
    setGeneratedCode(random);
    alert("Tu código es: " + random);
  };

  const login = async () => {
    if (!phone.trim()) {
      alert("Ingresa tu número");
      return;
    }

    if (!generatedCode) {
      alert("Primero genera el código");
      return;
    }

    if (code !== generatedCode) {
      alert("Código incorrecto");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `/api/prestamos/pendientes?telefono=${encodeURIComponent(phone)}&limite=1`
      );

      const data = await res.json();

      if (!res.ok) {
        alert("Error del servidor");
        return;
      }

      if (!data.registrado) {
        alert("Número no registrado");
        return;
      }

      router.push(`/client?phone=${phone}`);
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const card = (title: string, text: string) => (
    <div className="w-full rounded-3xl bg-[#F8F8FB] px-5 py-5">
      <h3 className="text-center text-[17px] font-bold text-[#222222]">
        {title}
      </h3>
      <p className="mt-3 text-center text-sm leading-6 text-[#707684]">
        {text}
      </p>
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondo */}
      <img
        src="/images/aa.jpg"
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/5" />

      <section className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <div className="px-5 pt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 p-1">
              <img
                src="/icon/app_icon.png"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-bold text-white">CashPay</h1>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-white">
              Importe máximo
            </p>

            <h2 className="mt-2 text-6xl font-extrabold leading-none text-white">
              $ 20,000
            </h2>

            <p className="mt-3 text-white">
              Plazo máximo de préstamo 365 días
            </p>
          </div>
        </div>

        {/* Caja blanca */}
        <div className="mt-8 flex-1 rounded-t-[36px] bg-white px-6 pt-8 pb-8">
          <div className="mx-auto max-w-xl">
            <p className="text-center text-[17px] font-bold leading-7 text-[#222222]">
              Por favor, inicie sesión usando su número de WhatsApp.
            </p>

            {/* Número */}
            <div className="mt-7 flex gap-3">
              <div className="rounded-2xl bg-[#F6F7FB] px-5 py-4 text-[17px] text-[#4A4F5A]">
                +52
              </div>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Por favor, ingrese su número de WhatsApp."
                className="flex-1 rounded-2xl bg-[#F6F7FB] px-5 outline-none h-[56px]"
              />
            </div>

            {/* Código */}
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Introduzca tres dígitos de código de verificación"
              className="mt-4 w-full rounded-2xl bg-[#F6F7FB] px-5 outline-none h-[56px]"
            />

            <div className="mt-3 text-right">
              <button
                onClick={generateCode}
                className="text-sm font-medium text-[#8DA8FF]"
              >
                Obtener código de verificación
              </button>
            </div>

            {/* Botón */}
            <button
              onClick={login}
              disabled={loading}
              className="mt-4 h-[58px] w-full rounded-full bg-[#F2C400] text-lg font-semibold text-[#2A2400]"
            >
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>

            <p className="mt-5 text-center text-sm text-[#7A7F89]">
              Por favor revisa el Aviso de privacidad
            </p>

            <div className="mt-6 space-y-4">
              {card(
                "Consejos",
                "Cuanto más veces pidas préstamos, más alto será el límite de crédito, más largo será el plazo y la tasa será más baja."
              )}

              {card(
                "¿Por qué elegirnos?",
                "Proceso rápido, validación sencilla y una experiencia práctica para consultar tu acceso dentro de CashPay."
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}