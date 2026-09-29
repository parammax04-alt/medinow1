const quickActions = [
  {
    title: "FIND MEDICINE",
    subtitle: "Search and compare medicines and brands.",
    tone: "cyan",
  },
  {
    title: "UPLOAD PRESCRIPTION",
    subtitle: "Upload and get faster availability.",
    tone: "purple",
  },
  {
    title: "MY CART",
    subtitle: "View and manage your cart items.",
    tone: "blue",
  },
  {
    title: "MY ORDERS",
    subtitle: "Track and manage your orders.",
    tone: "indigo",
  },
];

const medicineRows = [1, 2, 3, 4];
const pharmacyCards = [1, 2, 3];
const orderRows = [1, 2, 3];
const savedMedicines = [1, 2, 3, 4];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="5.8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="6" r="1.6" fill="#09204a" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="1.6" fill="#09204a" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="18" r="1.6" fill="#09204a" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3" width="6" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-4 0h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.1 4.7a5 5 0 0 1 7.1 0l4.1 4.1a5 5 0 0 1-7.1 7.1L8.1 11.8a5 5 0 0 1 0-7.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9.1 12.8 7.1-7.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 14h4l2.5-7 4 12 2.6-5H21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PharmacyCabinetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 9h14v10H5zM2 9l2-5h16l2 5M9 5V3h6v2M9 14h6M12 11v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3.5h8l5 5V21H6zM14 3.5v5h5M12.5 12v5m-2.5-2.5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.4 10.4a1 1 0 0 0 1 .8H17a1 1 0 0 0 1-.8L20 7H7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="18" r="1.4" fill="currentColor" />
      <circle cx="17" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}

function OrderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h10l3 4v12H4V8l3-4Zm0 0v5h10V4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StatusBadge({ value }: { value: string }) {
  const tone = value.toLowerCase().includes("in stock") || value.toLowerCase().includes("available") || value.toLowerCase().includes("open") ? "positive" : value.toLowerCase().includes("processing") || value.toLowerCase().includes("on the way") ? "warning" : "neutral";

  return <span className={`status-badge ${tone}`}>{value}</span>;
}

export default function MedinowHomePage() {
  return (
    <main className="medinow-home">
      <div className="medinow-shell">
        <header className="topbar">
          <div className="brand-lockup" aria-label="MEDINOW home">
            <div className="brand-copy">
              <strong><span>MEDI</span>NOW</strong>
              <span>Better Health. Faster.</span>
            </div>
          </div>
        </header>

        <button type="button" className="search-box" aria-label="Search medicines, brands or health products">
          <span className="search-icon"><SearchIcon /></span>
          <span className="search-placeholder">Search medicines, brands or health products...</span>
          <span className="search-tools">
            <span className="tool-control"><MicrophoneIcon /></span>
            <span className="tool-control"><FilterIcon /></span>
          </span>
        </button>

        <section className="panel-section" aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading">Quick Actions</h2>
          <div className="quick-action-grid">
            {quickActions.map(({ title, subtitle, tone }) => (
              <button key={title} type="button" className={`action-card ${tone}`}>
                <span className="action-icon">
                  {title === "FIND MEDICINE" && <PillIcon />}
                  {title === "UPLOAD PRESCRIPTION" && <DocumentIcon />}
                  {title === "MY CART" && <CartIcon />}
                  {title === "MY ORDERS" && <OrderIcon />}
                </span>
                <span className="action-copy">
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </span>
                <span className="action-arrow"><ArrowIcon /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="panel-section card-section" aria-labelledby="availability-heading">
          <div className="section-header">
            <div className="header-label">
              <span className="section-icon"><PillIcon /></span>
              <div>
                <h2 id="availability-heading">Medicine Availability</h2>
                <p>Check medicine availability across pharmacies.</p>
              </div>
            </div>
            <div className="header-actions">
              <button type="button" className="text-button">SEARCH ALL MEDICINES <SearchIcon /></button>
              <button type="button" className="text-button">VIEW MORE <ArrowIcon /></button>
            </div>
          </div>

          <div className="table-grid medicine-table" aria-label="Medicine availability table">
            <div className="table-row table-head">
              <span>MEDICINE</span>
              <span>PHARMACY</span>
              <span>STOCK STATUS</span>
              <span>PRICE</span>
              <span>EST. DELIVERY</span>
              <span>ACTION</span>
            </div>
            {medicineRows.map((row) => (
              <div key={row} className="table-row skeleton-row" aria-hidden="true">
                {Array.from({ length: 6 }, (_, column) => <span key={column}><i /></span>)}
              </div>
            ))}
          </div>
        </section>

        <section className="panel-section card-section" aria-labelledby="pharmacies-heading">
          <div className="section-header compact">
            <div className="header-label">
              <span className="section-icon"><PharmacyCabinetIcon /></span>
              <div>
                <h2 id="pharmacies-heading">Nearby Pharmacies</h2>
                <p>Find pharmacies near your delivery location.</p>
              </div>
            </div>
            <button type="button" className="text-button">VIEW ALL</button>
          </div>

          <div className="pharmacy-grid">
            {pharmacyCards.map((card) => (
              <article key={card} className="pharmacy-card">
                <div className="pharmacy-thumb" aria-hidden="true"><PharmacyCabinetIcon /><i /></div>
                <div className="pharmacy-meta">
                  <div className="pharmacy-name-skeleton skeleton-bar" />
                  {["PHARMACY", "DISTANCE", "RATING", "STATUS", "DELIVERY", "AVAILABLE MEDICINES"].map((label) => (
                    <div className="pharmacy-line" key={label}>
                      <span className="mini-label"><span className="mini-symbol">{label === "PHARMACY" ? <PharmacyCabinetIcon /> : label === "DISTANCE" ? <LocationIcon /> : label === "RATING" ? <ActivityIcon /> : label === "DELIVERY" ? <OrderIcon /> : <PillIcon />}</span>{label}</span>
                      <i className="skeleton-bar" />
                    </div>
                  ))}
                  <button type="button" className="view-button">VIEW PHARMACY <ArrowIcon /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel-section card-section orders-panel" aria-labelledby="orders-heading">
            <div className="section-header compact">
              <div className="header-label">
                <span className="section-icon"><OrderIcon /></span>
                <div>
                  <h2 id="orders-heading">Active Orders</h2>
                  <p>Track your ongoing orders.</p>
                </div>
              </div>
              <button type="button" className="text-button">VIEW ALL</button>
            </div>

            <div className="table-grid order-table" aria-label="Active orders table">
              <div className="table-row table-head">
                <span>ORDER ID</span>
                <span>MEDICINES</span>
                <span>PHARMACY</span>
                <span>STATUS</span>
                <span>EXPECTED DELIVERY</span>
                <span>ACTION</span>
              </div>
              {orderRows.map((row) => (
                <div key={row} className="table-row skeleton-row" aria-hidden="true">
                  {Array.from({ length: 6 }, (_, column) => <span key={column}><i /></span>)}
                </div>
              ))}
            </div>
            <button type="button" className="track-order-button"><LocationIcon />TRACK ORDER<ArrowIcon /></button>
        </section>

        <section className="panel-section card-section recent-panel" aria-labelledby="recent-orders-heading">
            <div className="section-header compact">
              <div className="header-label">
                <span className="section-icon"><ClockIcon /></span>
                <div>
                  <h2 id="recent-orders-heading">Recent Orders</h2>
                </div>
              </div>
            </div>

            <div className="table-grid simple-table" aria-label="Recent orders table">
              <div className="table-row table-head">
                <span>ORDER ID</span>
                <span>DATE</span>
                <span>PHARMACY</span>
                <span>AMOUNT</span>
                <span>STATUS</span>
              </div>
              {orderRows.map((row) => (
                <div key={row} className="table-row skeleton-row" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, column) => <span key={column}><i /></span>)}
                </div>
              ))}
            </div>
            <button type="button" className="text-button recent-view-all">VIEW ALL <ArrowIcon /></button>
        </section>

        <section className="panel-section card-section" aria-labelledby="saved-medicines-heading">
          <div className="section-header compact">
            <div className="header-label">
              <span className="section-icon"><BookmarkIcon /></span>
              <div>
                <h2 id="saved-medicines-heading">Saved Medicines</h2>
                <p>Quickly order your frequently used medicines.</p>
              </div>
            </div>
            <button type="button" className="text-button">VIEW ALL</button>
          </div>

          <div className="saved-grid">
            {savedMedicines.map((medicine) => (
              <article key={medicine} className="saved-card">
                <div className="saved-thumb"><PillIcon /></div>
                <div className="saved-copy" aria-hidden="true">
                  {["MEDICINE", "DOSAGE / VARIANT", "LAST ORDERED", "AVAILABILITY"].map((label) => (
                    <span className="saved-field" key={label}>{label}<i className="skeleton-bar" /></span>
                  ))}
                </div>
                <button type="button" className="inline-action large">ORDER AGAIN <ArrowIcon /></button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
