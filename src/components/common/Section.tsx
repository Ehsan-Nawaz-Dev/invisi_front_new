import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  noCard?: boolean;
};

export default function Section({ title, children, noCard = false }: Props) {
  return (
    <section className="full-bleed" style={{ padding: '24px 16px' }}>
      <style>{css}</style>
      <h2 style={{ margin: '0 0 12px' }}>{title}</h2>
      {noCard ? (
        <div>{children}</div>
      ) : (
        <div className="card" style={{ padding: 16 }}>{children}</div>
      )}
    </section>
  );
}

const css = `
@media (max-width: 640px) {
  .full-bleed { padding: 16px 12px !important; }
  .card { padding: 12px !important; }
}

@media (max-width: 480px) {
  .full-bleed { padding: 12px 10px !important; }
  .card { padding: 10px !important; }
}
`;
