export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  createdAt: Date;
  updatedAt: Date;
  settings: TenantSettings;
}

export interface TenantSettings {
  theme: {
    primaryColor: string;
    logo?: string;
  };
  customDomain?: string;
  features: {
    blog: boolean;
    reviews: boolean;
    multiCurrency: boolean;
  };
}

export interface TenantUser {
  id: string;
  email: string;
  name: string;
  role: 'owner' | 'admin' | 'staff' | 'customer';
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}