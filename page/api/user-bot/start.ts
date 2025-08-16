import { startTask } from '../../../src/bot/user-bot/user-bot.controller';

export default function handler(req: any, res: any) {
  startTask(req, res);
}

pages/api/user-bot/coins.ts:

import { getCoins } from '../../../src/bot/user-bot/user-bot.controller';

export default function handler(req: any, res: any) {
  getCoins(req, res);
}
