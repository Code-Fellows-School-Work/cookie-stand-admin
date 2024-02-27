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


function CookieStandForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input name="Location"/>
      <button>Create</button>
    </form>
  );
}


function Footer() {
  return(
    <footer>
      <p className="text-xs bg-green-600 p-2">&copy;2024</p>
    </footer>
  );
}
