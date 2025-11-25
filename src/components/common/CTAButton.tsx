import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  style?: React.CSSProperties;
};

export default function CTAButton({ href, children, variant = 'primary', style }: Props) {
  const base: React.CSSProperties = {
    padding: '12px 18px',
    borderRadius: 999,
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px',
    textAlign: 'center',
    transition: 'all 0.2s ease',
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: 'var(--color-primary)', color: '#fff' },
    ghost: { background: 'transparent', color: 'var(--color-text)', border: '1px solid rgba(255,255,255,0.25)' },
  };
  return (
    <>
      <style>{css}</style>
      <a href={href} className="btn cta-btn" style={{ ...base, ...variants[variant], ...style }}>
        {children}
      </a>
    </>
  );
}

const css = `
@media (max-width: 640px) {
  .cta-btn {
    padding: 10px 16px !important;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .cta-btn {
    padding: 10px 14px !important;
    font-size: 13px;
  }
}
`;
