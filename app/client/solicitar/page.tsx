export default function SolicitarPage() {
  const productos = [
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

  return (
    <div className="space-y-5 text-[#111827]">
      <div className="rounded-[28px] bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white shadow-lg">
        <h2 className="text-3xl font-bold">Solicitar préstamo</h2>
        <p className="mt-3 text-sm leading-6 text-white/85">
          Accede a financiamiento rápido y seguro con CashPay.
        </p>
      </div>

      <div className="rounded-3xl border border-red-200 bg-red-50 p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-lg">🔒</span>
          <p className="font-semibold text-red-700">
            Pague sus préstamos antes de volver a solicitar.
          </p>
        </div>
      </div>

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

            <button
              disabled
              className="mt-5 h-[52px] w-full cursor-not-allowed rounded-2xl bg-gray-200 font-semibold text-gray-500"
            >
              🔒 No disponible
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}