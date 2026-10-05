import { useState } from "react";

import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Package,
  ShieldCheck,
  Truck,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

import "./App.css";

type Page =
  | "overview"
  | "risks"
  | "expiry"
  | "suppliers"
  | "procurement";

function App() {
  const [activePage, setActivePage] = useState<Page>("overview");
  const [showRescue, setShowRescue] = useState(false);
  const [rescueExecuted, setRescueExecuted] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const openRescue = () => {
    if (!rescueExecuted) {
      setShowRescue(true);
    }
  };

  const closeRescue = () => {
    setShowRescue(false);
  };

  const executeRescue = () => {
    setRescueExecuted(true);
    setShowRescue(false);
  };

  const navigateTo = (page: Page) => {
    setActivePage(page);
    setShowNotifications(false);
  };

  return (
    <div className="app-shell">
      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <ShieldCheck size={21} />
          </div>

          <div>
            <div className="brand-name">StockSentinel</div>

            <div className="brand-subtitle">
              Supply Intelligence
            </div>
          </div>
        </div>

        <nav className="navigation">
          <button
            type="button"
            className={`nav-item ${
              activePage === "overview" ? "active" : ""
            }`}
            onClick={() => navigateTo("overview")}
          >
            <Package size={18} />
            Overview
          </button>

          <button
            type="button"
            className={`nav-item ${
              activePage === "risks" ? "active" : ""
            }`}
            onClick={() => navigateTo("risks")}
          >
            <AlertTriangle size={18} />
            Supply Risks

            <span className="nav-badge">
              {rescueExecuted ? "2" : "3"}
            </span>
          </button>

          <button
            type="button"
            className={`nav-item ${
              activePage === "expiry" ? "active" : ""
            }`}
            onClick={() => navigateTo("expiry")}
          >
            <Clock3 size={18} />
            Expiry Radar
          </button>

          <button
            type="button"
            className={`nav-item ${
              activePage === "suppliers" ? "active" : ""
            }`}
            onClick={() => navigateTo("suppliers")}
          >
            <Truck size={18} />
            Suppliers
          </button>

          <button
            type="button"
            className={`nav-item ${
              activePage === "procurement" ? "active" : ""
            }`}
            onClick={() => navigateTo("procurement")}
          >
            <TrendingUp size={18} />
            Procurement
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button
            type="button"
            className="network-card"
            onClick={() => navigateTo("suppliers")}
            style={{
              width: "100%",
              textAlign: "left",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div className="network-icon">
              <Zap size={17} />
            </div>

            <div>
              <div className="network-title">
                Network Active
              </div>

              <div className="network-text">
                14 merchants connected
              </div>
            </div>
          </button>

          <div className="merchant-profile">
            <div className="avatar">LM</div>

            <div>
              <div className="merchant-name">
                Lakshmi Fresh Mart
              </div>

              <div className="merchant-location">
                Bengaluru · Retail
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="main-content">
        {/* HEADER */}

        <header className="topbar">
          <div>
            <div className="eyebrow">
              MERCHANT CONTROL TOWER
            </div>

            <h1>
              {activePage === "overview" &&
                "Good evening, Lakshmi."}

              {activePage === "risks" &&
                "Supply risks need attention."}

              {activePage === "expiry" &&
                "Expiry intelligence."}

              {activePage === "suppliers" &&
                "Supplier intelligence."}

              {activePage === "procurement" &&
                "Procurement opportunities."}
            </h1>

            <p>
              {activePage === "overview" &&
                "Here’s what needs your attention today."}

              {activePage === "risks" &&
                "Prioritize the products most likely to disrupt your sales."}

              {activePage === "expiry" &&
                "Protect inventory before it turns into waste."}

              {activePage === "suppliers" &&
                "Understand reliability across your supply network."}

              {activePage === "procurement" &&
                "Combine demand with nearby merchants to improve margins."}
            </p>
          </div>

          <div className="topbar-actions">
            <div className="live-status">
              <span className="live-dot"></span>
              LIVE
            </div>

            <div style={{ position: "relative" }}>
              <button
                type="button"
                className="icon-button"
                aria-label="Notifications"
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
              >
                <Bell size={19} />

                <span className="notification-dot"></span>
              </button>

              {showNotifications && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "48px",
                    width: "320px",
                    background: "#10141b",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "18px",
                    zIndex: 5000,
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.45)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      color: "#8d98a8",
                      marginBottom: "12px",
                    }}
                  >
                    NOTIFICATIONS
                  </div>

                  <div
                    style={{
                      padding: "12px 0",
                      borderBottom:
                        "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <strong>Milk stockout risk</strong>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#8d98a8",
                        marginTop: "5px",
                      }}
                    >
                      Rescue recommendation available.
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "12px 0",
                      borderBottom:
                        "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <strong>14 units expiring tomorrow</strong>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#8d98a8",
                        marginTop: "5px",
                      }}
                    >
                      Milk inventory requires attention.
                    </div>
                  </div>

                  <div style={{ paddingTop: "12px" }}>
                    <strong>FreshRoute reliability dropped</strong>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#8d98a8",
                        marginTop: "5px",
                      }}
                    >
                      Delivery delays increased 31%.
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="top-avatar">LM</div>
          </div>
        </header>

        {/* =====================================================
            OVERVIEW
            ===================================================== */}

        {activePage === "overview" && (
          <>
            {/* KPI CARDS */}

            <section className="metrics-grid">
              <button
                type="button"
                className="metric-card"
                onClick={() => navigateTo("risks")}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <div className="metric-header">
                  <span>SUPPLY HEALTH</span>

                  <div className="metric-icon green">
                    <ShieldCheck size={17} />
                  </div>
                </div>

                <div className="metric-value">
                  {rescueExecuted ? "82" : "74"}

                  <span>/100</span>
                </div>

                <div className="metric-footer positive">
                  <TrendingUp size={14} />

                  {rescueExecuted
                    ? "11% improved after rescue"
                    : "8% better this week"}
                </div>
              </button>

              <button
                type="button"
                className="metric-card"
                onClick={() => navigateTo("expiry")}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <div className="metric-header">
                  <span>INVENTORY VALUE</span>

                  <div className="metric-icon blue">
                    <Package size={17} />
                  </div>
                </div>

                <div className="metric-value">
                  ₹42,000
                </div>

                <div className="metric-footer">
                  126 products tracked
                </div>
              </button>

              <button
                type="button"
                className="metric-card risk-card"
                onClick={() => navigateTo("risks")}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <div className="metric-header">
                  <span>VALUE AT RISK</span>

                  <div className="metric-icon red">
                    <AlertTriangle size={17} />
                  </div>
                </div>

                <div className="metric-value">
                  {rescueExecuted
                    ? "₹5,368"
                    : "₹6,840"}
                </div>

                <div className="metric-footer negative">
                  <TrendingDown size={14} />

                  {rescueExecuted
                    ? "₹1,472 exposure rescued"
                    : "3 critical exposures"}
                </div>
              </button>

              <button
                type="button"
                className="metric-card"
                onClick={() => navigateTo("suppliers")}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <div className="metric-header">
                  <span>ACTIVE SUPPLIERS</span>

                  <div className="metric-icon purple">
                    <Truck size={17} />
                  </div>
                </div>

                <div className="metric-value">
                  7
                </div>

                <div className="metric-footer">
                  92% average reliability
                </div>
              </button>
            </section>

            {/* SUPPLY EMERGENCY */}

            <section className="emergency-card">
              <div className="emergency-top">
                <div className="alert-label">
                  {rescueExecuted ? (
                    <>
                      <CheckCircle2 size={13} />
                      RESCUE ACTIVE
                    </>
                  ) : (
                    <>
                      <span className="pulse"></span>
                      SUPPLY EMERGENCY
                    </>
                  )}
                </div>

                <span className="critical-pill">
                  {rescueExecuted
                    ? "IN PROGRESS"
                    : "CRITICAL"}
                </span>
              </div>

              <div className="emergency-content">
                <div className="product-block">
                  <div className="product-icon">
                    {rescueExecuted ? (
                      <CheckCircle2 size={25} />
                    ) : (
                      <Package size={25} />
                    )}
                  </div>

                  <div>
                    <h2>Milk 500ml</h2>

                    <p>
                      Fast-moving essential · Category: Dairy
                    </p>
                  </div>
                </div>

                <div className="emergency-stats">
                  <div>
                    <span>STOCK</span>

                    <strong>
                      18 <small>units</small>
                    </strong>
                  </div>

                  <div>
                    <span>EXPECTED DEMAND</span>

                    <strong>
                      31 <small>units</small>
                    </strong>
                  </div>

                  <div>
                    <span>EXPIRING TOMORROW</span>

                    <strong className="danger-number">
                      14 <small>units</small>
                    </strong>
                  </div>

                  <div>
                    <span>SUPPLY STATUS</span>

                    <strong
                      className={
                        rescueExecuted
                          ? "supplier-success"
                          : "supplier-danger"
                      }
                    >
                      {rescueExecuted
                        ? "RESCUE ACTIVE"
                        : "OUT OF STOCK"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="emergency-bottom">
                <div className="emergency-message">
                  {rescueExecuted ? (
                    <>
                      <CheckCircle2 size={16} />

                      Rescue plan activated · 25 min ETA · ₹1,472 protected
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={16} />

                      Stockout risk detected before evening demand peak.
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="rescue-button"
                  onClick={openRescue}
                  disabled={rescueExecuted}
                >
                  {rescueExecuted ? (
                    <>
                      <CheckCircle2 size={17} />
                      RESCUE IN PROGRESS
                    </>
                  ) : (
                    <>
                      <Zap size={17} />
                      RESCUE SUPPLY
                      <ChevronRight size={17} />
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* LOWER DASHBOARD */}

            <section className="dashboard-grid">
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <div className="panel-title">
                      Expiry Radar
                    </div>

                    <div className="panel-subtitle">
                      Inventory approaching shelf-life limits
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-button"
                    onClick={() => navigateTo("expiry")}
                  >
                    View all
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="expiry-list">
                  <ExpiryRow
                    name="Milk 500ml"
                    units="14 units"
                    days="1 day"
                    risk={
                      rescueExecuted
                        ? "MONITORED"
                        : "HIGH"
                    }
                    riskClass={
                      rescueExecuted
                        ? "medium"
                        : "high"
                    }
                    onClick={() => navigateTo("expiry")}
                  />

                  <ExpiryRow
                    name="Bread"
                    units="21 units"
                    days="2 days"
                    risk="HIGH"
                    riskClass="high"
                    onClick={() => navigateTo("expiry")}
                  />

                  <ExpiryRow
                    name="Yogurt 400g"
                    units="8 units"
                    days="3 days"
                    risk="MEDIUM"
                    riskClass="medium"
                    onClick={() => navigateTo("expiry")}
                  />

                  <ExpiryRow
                    name="Fresh Juice"
                    units="31 units"
                    days="18 days"
                    risk="LOW"
                    riskClass="low"
                    onClick={() => navigateTo("expiry")}
                  />
                </div>
              </div>

              <div className="panel">
                <div className="panel-header">
                  <div>
                    <div className="panel-title">
                      Supplier Intelligence
                    </div>

                    <div className="panel-subtitle">
                      Reliability across your supply network
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-button"
                    onClick={() => navigateTo("suppliers")}
                  >
                    Suppliers
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="supplier-list">
                  <SupplierRow
                    name="Sri Balaji Distributors"
                    score="92"
                    status="Excellent"
                    width="92%"
                    onClick={() =>
                      navigateTo("suppliers")
                    }
                  />

                  <SupplierRow
                    name="Metro Wholesale"
                    score="88"
                    status="Reliable"
                    width="88%"
                    onClick={() =>
                      navigateTo("suppliers")
                    }
                  />

                  <SupplierRow
                    name="FreshRoute Supply"
                    score="71"
                    status="Watch"
                    width="71%"
                    onClick={() =>
                      navigateTo("suppliers")
                    }
                  />
                </div>

                <div className="supplier-warning">
                  <AlertTriangle size={15} />
                  FreshRoute delivery delays increased 31% this month.
                </div>
              </div>
            </section>

            {/* PROCUREMENT */}

            <button
              type="button"
              className="procurement-card"
              onClick={() => navigateTo("procurement")}
              style={{
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <div className="procurement-left">
                <div className="procurement-icon">
                  <TrendingUp size={20} />
                </div>

                <div>
                  <div className="procurement-label">
                    COLLECTIVE PROCUREMENT
                  </div>

                  <h3>
                    Pool demand with nearby merchants.
                  </h3>

                  <p>
                    14 merchants need the same products this week.
                    Combine demand to unlock better supplier pricing.
                  </p>
                </div>
              </div>

              <div className="procurement-stat">
                <span>CURRENT</span>

                <strong>₹82</strong>

                <small>/ unit</small>
              </div>

              <div className="procurement-arrow">
                →
              </div>

              <div className="procurement-stat highlight-stat">
                <span>POOLED PRICE</span>

                <strong>₹75</strong>

                <small>/ unit</small>
              </div>

              <div className="savings">
                <span>POTENTIAL SAVINGS</span>

                <strong>₹16,800</strong>
              </div>
            </button>
          </>
        )}

        {/* =====================================================
            SUPPLY RISKS PAGE
            ===================================================== */}

        {activePage === "risks" && (
          <RiskPage
            rescueExecuted={rescueExecuted}
            onRescue={openRescue}
          />
        )}

        {/* =====================================================
            EXPIRY PAGE
            ===================================================== */}

        {activePage === "expiry" && (
          <ExpiryPage
            rescueExecuted={rescueExecuted}
          />
        )}

        {/* =====================================================
            SUPPLIERS PAGE
            ===================================================== */}

        {activePage === "suppliers" && (
          <SupplierPage />
        )}

        {/* =====================================================
            PROCUREMENT PAGE
            ===================================================== */}

        {activePage === "procurement" && (
          <ProcurementPage />
        )}

        {/* =====================================================
            SUPPLY RESCUE MODAL
            ===================================================== */}

        {showRescue && (
          <div
            className="rescue-overlay"
            onClick={closeRescue}
          >
            <div
              className="rescue-modal"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <button
                type="button"
                className="close-rescue"
                onClick={closeRescue}
                aria-label="Close rescue panel"
              >
                ×
              </button>

              <div className="rescue-heading">
                <div className="rescue-heading-icon">
                  <Zap size={20} />
                </div>

                <div>
                  <div className="eyebrow">
                    SUPPLY CONTINUITY ENGINE
                  </div>

                  <h2>Supply Rescue</h2>

                  <p>
                    StockSentinel found alternative sources
                    for Milk 500ml.
                  </p>
                </div>
              </div>

              <div className="rescue-product">
                <div>
                  <span>PRODUCT</span>
                  <strong>Milk 500ml</strong>
                </div>

                <div>
                  <span>SHORTFALL</span>
                  <strong>13 units</strong>
                </div>

                <div>
                  <span>PRIMARY SUPPLIER</span>
                  <strong className="danger-text">
                    OUT OF STOCK
                  </strong>
                </div>
              </div>

              <div className="source-heading">
                AVAILABLE SOURCES
              </div>

              <div className="source-card recommended">
                <div className="source-icon merchant">
                  <Package size={19} />
                </div>

                <div className="source-main">
                  <div className="source-title-row">
                    <strong>Merchant B</strong>

                    <span className="recommended-tag">
                      RECOMMENDED
                    </span>
                  </div>

                  <p>Nearby merchant inventory</p>

                  <div className="source-details">
                    <span>
                      <b>11</b> units
                    </span>

                    <span>600m away</span>

                    <span>25 min ETA</span>

                    <span>96% reliability</span>
                  </div>
                </div>
              </div>

              <div className="source-card">
                <div className="source-icon vendor">
                  <Truck size={19} />
                </div>

                <div className="source-main">
                  <div className="source-title-row">
                    <strong>Vendor C</strong>

                    <span className="backup-tag">
                      BACKUP
                    </span>
                  </div>

                  <p>Regional wholesale supplier</p>

                  <div className="source-details">
                    <span>
                      <b>40</b> units
                    </span>

                    <span>1.8 km away</span>

                    <span>75 min ETA</span>

                    <span>94% reliability</span>
                  </div>
                </div>
              </div>

              <div className="optimal-plan">
                <div className="plan-label">
                  OPTIMAL RESCUE PLAN
                </div>

                <div className="plan-row">
                  <div>
                    <strong>11 units</strong>

                    <span>← Merchant B</span>
                  </div>

                  <div>
                    <strong>2 units</strong>

                    <span>← Vendor C</span>
                  </div>
                </div>

                <div className="plan-result">
                  <div>
                    <span>ESTIMATED ETA</span>

                    <strong>25 min</strong>
                  </div>

                  <div>
                    <span>VALUE PROTECTED</span>

                    <strong className="value-protected">
                      ₹1,472
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="execute-button"
                  onClick={executeRescue}
                >
                  <Zap size={16} />
                  EXECUTE RESCUE PLAN
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   SUPPLY RISKS PAGE
   ========================================================= */

function RiskPage({
  rescueExecuted,
  onRescue,
}: {
  rescueExecuted: boolean;
  onRescue: () => void;
}) {
  return (
    <div>
      <section className="metrics-grid">
        <div className="metric-card risk-card">
          <div className="metric-header">
            <span>CRITICAL RISKS</span>

            <div className="metric-icon red">
              <AlertTriangle size={17} />
            </div>
          </div>

          <div className="metric-value">
            {rescueExecuted ? "2" : "3"}
          </div>

          <div className="metric-footer negative">
            Immediate attention required
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>STOCKOUT EXPOSURE</span>

            <div className="metric-icon blue">
              <Package size={17} />
            </div>
          </div>

          <div className="metric-value">
            ₹4,120
          </div>

          <div className="metric-footer">
            Across 6 products
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>DEMAND PRESSURE</span>

            <div className="metric-icon purple">
              <TrendingUp size={17} />
            </div>
          </div>

          <div className="metric-value">
            HIGH
          </div>

          <div className="metric-footer">
            Evening demand peak
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <div className="panel-title">
              Active Supply Risks
            </div>

            <div className="panel-subtitle">
              Products where demand, availability and supplier risk intersect.
            </div>
          </div>
        </div>

        <div className="expiry-list">
          <div
            className="expiry-row"
            style={{ cursor: "pointer" }}
            onClick={onRescue}
          >
            <div className="risk-dot high"></div>

            <div className="expiry-product">
              <strong>Milk 500ml</strong>
              <span>Stockout risk · Supplier unavailable</span>
            </div>

            <div className="expiry-days">
              13 units short
            </div>

            <div className="risk-tag high">
              CRITICAL
            </div>
          </div>

          <div className="expiry-row">
            <div className="risk-dot high"></div>

            <div className="expiry-product">
              <strong>Sunflower Oil 1L</strong>
              <span>Demand spike expected</span>
            </div>

            <div className="expiry-days">
              2 days
            </div>

            <div className="risk-tag high">
              HIGH
            </div>
          </div>

          <div className="expiry-row">
            <div className="risk-dot medium"></div>

            <div className="expiry-product">
              <strong>Rice 5kg</strong>
              <span>Supplier lead time increasing</span>
            </div>

            <div className="expiry-days">
              4 days
            </div>

            <div className="risk-tag medium">
              MEDIUM
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   EXPIRY PAGE
   ========================================================= */

function ExpiryPage({
  rescueExecuted,
}: {
  rescueExecuted: boolean;
}) {
  return (
    <div>
      <section className="metrics-grid">
        <div className="metric-card risk-card">
          <div className="metric-header">
            <span>AT RISK</span>

            <div className="metric-icon red">
              <Clock3 size={17} />
            </div>
          </div>

          <div className="metric-value">
            ₹2,940
          </div>

          <div className="metric-footer negative">
            Potential expiry loss
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>UNITS EXPIRING</span>

            <div className="metric-icon blue">
              <Package size={17} />
            </div>
          </div>

          <div className="metric-value">
            {rescueExecuted ? "64" : "78"}
          </div>

          <div className="metric-footer">
            Within 7 days
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>FEFO COVERAGE</span>

            <div className="metric-icon green">
              <ShieldCheck size={17} />
            </div>
          </div>

          <div className="metric-value">
            86%
          </div>

          <div className="metric-footer positive">
            Inventory rotation optimized
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <div className="panel-title">
              Expiry Radar
            </div>

            <div className="panel-subtitle">
              Prioritized by expiry window and inventory value.
            </div>
          </div>
        </div>

        <div className="expiry-list">
          <ExpiryRow
            name="Milk 500ml"
            units="14 units"
            days="1 day"
            risk={rescueExecuted ? "MONITORED" : "HIGH"}
            riskClass={rescueExecuted ? "medium" : "high"}
          />

          <ExpiryRow
            name="Bread"
            units="21 units"
            days="2 days"
            risk="HIGH"
            riskClass="high"
          />

          <ExpiryRow
            name="Yogurt 400g"
            units="8 units"
            days="3 days"
            risk="MEDIUM"
            riskClass="medium"
          />

          <ExpiryRow
            name="Paneer 200g"
            units="17 units"
            days="5 days"
            risk="MEDIUM"
            riskClass="medium"
          />

          <ExpiryRow
            name="Fresh Juice"
            units="31 units"
            days="18 days"
            risk="LOW"
            riskClass="low"
          />
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   SUPPLIER PAGE
   ========================================================= */

function SupplierPage() {
  return (
    <div>
      <section className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span>ACTIVE SUPPLIERS</span>

            <div className="metric-icon purple">
              <Truck size={17} />
            </div>
          </div>

          <div className="metric-value">
            7
          </div>

          <div className="metric-footer">
            Across 5 categories
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>AVG RELIABILITY</span>

            <div className="metric-icon green">
              <ShieldCheck size={17} />
            </div>
          </div>

          <div className="metric-value">
            92%
          </div>

          <div className="metric-footer positive">
            +4% this month
          </div>
        </div>

        <div className="metric-card risk-card">
          <div className="metric-header">
            <span>SUPPLIERS TO WATCH</span>

            <div className="metric-icon red">
              <AlertTriangle size={17} />
            </div>
          </div>

          <div className="metric-value">
            1
          </div>

          <div className="metric-footer negative">
            FreshRoute Supply
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <div className="panel-title">
              Supplier Intelligence
            </div>

            <div className="panel-subtitle">
              Reliability, delivery performance and supply risk.
            </div>
          </div>
        </div>

        <div className="supplier-list">
          <SupplierRow
            name="Sri Balaji Distributors"
            score="92"
            status="Excellent"
            width="92%"
          />

          <SupplierRow
            name="Metro Wholesale"
            score="88"
            status="Reliable"
            width="88%"
          />

          <SupplierRow
            name="FreshRoute Supply"
            score="71"
            status="Watch"
            width="71%"
          />

          <SupplierRow
            name="CityGro Wholesale"
            score="95"
            status="Excellent"
            width="95%"
          />
        </div>

        <div className="supplier-warning">
          <AlertTriangle size={15} />
          FreshRoute delivery delays increased 31% this month.
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   PROCUREMENT PAGE
   ========================================================= */

function ProcurementPage() {
  return (
    <div>
      <section className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span>MERCHANTS CONNECTED</span>

            <div className="metric-icon blue">
              <Package size={17} />
            </div>
          </div>

          <div className="metric-value">
            14
          </div>

          <div className="metric-footer">
            Active local network
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>AVERAGE SAVINGS</span>

            <div className="metric-icon green">
              <TrendingDown size={17} />
            </div>
          </div>

          <div className="metric-value">
            8.5%
          </div>

          <div className="metric-footer positive">
            Through pooled orders
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span>ACTIVE OPPORTUNITIES</span>

            <div className="metric-icon purple">
              <TrendingUp size={17} />
            </div>
          </div>

          <div className="metric-value">
            4
          </div>

          <div className="metric-footer">
            Available this week
          </div>
        </div>
      </section>

      <section className="procurement-card">
        <div className="procurement-left">
          <div className="procurement-icon">
            <TrendingUp size={20} />
          </div>

          <div>
            <div className="procurement-label">
              TOP PROCUREMENT OPPORTUNITY
            </div>

            <h3>
              Milk 500ml pooled order
            </h3>

            <p>
              14 merchants need the same product this week.
              Combine demand to unlock supplier pricing.
            </p>
          </div>
        </div>

        <div className="procurement-stat">
          <span>CURRENT</span>

          <strong>₹82</strong>

          <small>/ unit</small>
        </div>

        <div className="procurement-arrow">
          →
        </div>

        <div className="procurement-stat highlight-stat">
          <span>POOLED PRICE</span>

          <strong>₹75</strong>

          <small>/ unit</small>
        </div>

        <div className="savings">
          <span>POTENTIAL SAVINGS</span>

          <strong>₹16,800</strong>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <div className="panel-title">
              Available Procurement Pools
            </div>

            <div className="panel-subtitle">
              Demand opportunities detected across your merchant network.
            </div>
          </div>
        </div>

        <div className="expiry-list">
          <div className="expiry-row">
            <div className="risk-dot low"></div>

            <div className="expiry-product">
              <strong>Milk 500ml</strong>
              <span>14 merchants · 1,240 units</span>
            </div>

            <div className="expiry-days">
              ₹75/unit
            </div>

            <div className="risk-tag low">
              8.5% SAVING
            </div>
          </div>

          <div className="expiry-row">
            <div className="risk-dot medium"></div>

            <div className="expiry-product">
              <strong>Sunflower Oil 1L</strong>
              <span>8 merchants · 420 units</span>
            </div>

            <div className="expiry-days">
              ₹116/unit
            </div>

            <div className="risk-tag medium">
              6.2% SAVING
            </div>
          </div>

          <div className="expiry-row">
            <div className="risk-dot low"></div>

            <div className="expiry-product">
              <strong>Rice 5kg</strong>
              <span>11 merchants · 280 units</span>
            </div>

            <div className="expiry-days">
              ₹286/unit
            </div>

            <div className="risk-tag low">
              5.8% SAVING
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   EXPIRY ROW
   ========================================================= */

function ExpiryRow({
  name,
  units,
  days,
  risk,
  riskClass,
  onClick,
}: {
  name: string;
  units: string;
  days: string;
  risk: string;
  riskClass: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="expiry-row"
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div className={`risk-dot ${riskClass}`}></div>

      <div className="expiry-product">
        <strong>{name}</strong>

        <span>{units}</span>
      </div>

      <div className="expiry-days">
        {days}
      </div>

      <div className={`risk-tag ${riskClass}`}>
        {risk}
      </div>
    </div>
  );
}

/* =========================================================
   SUPPLIER ROW
   ========================================================= */

function SupplierRow({
  name,
  score,
  status,
  width,
  onClick,
}: {
  name: string;
  score: string;
  status: string;
  width: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="supplier-row"
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div className="supplier-info">
        <div>
          <strong>{name}</strong>

          <span>{status}</span>
        </div>

        <b>{score}</b>
      </div>

      <div className="score-track">
        <div
          className="score-fill"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

export default App;