import Link from "next/link";
import { ACTION_ITEMS } from "../data";

export default function GlobalActionsPage() {
  return (
    <main className="admin-page">
      <section className="glass-panel full-width-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Global Admin Actions</h2>
            <p>Quick actions for platform management</p>
          </div>
        </div>
        <div className="action-grid">
          {ACTION_ITEMS.map((action) => (
            <Link key={action.href} href={action.href} className="action-card">
              <span className="action-icon">✚</span>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
