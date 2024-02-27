// allows updating the title for the webpage
import Head from "next/head";
import { useState } from 'react';

export default function Home() {

  const [location, setLocation] = useState({
    inputOne: '',
    inputTwo: '',
    inputThree: '',
    inputFour: '',
  });
  const [reply, setReply] = useState();

  function locationHandler(event) {
    event.preventDefault();
    alert("works");
  }

  return (
    <>
      <Head>
        <title>Cookie Stands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CookieStandForm />
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
