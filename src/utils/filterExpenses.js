function toDate(value) {
  if (!value) return new Date();
  if (value?.toDate) return value.toDate();
  return new Date(value);
}

export function getWeeklyExpenses(expenses) {
  const today = new Date();

  return expenses.filter((item) => {
    const itemDate = toDate(item.date);
    const diffDays = (today - itemDate) / (1000 * 60 * 60 * 24);

    return diffDays >= 0 && diffDays <= 7;
  });
}

export function getMonthlyExpenses(expenses) {
  const today = new Date();

  return expenses.filter((item) => {
    const itemDate = toDate(item.date);

    return (
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear()
    );
  });
}

export function getExpensePeriod(date) {
  const today = new Date();
  const itemDate = toDate(date);

  const diffDays = (today - itemDate) / (1000 * 60 * 60 * 24);

  if (diffDays >= 0 && diffDays <= 7) return "Weekly";

  return "Monthly";
}
