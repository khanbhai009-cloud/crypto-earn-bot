export declare class UserBotService {
    startTask(userId: string, taskId: number): {
        userId: string;
        taskId: number;
        status: string;
    };
    getUserCoins(userId: string): {
        userId: string;
        coins: number;
    };
    requestWithdrawal(userId: string, coins: number): {
        userId: string;
        coins: number;
        status: string;
    };
}
