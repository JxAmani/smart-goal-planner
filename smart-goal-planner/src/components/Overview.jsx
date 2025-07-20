function Overview({ goals }) {
  const totalGoals = goals.length
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0)
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completedGoals}</p>
    </div>
  )
}

export default Overview
