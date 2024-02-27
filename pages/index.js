// allows updating the title for the webpage
import Head from "next/head";
import { useState } from 'react';

export default function Home() {

  // Initalized to null to allow for conditional rendering
  const [cookieStand, setCookieStand] = useState(null);

  function cookieStandHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCookieStand = {
      Location: formData.get('Location'),
      MinimumCustomersPerHour: formData.get('Minimum Customers per Hour'),
      MaximumCustomersPerHour: formData.get('Maximum Customers per Hour'),
      AverageCookiesPerSale: formData.get('Average Cookies per Sale'),
    };
    setCookieStand(newCookieStand); // Update state with the new cookie stand details
    event.target.reset();
  }
  

  return (
    <>
      <Head>
        <title>Cookie Stands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CookieStandForm onSubmit={cookieStandHandler} />
        {/* Use of the ternary operator will allow for default message or dynamically render when cookie stand is created  */}
        {cookieStand ? <JsonReply reply={cookieStand}/> : <p className="text-center m-6">Report Table Coming Soon...</p>}
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1 className="font-medium text-2xl bg-green-600 p-2">
        Cookie Stand Admin
      </h1>
    </header>
  );
}

// Used ChatGPT to apply styling similar to screenshot example
function CookieStandForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="w-2/3 mx-auto bg-green-200 p-8 shadow-md rounded-lg space-y-4 m-6">
      <p className="flex justify-center font-semibold text-2xl">Create Cookie Stand</p>
      <div className="flex items-center space-x-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          name="Location"
          type="text"
          className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Min Customers per Hour</label>
          <input
            name="Minimum Customers per Hour"
            type="number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Max Customers per Hour</label>
          <input
            name="Maximum Customers per Hour"
            type="number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Average Cookies per Sale</label>
          <input
            name="Average Cookies per Sale"
            type="number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md self-end"
        >
          Create
        </button>
      </div>
    </form>
  );
}



function JsonReply(props) {
  return (
    <pre className="flex justify-center">{JSON.stringify(props.reply, null, 2)}</pre>
  );
}



function Footer() {
  return(
    <footer>
      <p className="text-xs bg-green-600 p-2">&copy;2024</p>
    </footer>
  );
}
