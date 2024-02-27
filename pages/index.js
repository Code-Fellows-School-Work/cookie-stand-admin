// allows updating the title for the webpage
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <head>
        <title>Cookie Stands</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header>
        <h1 className="text-3xl bg-green-600 p-2">
          Cookie Stand Admin Coming Soon
        </h1>
      </header>
      <main>Main Coming soon</main>
      <footer>Footer Coming soon</footer>
    </>
  );
}
