
import React from 'react';

export default function BiasReportModal({ issues }) {
  if (!issues || issues.length === 0) return null;
  return (
    <div className="bias-modal">
      <h4>Gefundene Bias-Risiken</h4>
      <ul>
        {issues.map((i, idx) => (
          <li key={idx}><strong>{i.keyword}</strong>: {i.label}</li>
        ))}
      </ul>
    </div>
  );
}
