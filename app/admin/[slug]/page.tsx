export const dynamic = "force-dynamic";

import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ResourceManagementPage } from "../components";

const SECTION_CONFIG = {
  medicines: {
    title: "Medicine Management",
    description: "Manage medicine details and information",
    resource: "medicines",
    fields: [
      { name: "name", label: "Medicine Name", type: "text" },
      { name: "generic_name", label: "Generic Name", type: "text" },
      { name: "brand_name", label: "Brand Name", type: "text" },
      { name: "strength", label: "Strength", type: "text" },
      { name: "form", label: "Form", type: "text" },
      { name: "pack_size", label: "Pack Size", type: "text" },
      { name: "category_id", label: "Category ID", type: "text" },
      { name: "image_path", label: "Medicine Image", type: "text" },
      { name: "requires_prescription", label: "Prescription Status", type: "checkbox" },
    ],
  },
  pharmacies: {
    title: "Pharmacy Management",
    description: "Manage pharmacies and operational details",
    resource: "pharmacies",
    fields: [
      { name: "name", label: "Pharmacy Name", type: "text" },
      { name: "address_line1", label: "Address", type: "text" },
      { name: "city", label: "Location", type: "text" },
      { name: "phone", label: "Contact Information", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "is_open", label: "Operating Status", type: "checkbox" },
    ],
  },
  categories: {
    title: "Category Management",
    description: "Manage categories and taxonomy",
    resource: "categories",
    fields: [
      { name: "name", label: "Category Name", type: "text" },
      { name: "slug", label: "Slug", type: "text" },
    ],
  },
  inventory: {
    title: "Inventory Management",
    description: "Manage pharmacy stock and pricing information",
    resource: "inventory",
    fields: [
      { name: "pharmacy_id", label: "Pharmacy", type: "text" },
      { name: "medicine_id", label: "Medicine", type: "text" },
      { name: "available_quantity", label: "Stock", type: "number" },
      { name: "price", label: "Price", type: "number" },
      { name: "mrp", label: "MRP", type: "number" },
      { name: "delivery_fee", label: "Delivery Fee", type: "number" },
      { name: "is_available", label: "Availability", type: "checkbox" },
    ],
  },
  customers: {
    title: "Customer Management",
    description: "Manage customer information and profiles",
    resource: "users",
    fields: [
      { name: "full_name", label: "Customer Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "text" },
      { name: "role", label: "Role", type: "text" },
    ],
  },
  locations: {
    title: "Location Management",
    description: "Manage addresses and saved locations",
    resource: "locations",
    fields: [
      { name: "label", label: "Location Label", type: "text" },
      { name: "address_line1", label: "Address", type: "text" },
      { name: "city", label: "City", type: "text" },
      { name: "state", label: "State", type: "text" },
      { name: "country", label: "Country", type: "text" },
      { name: "is_default", label: "Default Location", type: "checkbox" },
    ],
  },
  orders: {
    title: "Order Management",
    description: "Manage order lifecycle and fulfillment",
    resource: "orders",
    fields: [
      { name: "user_id", label: "Customer", type: "text" },
      { name: "status", label: "Order Status", type: "text" },
      { name: "total", label: "Total", type: "number" },
      { name: "delivery_fee", label: "Delivery Fee", type: "number" },
      { name: "prescription_status", label: "Prescription Status", type: "text" },
    ],
  },
  prescriptions: {
    title: "Prescription Management",
    description: "Manage uploaded prescriptions and verification",
    resource: "prescriptions",
    fields: [
      { name: "user_id", label: "Customer", type: "text" },
      { name: "order_id", label: "Order", type: "text" },
      { name: "storage_path", label: "Storage Path", type: "text" },
      { name: "status", label: "Prescription Status", type: "text" },
      { name: "notes", label: "Notes", type: "text" },
    ],
  },
} as const;

async function getRows(resource: string) {
  const supabase = await createSupabaseServerClient();

  switch (resource) {
    case "medicines":
      return (await supabase.from("medicines").select("*").order("created_at", { ascending: false })).data ?? [];
    case "pharmacies":
      return (await supabase.from("pharmacies").select("*").order("created_at", { ascending: false })).data ?? [];
    case "categories":
      return (await supabase.from("categories").select("*").order("created_at", { ascending: false })).data ?? [];
    case "inventory":
      return (await supabase.from("inventory").select("*", { count: "exact" }).order("updated_at", { ascending: false })).data ?? [];
    case "customers":
      return (await supabase.from("users").select("*").order("created_at", { ascending: false })).data ?? [];
    case "locations":
      return (await supabase.from("locations").select("*").order("created_at", { ascending: false })).data ?? [];
    case "orders":
      return (await supabase.from("orders").select("*").order("created_at", { ascending: false })).data ?? [];
    case "prescriptions":
      return (await supabase.from("prescriptions").select("*").order("created_at", { ascending: false })).data ?? [];
    default:
      return [];
  }
}

export default async function AdminSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = SECTION_CONFIG[slug as keyof typeof SECTION_CONFIG];

  if (!section) {
    return (
      <main className="admin-page empty-state">
        <div className="glass-panel minimal-panel">
          <h1>Section not found</h1>
          <p>The requested admin section does not exist yet.</p>
          <Link href="/admin" className="primary-button compact">Return to dashboard</Link>
        </div>
      </main>
    );
  }

  const rows = await getRows(section.resource);

  return (
    <main className="admin-page">
      <ResourceManagementPage
        title={section.title}
        description={section.description}
        resource={section.resource}
        fields={section.fields}
        initialRows={rows}
      />
    </main>
  );
}
