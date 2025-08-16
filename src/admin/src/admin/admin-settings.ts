export class AdminSettings {
  withdrawalLimit: number = 100; // default max coins per withdrawal

  setWithdrawalLimit(limit: number) {
    this.withdrawalLimit = limit;
  }

  getWithdrawalLimit() {
    return this.withdrawalLimit;
  }
}