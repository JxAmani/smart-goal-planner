// src/components/GoalCard.jsx

function GoalCard({ goal }) {
  const percent = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '12px',
        marginBottom: '12px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Saved ${goal.savedAmount} / ${goal.targetAmount}</p>

      <div style={{ background: '#eee', height: '10px', borderRadius: '4px' }}>
        <div
          style={{
            height: '10px',
            width: `${percent}%`,
            background: percent === 100 ? 'green' : 'blue',
            borderRadius: '4px',
          }}
        ></div>
      </div>

      <button style={{ marginTop: '10px' }}>Deposit</button>
    </div>
  )
}

export default GoalCard
