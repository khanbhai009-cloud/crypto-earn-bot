"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalService = void 0;
class WithdrawalService {
    async requestWithdrawal(userId, coins) {
        return { userId, coins, status: 'pending' };
    }
}
exports.WithdrawalService = WithdrawalService;
//# sourceMappingURL=withdrawal.service.js.map