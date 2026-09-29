export const dynamic = "force-dynamic";

import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { DashboardGrid } from "./components";

async function getDashboardStats() {
  const supabase = await createSupabaseServerClient();

  const [medicines, pharmacies, categories, inventory, orders, users] = await Promise.all([
    supabase.from("medicines").select("id", { count: "exact", head: true }),
    supabase.from("pharmacies").select("id", { count: "exact", head: true }),
    supabase.from("categories").select("id", { count: "exact", head: true }),
    supabase.from("inventory").select("id", { count: "exact", head: true }),
    supabase.from("orders").select("id", { count: "exact", head: true }),
    supabase.from("users").select("id", { count: "exact", head: true }),
  ]);

  return {
    medicines: medicines.count ?? 0,
    pharmacies: pharmacies.count ?? 0,
    categories: categories.count ?? 0,
    inventory: inventory.count ?? 0,
    orders: orders.count ?? 0,
    customers: users.count ?? 0,
  };
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <main className="admin-page">
      <div className="dashboard-hero">
        <div>
          <p className="section-eyebrow">Operations Overview</p>
          <h1>Admin Dashboard</h1>
          <p className="hero-copy">
            Control the information, inventory and operations displayed across MEDINOW.
          </p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-shield">✚</div>
          <div className="hero-pill" />
          <div className="hero-pill small" />
        </div>
      </div>

      <section className="stat-strip">
        <div className="stat-box"><span>{stats.medicines}</span><small>Medicines</small></div>
        <div className="stat-box"><span>{stats.pharmacies}</span><small>Pharmacies</small></div>
        <div className="stat-box"><span>{stats.categories}</span><small>Categories</small></div>
        <div className="stat-box"><span>{stats.inventory}</span><small>Inventory</small></div>
        <div className="stat-box"><span>{stats.orders}</span><small>Orders</small></div>
      </section>

      <DashboardGrid>
        <section className="glass-panel large-panel">
          <div className="panel-headings">
            <div>
              <h2>Content Management</h2>
              <p>Manage core data for the platform</p>
            </div>
          </div>

          <div className="management-grid">
            {[
              { title: "Medicines", href: "/admin/medicines" },
              { title: "Pharmacies", href: "/admin/pharmacies" },
              { title: "Categories", href: "/admin/categories" },
              { title: "Inventory", href: "/admin/inventory" },
              { title: "Customers", href: "/admin/customers" },
              { title: "Locations", href: "/admin/locations" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="management-card">
                <div className="card-topline">
                  <span className="mini-icon">✚</span>
                  <span className="card-action">Add • Edit • Manage</span>
                </div>
                <div className="card-body">
                  <div className="card-title-wrap">
                    <span className="card-title">{item.title}</span>
                  </div>
                  <span className="card-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="glass-panel large-panel">
          <div className="panel-headings">
            <div>
              <h2>Customer App Content</h2>
              <p>Manage what customers see in the app</p>
            </div>
          </div>

          <div className="content-grid">
            {[
              { title: "Home Content", href: "/admin/content/home-content" },
              { title: "Medicine Search", href: "/admin/content/medicine-search" },
              { title: "Medicine Availability", href: "/admin/content/medicine-availability" },
              { title: "Medicine Details", href: "/admin/content/medicine-details" },
              { title: "Nearby Pharmacies", href: "/admin/content/nearby-pharmacies" },
              { title: "Saved Medicines", href: "/admin/content/saved-medicines" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="content-card">
                <span className="content-icon">◌</span>
                <span className="content-label">{item.title}</span>
                <span className="content-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </DashboardGrid>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Medicine Management</h2>
            <p>Manage medicine details and information</p>
          </div>
        </div>
        <div className="field-grid three-up">
          <div className="field-tile"><span>Medicine Name</span></div>
          <div className="field-tile"><span>Generic Name</span></div>
          <div className="field-tile"><span>Brand Name</span></div>
          <div className="field-tile"><span>Strength</span></div>
          <div className="field-tile"><span>Form</span></div>
          <div className="field-tile"><span>Pack Size</span></div>
          <div className="field-tile"><span>Category</span></div>
          <div className="field-tile"><span>Medicine Image</span></div>
          <div className="field-tile"><span>Prescription Status</span></div>
        </div>
        <Link href="/admin/medicines" className="primary-button">
          <span>＋</span>
          ADD MEDICINE
        </Link>
      </section>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Pharmacy &amp; Inventory Management</h2>
            <p>Manage pharmacies and stock information</p>
          </div>
        </div>
        <div className="two-column-layout">
          <div className="field-grid">
            <div className="field-tile"><span>Pharmacy</span></div>
            <div className="field-tile"><span>Location</span></div>
            <div className="field-tile"><span>Medicine</span></div>
            <div className="field-tile"><span>Stock</span></div>
            <div className="field-tile"><span>Price</span></div>
          </div>
          <div className="field-grid">
            <div className="field-tile"><span>MRP</span></div>
            <div className="field-tile"><span>Discount</span></div>
            <div className="field-tile"><span>Delivery Fee</span></div>
            <div className="field-tile"><span>Availability</span></div>
            <div className="field-tile"><span>Delivery Time</span></div>
          </div>
        </div>
        <div className="button-row">
          <Link href="/admin/pharmacies" className="primary-button compact">ADD PHARMACY</Link>
          <Link href="/admin/inventory" className="primary-button compact">MANAGE INVENTORY</Link>
        </div>
      </section>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Order &amp; Prescription Management</h2>
            <p>Manage orders and prescription requests</p>
          </div>
        </div>
        <div className="two-column-layout">
          <div className="field-grid">
            <div className="field-tile"><span>Orders</span></div>
            <div className="field-tile"><span>Order Status</span></div>
            <div className="field-tile"><span>Order Items</span></div>
            <div className="field-tile"><span>Customer</span></div>
          </div>
          <div className="field-grid">
            <div className="field-tile"><span>Delivery Location</span></div>
            <div className="field-tile"><span>Prescriptions</span></div>
            <div className="field-tile"><span>Prescription Status</span></div>
          </div>
        </div>
        <div className="button-row">
          <Link href="/admin/orders" className="primary-button compact">MANAGE ORDERS</Link>
          <Link href="/admin/prescriptions" className="primary-button compact">REVIEW PRESCRIPTIONS</Link>
        </div>
      </section>

      <section className="glass-panel info-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Customer Management</h2>
            <p>Manage customer information</p>
          </div>
        </div>
        <div className="stacked-list">
          <div className="field-tile"><span>Customers</span></div>
          <div className="field-tile"><span>Customer Profile</span></div>
          <div className="field-tile"><span>Saved Addresses</span></div>
          <div className="field-tile"><span>Saved Medicines</span></div>
          <div className="field-tile"><span>Order History</span></div>
        </div>
      </section>

      <section className="glass-panel full-width-panel">
        <div className="panel-headings compact">
          <div>
            <h2>Global Admin Actions</h2>
            <p>Quick actions for platform management</p>
          </div>
        </div>
        <div className="action-grid">
          {[
            { title: "Add New Medicine", href: "/admin/actions/add-new-medicine" },
            { title: "Add New Pharmacy", href: "/admin/actions/add-new-pharmacy" },
            { title: "Add Category", href: "/admin/actions/add-category" },
            { title: "Update Inventory", href: "/admin/actions/update-inventory" },
            { title: "Manage Orders", href: "/admin/actions/manage-orders" },
            { title: "Review Prescriptions", href: "/admin/actions/review-prescriptions" },
          ].map((action) => (
            <Link key={action.title} href={action.href} className="action-card">
              <span className="action-icon">✚</span>
              <span>{action.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <Link href="/admin/data" className="primary-button primary-cta">
        <span>◫</span>
        MANAGE DATA
      </Link>
    </main>
  );
}
