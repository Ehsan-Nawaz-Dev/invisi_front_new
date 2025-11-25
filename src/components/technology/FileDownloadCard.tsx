import React from 'react';

export default function FileDownloadCard({ title, href, subtitle }: { title: string; href: string; subtitle?: string }) {
  const isPdf = href.toLowerCase().endsWith('.pdf');
  const base = (import.meta as any)?.env?.VITE_API_BASE || '';
  const finalHref = href.startsWith('/api/') && base ? `${base}${href}` : href;
  return (
    <>
      <style>{css}</style>
      <a
        className="card file-download-card"
        href={finalHref}
        target="_blank"
        rel="noreferrer"
        download={isPdf || undefined}
        style={{
          padding: 14,
          display: 'grid',
          gridTemplateColumns: '40px 1fr auto',
          gap: 12,
          alignItems: 'center'
        }}
      >
        <span
          aria-hidden
          className="file-icon"
          style={{
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
            borderRadius: 10,
            background: 'linear-gradient(180deg, rgba(26,115,232,0.25), rgba(26,115,232,0.08))',
            border: '1px solid rgba(26,115,232,0.35)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <div className="file-info">
          <div style={{ fontWeight: 700 }}>{title}</div>
          {subtitle ? <div style={{ color: 'var(--color-text-dim)', fontSize: 12 }}>{subtitle}</div> : null}
        </div>
        <span className="btn file-download-btn">{isPdf ? 'Download' : 'Open'}</span>
      </a>
    </>
  );
}

const css = `
.file-download-btn {
  padding: 8px 14px !important;
  min-width: 90px;
  white-space: nowrap;
  text-align: center;
  font-size: 14px;
  border-radius: 8px;
  background: linear-gradient(180deg, #1a73e8, #145fbe);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  transition: all 0.2s ease;
}

.file-download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(26,115,232,0.35);
}

.file-download-card {
  transition: all 0.2s ease;
}

.file-download-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

@media (max-width: 640px) {
  .file-download-card {
    grid-template-columns: 40px 1fr auto !important;
    gap: 10px !important;
    padding: 12px !important;
  }
  
  .file-download-btn {
    padding: 8px 12px !important;
    min-width: 85px;
    font-size: 13px;
  }
  
  .file-info div:first-child {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .file-download-card {
    grid-template-columns: 36px 1fr auto !important;
    gap: 8px !important;
    padding: 10px !important;
  }
  
  .file-icon {
    width: 36px !important;
    height: 36px !important;
  }
  
  .file-download-btn {
    padding: 7px 10px !important;
    min-width: 80px;
    font-size: 12px;
  }
  
  .file-info div:first-child {
    font-size: 13px;
  }
}

@media (max-width: 380px) {
  .file-download-card {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  
  .file-icon {
    display: none !important;
  }
  
  .file-download-btn {
    justify-self: end;
    min-width: 100px;
  }
}
`;

