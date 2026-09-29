"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { ACTION_ITEMS, ADMIN_NAV, CONTENT_ITEMS } from "./data";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-mark">✚</div>
          <div>
            <div className="admin-brand-name">MEDINOW</div>
            <div className="admin-brand-subtitle">Admin Panel</div>
          </div>
        </div>

        <nav className="admin-nav" aria-label="Admin navigation">
          {ADMIN_NAV.map((section) => (
            <div key={section.section} className="nav-group">
              <p className="nav-group-label">{section.section}</p>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${item.href === "/admin" ? "active" : ""}`}
                >
                  <span>{item.label}</span>
                  <span className="nav-caret">›</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-links">
            <Link href="/admin/settings" className="sidebar-link">Settings</Link>
            <Link href="/login" className="sidebar-link">Logout</Link>
          </div>
          <div className="status-pill">
            <span className="status-dot" />
            Supabase Connected
          </div>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-search-wrap">
            <span className="admin-search-icon">⌕</span>
            <input
              aria-label="Search"
              className="admin-search"
              placeholder="Search medicines, pharmacies, orders, customers..."
            />
          </div>

          <div className="admin-topbar-actions">
            <button type="button" className="icon-button" aria-label="Notifications">
              🔔
            </button>
            <div className="profile-pill">
              <div className="profile-avatar">A</div>
              <div>
                <div className="profile-name">Admin</div>
              </div>
              <span className="profile-chevron">▾</span>
            </div>
            <button type="button" className="theme-button" aria-label="Theme settings">
              ⚙
            </button>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export function DashboardGrid({ children }: { children: ReactNode }) {
  return <div className="dashboard-grid">{children}</div>;
}

export function toDisplayValue(value: unknown) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "number") return value.toString();
  return String(value);
}

export type AdminField = {
  name: string;
  label: string;
  type?: string;
};

export type ResourceRow = Record<string, string | number | boolean | null | undefined>;

export function ResourceManagementPage({
  title,
  description,
  resource,
  fields,
  initialRows,
}: {
  title: string;
  description: string;
  resource: string;
  fields: ReadonlyArray<AdminField>;
  initialRows: ResourceRow[];
}) {
  const [rows, setRows] = useState<ResourceRow[]>(initialRows);
  const [form, setForm] = useState<Record<string, string | boolean>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, field.type === "checkbox" ? false : ""]))
  );
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visibleColumns = useMemo(() => {
    const keys = new Set<string>();
    rows.forEach((row) => Object.keys(row).forEach((key) => keys.add(key)));
    return Array.from(keys).slice(0, 6);
  }, [rows]);

  const handleChange = (name: string, value: string | boolean) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const payload: Record<string, string | number | boolean> = {};
    fields.forEach((field) => {
      const value = form[field.name];
      if (field.type === "checkbox") {
        payload[field.name] = Boolean(value);
        return;
      }
      if (field.type === "number") {
        payload[field.name] = value === "" ? 0 : Number(value);
        return;
      }
      payload[field.name] = value ?? "";
    });

    const response = await fetch("/api/admin/catalog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource, values: payload }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setMessage(data.error ?? "Unable to save the record.");
      setIsSubmitting(false);
      return;
    }

    setRows((current) => [data.data, ...current]);
    setForm(Object.fromEntries(fields.map((field) => [field.name, field.type === "checkbox" ? false : ""])));
    setMessage("Record added successfully.");
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="page-header">
        <p className="section-eyebrow">Platform management</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Add Entry</h2>
            <p>Create a new record using the live database schema.</p>
          </div>
        </div>

        <form className="resource-form" onSubmit={handleSubmit}>
          <div className="field-grid three-up">
            {fields.map((field) => (
              <label key={field.name} className="field-stack">
                <span>{field.label}</span>
                {field.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    checked={Boolean(form[field.name])}
                    onChange={(event) => handleChange(field.name, event.target.checked)}
                  />
                ) : field.type === "number" ? (
                  <input
                    type="number"
                    value={String(form[field.name] ?? "")}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    placeholder={field.label}
                  />
                ) : (
                  <input
                    type={field.type ?? "text"}
                    value={String(form[field.name] ?? "")}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    placeholder={field.label}
                  />
                )}
              </label>
            ))}
          </div>

          <div className="button-row">
            <button type="submit" className="primary-button compact" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Add Record"}
            </button>
            {message ? <span className="form-message">{message}</span> : null}
          </div>
        </form>
      </section>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Live Records</h2>
            <p>Current values from the connected Supabase tables.</p>
          </div>
        </div>

        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {visibleColumns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={visibleColumns.length || 1}>No records found.</td>
                </tr>
              ) : (
                rows.map((row, index) => (
                  <tr key={`${row.id ?? index}`}>
                    {visibleColumns.map((column) => (
                      <td key={column}>{toDisplayValue(row[column])}</td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
