// src/components/GoalCard.jsx

function GoalCard({ goal, setGoals }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)

  const handleDeposit = async () => {
    const input = prompt("Enter deposit amount:")
    const amount = parseFloat(input)

    if (!amount || amount <= 0) return

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + amount,
    }

    await fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })

    setGoals((prev) =>
      prev.map((g) => (g.id === goal.id ? updatedGoal : g))
    )
  }

  return (
    <div className="card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Saved ${goal.savedAmount} / ${goal.targetAmount}</p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${percent}%`,
            backgroundColor: percent === 100 ? 'green' : 'blue',
          }}
        ></div>
      </div>

      <button className="btn" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  )
}

export default GoalCard
