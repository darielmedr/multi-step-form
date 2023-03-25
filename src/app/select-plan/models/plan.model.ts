export interface Plan {
  id: number;
  name: string;
  price: number;
  logo: string;
  discountInfo?: string;
}

export const DEFAULT_PLAN_VALUE: Plan = {
  id: 0,
  name: '',
  price: 0,
  logo: '',
  discountInfo: '',
};
