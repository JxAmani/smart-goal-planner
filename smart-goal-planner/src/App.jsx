
import { useEffect, useState } from 'react'
import GoalList from './components/GoalList'
import AddGoalForm from './components/AddGoalForm'

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then((res) => res.json())
      .then(setGoals)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯 Smart Goal Planner</h1>
      <AddGoalForm setGoals={setGoals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  )
}

export default App

