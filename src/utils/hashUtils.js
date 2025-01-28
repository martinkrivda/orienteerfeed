export const createShortCompetitorHash = (classId, familyName, givenName) => {
  // Normalize and combine inputs
  const input = `${classId}-${familyName}-${givenName}`.toLowerCase();

  // Simple hash function (DJB2-like)
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }

  // Convert to a positive number and limit to 10 characters
  return Math.abs(hash).toString().slice(0, 10);
};
