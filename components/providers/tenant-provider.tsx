"use client";

import { getTenantBySubdomain } from "@/app/[tenant]/actions";
import { useTenantStore } from "@/lib/zustand/use-tenant-store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
interface Props {
  subdomain: string;
  children: React.ReactNode;
}

export function TenantProvider({ subdomain, children }: Props) {
  const setTenant = useTenantStore((state) => state.setTenant);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tenant", subdomain],
    queryFn: () => getTenantBySubdomain(subdomain),
  });

  useEffect(() => {
    if (data) {
      setTenant(data);
    }
  }, [data, setTenant]);

  if (isLoading) return <div>Loading tenant...</div>;
  if (isError) {
    console.error("Tenant fetch error:", error);
    return <div>Tenant not found: {String(error)}</div>;
  }

  return <>{children}</>;
}
