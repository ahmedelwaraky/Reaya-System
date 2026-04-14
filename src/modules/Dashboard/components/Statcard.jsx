// ─────────────────────────────────────────────────────────────
// StatCard — بطاقة إحصائية واحدة
// Props:
//   icon      ReactNode   الأيقونة
//   label     string      العنوان
//   value     string      القيمة
//   change    string      نسبة التغيير  e.g. "+12%"
//   colors    object      COLORS من MainLayout
// ─────────────────────────────────────────────────────────────
export default function StatCard({ icon, label, value, change, colors: c }) {
  const isPositive = change?.startsWith("+");

  return (
    <div style={{
      flex:            "1 1 200px",
      display:         "flex",
      alignItems:      "center",
      gap:             "16px",
      padding:         "20px",
      backgroundColor: c.bg,
      border:          `1px solid ${c.border}`,
      borderRadius:    "14px",
      transition:      "background 0.3s",
    }}>

      {/* أيقونة */}
      <div style={{
        width:           "46px",
        height:          "46px",
        borderRadius:    "12px",
        backgroundColor: c.activeItem,
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        flexShrink:      0,
        color:           c.accent,
      }}>
        {icon}
      </div>

      {/* نص */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontSize: "12px", color: c.subText }}>
          {label}
        </span>
        <span style={{ fontSize: "22px", fontWeight: "700", color: c.text, lineHeight: 1.2 }}>
          {value}
        </span>
        {change && (
          <span style={{
            fontSize:   "12px",
            fontWeight: "600",
            color:      isPositive ? "#22c55e" : "#ef4444",
          }}>
            {change}
          </span>
        )}
      </div>

    </div>
  );
}