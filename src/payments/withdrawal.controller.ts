import { WithdrawalService } from './withdrawal.service';
export class WithdrawalController {
  constructor(private withdrawalService: WithdrawalService) {}

  // Example method
  requestWithdrawal(userId: string, amount: number) {
    return this.withdrawalService.processWithdrawal(userId, amount);
  }
}