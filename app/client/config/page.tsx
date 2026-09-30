import Link from "next/link";

type Props = {
  searchParams: Promise<{
    phone?: string;
  }>;
};

export default async function ConfigPage({
  searchParams,
}: Props) {
  const params =
    await searchParams;

  const phone =
    params?.phone ||
    "Usuario";

  const Card = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
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
        <Card>
          <h2 className="text-lg font-bold text-gray-900">
            Cuenta
          </h2>

          <div className="mt-4">
            <Item
              label="Teléfono"
              value={phone}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-bold text-gray-900">
            Seguridad
          </h2>

          <div className="mt-4 space-y-2">
            <Item
              label="Capturas bloqueadas"
              value="Activo"
            />

            <Item
              label="Ocultar montos"
              value="Disponible"
            />
          </div>
        </Card>

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

        <Link href="/login">
          <button className="h-[56px] w-full rounded-[22px] bg-red-500 font-semibold text-white shadow-lg">
            Cerrar sesión
          </button>
        </Link>
      </section>
    </main>
  );
}