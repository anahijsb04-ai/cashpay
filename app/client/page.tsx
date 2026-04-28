"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClientIndexPage() {
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone") || "";

  useEffect(() => {
    router.replace(`/client/solicitar?phone=${encodeURIComponent(phone)}`);
  }, [router, phone]);

  return null;
}