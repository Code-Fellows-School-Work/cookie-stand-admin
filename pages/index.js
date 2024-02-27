// allows updating the title for the webpage
import Head from "next/head";
import { useState } from 'react';

export default function Home() {

  const [cookieStand, setCookieStand] = useState({
    inputOne: '',
    inputTwo: '',
    inputThree: '',
    inputFour: '',
  });
  // I will need this state to display cookie stand in json
  const [reply, setReply] = useState();

  function cookieStandHandler(event) {
    event.preventDefault();
    alert("Yay");
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
        <JsonReply />
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
    <form onSubmit={props.onSubmit} className="bg-white p-8 shadow-md rounded-lg space-y-4">
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




function JsonReply() {
  return (
    <p className="flex justify-center">Report table coming soon...</p>
  );
}


function Footer() {
  return(
    <footer>
      <p className="text-xs bg-green-600 p-2">&copy;2024</p>
    </footer>
  );
}
