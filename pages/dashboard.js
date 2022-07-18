import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4444/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Post - {dashboardData.posts}</h4>
      <h4>Likes - {dashboardData.likes}</h4>
      <h4>Followers - {dashboardData.followers}</h4>
      <h4>Following - {dashboardData.following}</h4>
    </div>
  );
}

export default Dashboard;
