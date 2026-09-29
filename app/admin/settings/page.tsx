import Link from "next/link";

export default function AdminSettingsPage() {
  return (
    <main className="admin-page">
      <section className="glass-panel info-panel">
        <div className="page-header">
          <p className="section-eyebrow">Settings</p>
          <h1>Admin Settings</h1>
          <p>Manage platform configuration, security, and operational preferences.</p>
        </div>

        <div className="stacked-list">
          <div className="field-tile"><span>System preferences</span></div>
          <div className="field-tile"><span>Notifications</span></div>
          <div className="field-tile"><span>Access control</span></div>
          <div className="field-tile"><span>Supabase environment</span></div>
        </div>

        <div className="button-row">
          <Link href="/admin" className="primary-button compact">Back to dashboard</Link>
        </div>
      </section>
    </main>
  );
}
