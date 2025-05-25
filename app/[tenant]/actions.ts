"use server";

import { createClient } from "@/utils/supabase/server";

export async function getTenantBySubdomain(subdomain: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("subdomain", subdomain)
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Tenant not found");
  }

  return data; // ✅ Now correctly returns just the tenant object
}
