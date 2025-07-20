// src/components/GoalList.jsx

function GoalList({ goals }) {
  if (goals.length === 0) {
    return <p>No goals loaded yet.</p>
  }

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.name} - ${goal.savedAmount} / ${goal.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalList

