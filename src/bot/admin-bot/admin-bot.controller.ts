import { AdminBotService } from './admin-bot.service';

const service = new AdminBotService();

export const setTask = (req: any, res: any) => {
  res.json(service.setTask(req.body));
};

export const setWithdrawalLimit = (req: any, res: any) => {
  res.json(service.setWithdrawalLimit(req.body.limit));
};

export const approveWithdrawal = (req: any, res: any) => {
  res.json(service.approveWithdrawal(req.body.withdrawalId));
};

export const viewUsers = (req: any, res: any) => {
  res.json(service.viewUsers());
};