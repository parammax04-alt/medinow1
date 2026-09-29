import Link from "next/link";

const ACTION_PAGE_META: Record<string, { title: string; description: string }> = {
  "add-new-medicine": {
    title: "Add New Medicine",
    description: "Create a new medicine record and sync it to the live medicine catalog.",
  },
  "add-new-pharmacy": {
    title: "Add New Pharmacy",
    description: "Register a new pharmacy and connect it to the platform inventory system.",
  },
  "add-category": {
    title: "Add Category",
    description: "Create new category entries for product and search organization.",
  },
  "update-inventory": {
    title: "Update Inventory",
    description: "Adjust stock, pricing, and pharmacy availability from a central source of truth.",
  },
  "manage-orders": {
    title: "Manage Orders",
    description: "Review live orders, delivery states, and customer fulfillment details.",
  },
  "review-prescriptions": {
    title: "Review Prescriptions",
    description: "Track prescription uploads and statuses before order fulfillment.",
  },
};

export default async function ActionSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const action = ACTION_PAGE_META[slug] ?? {
    title: "Admin Action",
    description: "Platform management action.",
  };

  return (
    <main className="admin-page">
      <section className="glass-panel info-panel">
        <div className="page-header">
          <p className="section-eyebrow">Global admin action</p>
          <h1>{action.title}</h1>
          <p>{action.description}</p>
        </div>

        <div className="stacked-list">
          <div className="field-tile"><span>Action target</span></div>
          <div className="field-tile"><span>Audit trail</span></div>
          <div className="field-tile"><span>Validation</span></div>
          <div className="field-tile"><span>Supabase sync</span></div>
          <div className="field-tile"><span>Monitoring</span></div>
        </div>

        <div className="button-row">
          <Link href="/admin/actions" className="primary-button compact">Back to actions</Link>
          <Link href="/admin" className="primary-button compact">Dashboard</Link>
        </div>
      </section>
    </main>
  );
}
