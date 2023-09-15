function solution(d, budget) {
  const budgetApply = d
    .sort((a, b) => a - b)
    .filter((v) => {
      if (budget - v >= 0) {
        budget -= v;
        return true;
      }
      return false;
    });

  return budgetApply.length;
}
