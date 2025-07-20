

function GoalCard({ goal }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)

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
            backgroundColor: percent === 100 ? 'green' : 'blue',
          }}
        ></div>
      </div>

      <button className="btn" style={{ marginTop: '10px' }}>Deposit</button>
    </div>
  )
}

export default GoalCard

