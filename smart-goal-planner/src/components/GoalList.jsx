// src/components/GoalList.jsx

import GoalCard from './GoalCard'

function GoalList({ goals }) {
  if (goals.length === 0) {
    return <p>No goals loaded yet.</p>
  }

  return (
    <div>
      <h2>Goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  )
}

export default GoalList


