// lib/stores/useTenantStore.ts
import { create } from "zustand";

interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  created_at: string;
}

interface TenantStore {
  tenant: Tenant | null;
  setTenant: (tenant: Tenant) => void;
}

export const useTenantStore = create<TenantStore>((set) => ({
  tenant: null,
  setTenant: (tenant) => set({ tenant }),
}));
