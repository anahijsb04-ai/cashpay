import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    phone?: string;
  };
};

export default function ClientIndexPage({
  searchParams,
}: Props) {
  const phone =
    searchParams.phone || "";

  redirect(
    `/client/solicitar?phone=${encodeURIComponent(
      phone
    )}`
  );
}