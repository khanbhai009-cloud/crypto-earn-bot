"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalController = void 0;
class WithdrawalController {
    constructor(withdrawalService) {
        this.withdrawalService = withdrawalService;
    }
    async createWithdrawal(userId, coins) {
        return this.withdrawalService.requestWithdrawal(userId, coins);
    }
}
exports.WithdrawalController = WithdrawalController;
//# sourceMappingURL=withdrawal.controller.js.map