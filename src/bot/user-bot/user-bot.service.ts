export class UserBotService {
  startTask(userId: string, taskId: number) {
    return { userId, taskId, status: 'started', coinsEarned: 100 };
  }

  getUserCoins(userId: string) {
    return { userId, coins: 100 }; 
  }

  requestWithdrawal(userId: string, coins: number) {
    return { userId, coins, status: 'pending' };
  }
}