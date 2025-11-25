import React from 'react';

const rows = [
  { feature: 'NIJ Rating', clear: 'IIA', pro: 'II', ultra: 'IIIa', shadow: 'II', highway: 'Coming soon' },
  { feature: 'VLT (%)', clear: '92%', pro: '90%', ultra: '88%', shadow: '70%', highway: '-' },
  { feature: 'Thickness', clear: '10 mm', pro: '12 mm', ultra: '14 mm', shadow: '12 mm', highway: '-' },
];

export default function ComparisonTable() {
  return (
    <>
      <style>{css}</style>
      <div className="card comparison-table-wrapper" style={{ overflowX: 'auto' }}>
        <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Feature', 'Clear', 'Pro', 'Ultra Max', 'Shadow', 'Highway'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: 12, borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.feature}>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>{r.feature}</td>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)' }}>{r.clear}</td>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)' }}>{r.pro}</td>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)' }}>{r.ultra}</td>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)' }}>{r.shadow}</td>
                <td style={{ padding: 12, borderBottom: '1px solid var(--color-border)' }}>{r.highway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const css = `
.comparison-table-wrapper {
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 640px) {
  .comparison-table {
    font-size: 13px;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 8px !important;
  }
}

@media (max-width: 480px) {
  .comparison-table {
    font-size: 12px;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 6px !important;
  }
}
`;
