export default interface userCalculatorState {
  amount: number;
  period: number;
}

export const defaultCalculatorState: userCalculatorState = {
  amount: 700,
  period: 2,
};
