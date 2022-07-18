/**
 * Prefetch the events using server side rendering and use client side data fetching to filter the data.
 */

import { useState } from "react";
import { useRouter } from "next/router";
function EventsList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    // Fetch the events from the server.
    const response = await fetch(
      "http://localhost:4444/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    // we use router to insert the category in the url. This will help during refreshing the page after you click the button.
    // This will hep us to share the link after client side filtering by clicking the button and for SEO.
    router.push("/events?category=sports", undefined, { shallows: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventsList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `?category=${category}` : "";

  const response = await fetch(`http://localhost:4444/events${queryString}`);
  const data = await response.json();

  return {
    props: { eventList: data },
  };
}
