export class UserBotService {
  startTask(userId: string, taskId: number) {
    return { userId, taskId, status: 'started' }; // placeholder
  }

  getUserCoins(userId: string) {
    return { userId, coins: 100 }; // placeholder
  }

  requestWithdrawal(userId: string, coins: number) {
    return { userId, coins, status: 'pending' }; // placeholder
  }
}