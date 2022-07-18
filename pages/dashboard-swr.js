import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4444/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  // useSWR will refresh the client side data automatically by its own if there is any change to the data in the server.
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) {
    return <h2>Error</h2>;
  }

  if (!data) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Post - {data.posts}</h4>
      <h4>Likes - {data.likes}</h4>
      <h4>Followers - {data.followers}</h4>
      <h4>Following - {data.following}</h4>
    </div>
  );
}

export default DashboardSWR;
