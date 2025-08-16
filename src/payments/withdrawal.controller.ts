import { WithdrawalService } from './withdrawal.service';
export class WithdrawalController {
  constructor(private withdrawalService: WithdrawalService) {}

  async createWithdrawal(userId: string, coins: number) {
    return this.withdrawalService.requestWithdrawal(userId, coins);
  }
}
