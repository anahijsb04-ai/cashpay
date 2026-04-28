"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Producto = {
  nombre: string;
  monto: string;
  desc: string;
};

type Props = {
  searchParams: Promise<{
    phone?: string;
  }>;
};

export default function SolicitarPage({
  searchParams,
}: Props) {
  const params = use(searchParams);

  const phone =
    params?.phone || "";

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [bloqueado, setBloqueado] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const productos: Producto[] = [
    {
      nombre: "Credi max",
      monto: "$1,400",
      desc: "Ideal para comenzar tu historial",
    },
    {
      nombre: "CashPay Avance",
      monto: "$3,000",
      desc: "Mayor liquidez y flexibilidad",
    },
    {
      nombre: "Dinero Rapi",
      monto: "$10,000",
      desc: "Acceso premium a montos altos",
    },
  ];

  useEffect(() => {
    validarCliente();
  }, [phone]);

  async function validarCliente() {
    try {
      if (!phone) {
        setBloqueado(true);
        setMensaje(
          "Número telefónico no detectado."
        );
        setLoading(false);
        return;
      }

      const res = await fetch(
        `/api/prestamos/pendientes?telefono=${encodeURIComponent(
          phone
        )}&limite=1`,
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      const lista =
        Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];

      if (lista.length > 0) {
        setBloqueado(true);
        setMensaje(
          "Pague sus préstamos antes de volver a solicitar."
        );
      } else {
        setBloqueado(false);
        setMensaje(
          "Cuenta aprobada para nueva solicitud."
        );
      }
    } catch {
      setBloqueado(true);
      setMensaje(
        "Error al consultar información."
      );
    } finally {
      setLoading(false);
    }
  }

  function solicitar(
    producto: Producto
  ) {
    router.push(
      `/client/solicitud-form?phone=${encodeURIComponent(
        phone
      )}&producto=${encodeURIComponent(
        producto.nombre
      )}`
    );
  }

  return (
    <main className="space-y-5 pb-10 text-[#111827]">
      <div className="rounded-[28px] bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white shadow-lg">
        <h2 className="text-3xl font-bold">
          Solicitar préstamo
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/85">
          Accede a financiamiento rápido y seguro con CashPay.
        </p>

        {phone && (
          <p className="mt-3 text-xs text-white/80">
            Cliente: {phone}
          </p>
        )}
      </div>

      {loading ? (
        <div className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
          <p className="animate-pulse text-sm text-gray-500">
            Consultando información...
          </p>
        </div>
      ) : (
        <div
          className={`rounded-3xl p-4 shadow-sm ${
            bloqueado
              ? "border border-red-200 bg-red-50"
              : "border border-green-200 bg-green-50"
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg">
              {bloqueado
                ? "🔒"
                : "✅"}
            </span>

            <p
              className={`font-semibold ${
                bloqueado
                  ? "text-red-700"
                  : "text-green-700"
              }`}
            >
              {mensaje}
            </p>
          </div>
        </div>
      )}

      {productos.map((item) => (
        <div
          key={item.nombre}
          className="relative overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-gray-200"
        >
          <div className="absolute left-0 top-0 h-full w-[6px] bg-blue-700" />

          <div className="p-5 pl-6">
            <h3 className="text-xl font-bold text-gray-900">
              {item.nombre}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {item.desc}
            </p>

            <h4 className="mt-5 text-4xl font-extrabold text-blue-700">
              {item.monto}
            </h4>

            {bloqueado ? (
              <button
                disabled
                className="mt-5 h-[52px] w-full cursor-not-allowed rounded-2xl bg-gray-200 font-semibold text-gray-500"
              >
                🔒 No disponible
              </button>
            ) : (
              <button
                onClick={() =>
                  solicitar(item)
                }
                className="mt-5 h-[52px] w-full rounded-2xl bg-blue-700 font-semibold text-white transition hover:bg-blue-800"
              >
                Solicitar ahora
              </button>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}