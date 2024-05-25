export default interface userDetailState {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  monthlyIncome: number;
}

export const defaultUserDetailsState: userDetailState = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  monthlyIncome: 0,
};