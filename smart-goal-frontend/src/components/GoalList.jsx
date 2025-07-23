import React from 'react';
import GoalCard from './GoalCard';

function GoalList({ goals, setGoals }) {
  return (
    <div>
      <h2>My Goals</h2>
      {goals.length === 0 ? (
        <p>No goals found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {goals.map(goal => (
            <GoalCard key={goal.id} goal={goal} setGoals={setGoals} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GoalList;
