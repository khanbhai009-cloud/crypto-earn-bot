export declare class WithdrawalController {
    private withdrawalService;
    constructor(withdrawalService: WithdrawalService);
    createWithdrawal(userId: string, coins: number): Promise<any>;
}
