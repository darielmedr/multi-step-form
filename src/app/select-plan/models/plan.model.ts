export interface Plan {
  name: string;
  price: number;
  logo: string;
  discountInfo?: string;
}

export const DEFAULT_PLAN_VALUE: Plan = {
  name: '',
  price: 0,
  logo: '',
  discountInfo: '',
};
