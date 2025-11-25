import React from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const variants = [1, 2, 3, 4, 5].map(i => ({ id: i, name: `Variant ${i}`, slug: `variant-${i}` }));

export default function Products() {
  return (
    <div>
      <style>{css}</style>
      <Section title="Products">
        <div className="products-grid">
          {variants.map(v => (
            <Card key={v.id}>
              <div style={{ fontWeight: 600 }}>{v.name}</div>
              <a href={`/products/${v.slug}`} style={{ color: 'var(--color-primary)' }}>View details</a>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

const css = `
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

@media (max-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
`;
