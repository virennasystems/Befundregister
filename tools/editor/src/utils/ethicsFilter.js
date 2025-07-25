
export function scanDefaultsForEthicalRisks(data) {
  const warnings = [];
  if (data.sex === 'male') {
    warnings.push({ field: 'sex', message: 'Default "male" ohne Begründung kann Bias erzeugen.' });
  }
  return warnings;
}
