// allows updating the title for the webpage
import Head from "next/head";
import { useState } from 'react';

export default function Home() {

  const [location, setLocation] = useState();
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
      <Main>

      </Main>
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

function Main() {
  return (
    <Table></Table>
  );
}

function locationForm(props) {
  <form onSubmit={props.onSubmit}>
    <input>Test</input>
    <button></button>

  </form>
}

function Table() {
  return (
    <p className="text-xs text-center">Report Table Coming Soon...</p>
  );
}

function Footer() {
  return(
    <footer>
      <p className="text-xs bg-green-600 p-2">&copy;2024</p>
    </footer>
  );
}
