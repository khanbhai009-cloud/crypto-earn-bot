export class Withdrawal {
  id: number;
  userId: string;
  coins: number;
  status: string; // pending, completed, rejected
  transactionId?: string;
}
