function GoalCard({ goal, setGoals }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);

  function handleDeposit() {
    const amount = parseFloat(prompt("Enter deposit amount:"));

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    const updatedAmount = goal.savedAmount + amount;

    fetch(`${import.meta.env.VITE_API_URL}/goals/${goal.id}`, {
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
        );
      })
      .catch((err) => {
        console.error("Failed to deposit:", err);
        alert("Failed to update goal. Please try again later.");
      });
  }

  function handleDelete() {
    const confirmDelete = window.confirm(`Delete "${goal.name}"?`);
    if (!confirmDelete) return;

    fetch(`${import.meta.env.VITE_API_URL}/goals/${goal.id}`, {
      method: "DELETE"
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((g) => g.id !== goal.id));
      })
      .catch((err) => {
        console.error("Failed to delete goal:", err);
        alert("Failed to delete goal. Please try again.");
      });
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
      <div style={{ marginTop: "10px" }}>
        <button className="btn" onClick={handleDeposit}>
          Deposit
        </button>
        <button
          className="btn"
          style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalCard;
