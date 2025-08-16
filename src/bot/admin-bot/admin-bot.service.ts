export class AdminBotService {
  setTask(task: any) {
    return task;
  }

  setWithdrawalLimit(limit: number) {
    return { limit };
  }

  approveWithdrawal(withdrawalId: number) {
    return { withdrawalId, status: 'approved' };
  }

  viewUsers() {
    return [{ id: 1, coins: 100 }];
  }
}