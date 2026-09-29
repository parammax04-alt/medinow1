import Link from "next/link";

const CONTENT_PAGE_META: Record<string, { title: string; description: string }> = {
  "home-content": {
    title: "Home Content Management",
    description: "Manage hero modules, featured sections, and homepage content shown to customers.",
  },
  "medicine-search": {
    title: "Medicine Search Management",
    description: "Tune search filters, labels, and default search behavior for medicine discovery.",
  },
  "medicine-availability": {
    title: "Medicine Availability Management",
    description: "Highlight stock visibility and availability messaging for customer-facing screens.",
  },
  "medicine-details": {
    title: "Medicine Details Management",
    description: "Control the content displayed on each medicine details page.",
  },
  "nearby-pharmacies": {
    title: "Nearby Pharmacies Management",
    description: "Manage local pharmacy discovery results and nearby listing copy.",
  },
  "saved-medicines": {
    title: "Saved Medicines Management",
    description: "Control saved-lists messaging and customer preferences for favorite medicines.",
  },
};

export default async function ContentSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = CONTENT_PAGE_META[slug] ?? {
    title: "Customer App Content",
    description: "Manage platform content shown to customers.",
  };

  return (
    <main className="admin-page">
      <section className="glass-panel info-panel">
        <div className="page-header">
          <p className="section-eyebrow">Customer app content</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>

        <div className="stacked-list">
          <div className="field-tile"><span>Section</span></div>
          <div className="field-tile"><span>Hero / CTA Content</span></div>
          <div className="field-tile"><span>Display Rules</span></div>
          <div className="field-tile"><span>Module Visibility</span></div>
          <div className="field-tile"><span>Scheduling</span></div>
        </div>

        <div className="button-row">
          <Link href="/admin/content" className="primary-button compact">Back to content</Link>
          <Link href="/admin" className="primary-button compact">Dashboard</Link>
        </div>
      </section>
    </main>
  );
}
