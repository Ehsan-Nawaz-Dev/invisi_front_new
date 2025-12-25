import React, { useState } from "react";
import FileDownloadCard from "@/components/technology/FileDownloadCard";

const tabs = [ "Privacy Policy"] as const;

type Tab = (typeof tabs)[number];

export default function LegalTabs() {
  const [active, setActive] = useState<Tab>("Privacy Policy");

  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className="card"
            style={{
              padding: "8px 12px",
              color: "#fff",
              cursor: "pointer",
              background:
                active === t ? "rgba(26,115,232,0.15)" : "var(--color-surface)",
              border:
                active === t
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--color-border)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>

        {active === "Privacy Policy" && (
          <div className="card" style={{ padding: 16 }}>
            <h4 style={{ marginTop: 0 }}>Privacy Policy</h4>
            <p>
              We collect minimal personal data required to process inquiries and
              dealer applications. Information is used solely to provide
              requested services and is never sold. You may request access,
              correction, or deletion of your data at any time by contacting
              privacy@invisishield.com.
            </p>
            <p>
              Data may be processed by trusted vendors for email and file
              storage. We retain records only as long as necessary for legal and
              operational purposes. For full details, provide your final policy
              text and we will replace this placeholder copy.
            </p>
          </div>
        )}

      
      </div>
    </div>
  );
}
