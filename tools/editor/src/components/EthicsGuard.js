
import React, { useEffect, useState } from 'react';
import { scanDefaultsForEthicalRisks } from '../utils/ethicsFilter';

export default function EthicsGuard({ formData }) {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const result = scanDefaultsForEthicalRisks(formData);
    setIssues(result);
  }, [formData]);

  if (issues.length === 0) return null;
  return (
    <div className="ethics-guard">
      <h4>⚠ Ethikhinweis</h4>
      <ul>
        {issues.map((issue, i) => (
          <li key={i}><strong>{issue.field}:</strong> {issue.message}</li>
        ))}
      </ul>
    </div>
  );
}
