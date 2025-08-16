"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSettings = void 0;
class AdminSettings {
    constructor() {
        this.withdrawalLimit = 100;
    }
    setWithdrawalLimit(limit) {
        this.withdrawalLimit = limit;
    }
    getWithdrawalLimit() {
        return this.withdrawalLimit;
    }
}
exports.AdminSettings = AdminSettings;
//# sourceMappingURL=admin-settings.js.map