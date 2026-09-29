export const ADMIN_NAV = [
  { section: "CONTENT MANAGEMENT", items: [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/medicines", label: "Medicines" },
    { href: "/admin/pharmacies", label: "Pharmacies" },
    { href: "/admin/categories", label: "Categories" },
    { href: "/admin/inventory", label: "Inventory" },
    { href: "/admin/customers", label: "Customers" },
    { href: "/admin/locations", label: "Locations" },
  ] },
  { section: "CUSTOMER APP CONTENT", items: [
    { href: "/admin/content", label: "Home Content" },
    { href: "/admin/content/medicine-search", label: "Medicine Search" },
    { href: "/admin/content/medicine-availability", label: "Medicine Availability" },
    { href: "/admin/content/medicine-details", label: "Medicine Details" },
    { href: "/admin/content/nearby-pharmacies", label: "Nearby Pharmacies" },
    { href: "/admin/content/saved-medicines", label: "Saved Medicines" },
  ] },
  { section: "MANAGEMENT", items: [
    { href: "/admin/orders", label: "Orders & Prescriptions" },
    { href: "/admin/customers", label: "Customer Management" },
    { href: "/admin/actions", label: "Global Admin Actions" },
  ] },
];

export const CONTENT_ITEMS = [
  { href: "/admin/content/home-content", label: "Home Content" },
  { href: "/admin/content/medicine-search", label: "Medicine Search" },
  { href: "/admin/content/medicine-availability", label: "Medicine Availability" },
  { href: "/admin/content/medicine-details", label: "Medicine Details" },
  { href: "/admin/content/nearby-pharmacies", label: "Nearby Pharmacies" },
  { href: "/admin/content/saved-medicines", label: "Saved Medicines" },
];

export const ACTION_ITEMS = [
  { href: "/admin/actions/add-new-medicine", label: "Add New Medicine" },
  { href: "/admin/actions/add-new-pharmacy", label: "Add New Pharmacy" },
  { href: "/admin/actions/add-category", label: "Add Category" },
  { href: "/admin/actions/update-inventory", label: "Update Inventory" },
  { href: "/admin/actions/manage-orders", label: "Manage Orders" },
  { href: "/admin/actions/review-prescriptions", label: "Review Prescriptions" },
];
