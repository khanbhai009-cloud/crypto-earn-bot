"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AdminDashboard = () => {
    const [withdrawalLimit, setWithdrawalLimit] = (0, react_1.useState)(100);
    const handleLimitChange = (e) => {
        setWithdrawalLimit(Number(e.target.value));
    };
    const saveLimit = () => {
        alert(`Withdrawal limit set to ${withdrawalLimit} coins`);
    };
    return (<div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Admin Panel - Crypto Earn Bot</h1>

      <section style={{ marginTop: '30px' }}>
        <h2>Withdrawal Settings</h2>
        <input type="number" value={withdrawalLimit} onChange={handleLimitChange} style={{ padding: '5px', fontSize: '16px' }}/>
        <button onClick={saveLimit} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>Save Limit</button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Tasks Management</h2>
        <button style={{ padding: '5px 10px', marginRight: '10px', cursor: 'pointer' }}>Add Task</button>
        <button style={{ padding: '5px 10px', marginRight: '10px', cursor: 'pointer' }}>Edit Task</button>
        <button style={{ padding: '5px 10px', cursor: 'pointer' }}>Remove Task</button>
      </section>

    </div>);
};
exports.default = AdminDashboard;
//# sourceMappingURL=admin-dashboard.js.map