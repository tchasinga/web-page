import React from "react";
import Link from "next/link";

async function getCard() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    "https://public-api-information.onrender.com/api/all",
    {
      next: {
        revalidate: 0, // use 0 to opt out of using cache
      },
    }
  );

  return res.json();
}

export default async function CardTickects() {
  const card = await getCard();
  return (
    <div className="max-w-5xl mx-auto">
      {card.map((cards) => (
        <div key={cards._id} className="card my-5">
          <Link href={`/cardata/${cards._id}`}>
            <h3>{cards.title}</h3>
            <p>{cards.body.slice(0, 200)}...</p>
            <div className={`pill ${cards.priority}`}>
              {cards.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {card.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </div>
  );
}
