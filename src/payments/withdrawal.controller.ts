<<<<<<< HEAD
import { WithdrawalService } from './withdrawal.service';
export class WithdrawalController {
  constructor(private withdrawalService: WithdrawalService) {}

  // Example method
  requestWithdrawal(userId: string, amount: number) {
    return this.withdrawalService.processWithdrawal(userId, amount);
  }
}
=======
// src/payments/withdrawal.controller.ts
import { WithdrawalService } from './withdrawal.service';

export class WithdrawalController {
    constructor(private withdrawalService: WithdrawalService) {}

    processWithdrawal(userId: string, amount: number) {
        return this.withdrawalService.processWithdrawal(userId, amount);
    }

    setWithdrawalLimit(limit: number) {
        return this.withdrawalService.setWithdrawalLimit(limit);
    }

    approveWithdrawal(withdrawalId: number) {
        return this.withdrawalService.approveWithdrawal(withdrawalId);
    }

    viewWithdrawals() {
        return this.withdrawalService.viewWithdrawals();
    }
}
>>>>>>> 8ba2a1c (Update WithdrawalService/Controller, AdminBot structure, and TypeScript fixes)
