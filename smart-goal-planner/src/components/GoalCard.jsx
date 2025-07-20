
function GoalCard({ goal }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>
        Saved ${goal.savedAmount} / ${goal.targetAmount}
      </p>
      <div style={{ background: '#eee', height: '10px', width: '100%' }}>
        <div
          style={{
            height: '10px',
            width: `${percent}%`,
            background: percent === 100 ? 'green' : 'blue',
          }}
        ></div>
      </div>
    </div>
  )
}

export default GoalCard
