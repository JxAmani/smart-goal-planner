import { useEffect, useState } from 'react'
import GoalList from './components/GoalList'
import AddGoalForm from './components/AddGoalForm'
import Overview from './components/Overview'

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetch('https://smart-goal-backend.onrender.com/goals') 
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched goals:', data)
        setGoals(data)
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm setGoals={setGoals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  )
}

export default App

