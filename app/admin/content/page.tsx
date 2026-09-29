import Link from "next/link";
import { CONTENT_ITEMS } from "../data";

export default function CustomerAppContentPage() {
  return (
    <main className="admin-page">
      <section className="glass-panel large-panel">
        <div className="panel-headings">
          <div>
            <h2>Customer App Content</h2>
            <p>Manage what customers see in the app</p>
          </div>
        </div>
        <div className="content-grid">
          {CONTENT_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="content-icon">◌</span>
              <span className="content-label">{item.label}</span>
              <span className="content-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
