// app/[tenant]/page.tsx

import { TenantProvider } from "@/components/providers/tenant-provider";
import TenantWelcome from "./tenant-welcome";

interface TenantRootPageProps {
  params: { tenant: string };
}

export default async function TenantRootPage({ params }: TenantRootPageProps) {
  return (
    <TenantProvider subdomain={params.tenant}>
      <div className="p-4">
        <TenantWelcome />
      </div>
    </TenantProvider>
  );
}
