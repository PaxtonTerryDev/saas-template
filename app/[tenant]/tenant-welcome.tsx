// Any client-side component
"use client";

import { useTenantStore } from "@/lib/zustand/use-tenant-store";

export default function TenantWelcome() {
  const tenant = useTenantStore((state) => state.tenant);

  if (!tenant) return <div>Loading tenant...</div>;

  return <h2 className="text-xl font-bold">Tenant: {tenant.name}</h2>;
}
