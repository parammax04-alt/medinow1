import Link from "next/link";

export default function AdminDataPage() {
  return (
    <main className="admin-page">
      <section className="glass-panel info-panel">
        <div className="page-header">
          <p className="section-eyebrow">Data management</p>
          <h1>Manage Data</h1>
          <p>Centralize edits across the product catalog, pharmacy information, inventory, and customer records.</p>
        </div>

        <div className="stacked-list">
          <div className="field-tile"><span>Medicines</span></div>
          <div className="field-tile"><span>Pharmacies</span></div>
          <div className="field-tile"><span>Categories</span></div>
          <div className="field-tile"><span>Inventory</span></div>
          <div className="field-tile"><span>Orders</span></div>
          <div className="field-tile"><span>Prescriptions</span></div>
        </div>

        <div className="button-row">
          <Link href="/admin" className="primary-button compact">Back to dashboard</Link>
        </div>
      </section>
    </main>
  );
}
