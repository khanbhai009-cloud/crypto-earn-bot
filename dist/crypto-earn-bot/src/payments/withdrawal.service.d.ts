export declare class WithdrawalService {
    requestWithdrawal(userId: string, coins: number): Promise<{
        userId: string;
        coins: number;
        status: string;
    }>;
}
