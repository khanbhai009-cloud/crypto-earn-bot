"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBotService = void 0;
class UserBotService {
    startTask(userId, taskId) {
        return { userId, taskId, status: 'started' };
    }
    getUserCoins(userId) {
        return { userId, coins: 100 };
    }
    requestWithdrawal(userId, coins) {
        return { userId, coins, status: 'pending' };
    }
}
exports.UserBotService = UserBotService;
//# sourceMappingURL=user-bot.service.js.map