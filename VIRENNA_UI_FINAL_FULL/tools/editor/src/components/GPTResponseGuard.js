
import React from 'react';
import { checkEthics } from '../utils/ethicsFilter';

export default function GPTResponseGuard({ text }) {
  const issues = checkEthics(text);
  if (issues.length === 0) return null;

  return (
    <div className="ethics-alert">
      <h4>⚠ Ethikprüfung GPT</h4>
      <ul>
        {issues.map((issue, i) => (
          <li key={i}><strong>{issue.keyword}</strong>: {issue.label}</li>
        ))}
      </ul>
    </div>
  );
}
