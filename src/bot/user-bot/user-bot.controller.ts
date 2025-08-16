import { UserBotService } from './user-bot.service';

const service = new UserBotService();

export const startTask = (req: any, res: any) => {
  const { userId, taskId } = req.body;
  res.json(service.startTask(userId, taskId));
};

export const getCoins = (req: any, res: any) => {
  const { userId } = req.query;
  res.json(service.getUserCoins(userId));
};

export const requestWithdrawal = (req: any, res: any) => {
  const { userId, coins } = req.body;
  res.json(service.requestWithdrawal(userId, coins));
};