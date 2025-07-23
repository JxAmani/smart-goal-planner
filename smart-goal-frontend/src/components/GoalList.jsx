import React, { useEffect, useState } from 'react';

function GoalList() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/goals`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setGoals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch goals:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading goals...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>My Goals</h2>
      {goals.length === 0 ? (
        <p>No goals found.</p>
      ) : (
        <ul>
          {goals.map(goal => (
            <li key={goal.id}>{goal.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalList;
