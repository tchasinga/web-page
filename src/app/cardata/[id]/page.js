import React from "react";

async function getCard(_id) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(
      `https://public-api-information.onrender.com/api/getId/${_id}`,
      {
        next: {
          revalidate: 0, // use 0 to opt out of using cache which means that refetch data
        },
      }
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching ticket:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}

export default async function Carddetails({params}) {
    const ticket = await getCard(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      {ticket ? (
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
