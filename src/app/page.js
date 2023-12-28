import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Let&apos;s take a brief look at some of the topics that we chose to omit from
        this book, but which you may find in some other introductory JavaScript
        material. Bear in mind that we cover all of these topics in depth in our
        Core Curriculum at Launch School, so we don&apos;t ignore them. However,
        there&apos;s a time and a place where a novice programmer is ready to learn
        about certain topics. Historically, JavaScript was inextricably tied to
        the DOM (Document Object Model) API, which is what you use to manipulate
        content on a webpage.
      </p>

      <Link href="/cardata">
        <div className="flex justify-center my-8">
          <button className="bg-green-600 text-white">View Card</button>
        </div>
      </Link>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          The History API provides access to the browser&apos;s session history (not
          to be confused with WebExtensions history) through the history global
          object. It exposes useful methods and properties that let you navigate
          back and forth through the user's history, and manipulate the contents
          of the history stack.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Hello, I have to send an array as parameter (the API only supports the
          said parameter as array) but I don&apos;t know how to do it. I managed make
          it work in Postman but it doesn&apos;t in UiPath. There are two arrays
          actually, one for sender and one for receiver. Each array has to
          contain the following: name: string, contact: string, phone1: string,
          locality_id: integer, street: string.
        </p>
      </div>
    </main>
  );
}
