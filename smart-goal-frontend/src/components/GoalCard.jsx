function GoalCard({ goal, setGoals }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)

  function handleDeposit() {
    const amount = parseFloat(prompt("Enter deposit amount:"))

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid number.")
      return
    }

    const updatedAmount = goal.savedAmount + amount

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g))
        )
      })
  }

  return (
    <div className="card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>
        Saved ${goal.savedAmount} / ${goal.targetAmount}
      </p>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${percent}%`,
            backgroundColor: percent === 100 ? "green" : "blue",
          }}
        ></div>
      </div>
      <button className="btn" style={{ marginTop: "10px" }} onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  )
}

export default GoalCard
