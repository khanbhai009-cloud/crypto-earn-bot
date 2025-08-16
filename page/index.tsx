export default function Home() {
  const startTask = async () => {
    const res = await fetch('/api/user-bot/start', { method: 'POST', body: JSON.stringify({ userId: '1', taskId: 101 }) });
    console.log(await res.json());
  };

  const getCoins = async () => {
    const res = await fetch('/api/user-bot/coins?userId=1');
    console.log(await res.json());
  };

  return (
    <div className="p-4">
      <h1>Crypto Earn Bot</h1>
      <button onClick={startTask}>Start Task</button>
      <button onClick={getCoins}>Check Coins</button>
    </div>
  );
}