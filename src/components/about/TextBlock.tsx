import React from 'react';

export default function TextBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <style>{css}</style>
      <section className="card text-block">
        <h3 className="text-block-title">{title}</h3>
        <div className="text-block-content">{children}</div>
      </section>
    </>
  );
}

const css = `
.text-block {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
}

.text-block-title {
  margin: 0 0 12px 0;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  color: var(--color-text);
}

.text-block-content {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  color: var(--color-text);
}

@media (max-width: 640px) {
  .text-block {
    padding: 14px;
  }
  .text-block-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .text-block-content {
    font-size: 13.5px;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .text-block {
    padding: 12px;
  }
  .text-block-title {
    font-size: 15px;
    margin-bottom: 8px;
  }
  .text-block-content {
    font-size: 13px;
    line-height: 1.65;
  }
}
`;
