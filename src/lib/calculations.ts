import { Transaction } from "@/app/types/global";
import { EXPENSES_CATEGORIES, INCOMES_CATEGORIES } from "./categories";

export function getTotalExpenses(transactions: Transaction[]) {
  return transactions.reduce((acc, curr) => {
    if (EXPENSES_CATEGORIES.some((category) => category === curr.category)) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
}

export function getTotalIncomes(transactions: Transaction[]) {
  return transactions.reduce((acc, curr) => {
    if (INCOMES_CATEGORIES.some((category) => category === curr.category)) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
}
