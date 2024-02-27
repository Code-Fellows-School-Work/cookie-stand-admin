// allows updating the title for the webpage
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1 className="text-3xl bg-green-600 p-2">
          Cookie Stand Admin Coming Soon
        </h1>
      </Header>
      <Main>
        <Table>
        </Table>
      </Main>
      <Footer>Footer Coming soon</Footer>
    </>
  );
}

function Header() {
  return (
    <h1>Header coming soon</h1>
  );
}

function Main() {
  return (
    <h1>Main coming soon</h1>
  );
}

function Table() {
  return (
    <p>Table coming soon</p>
  )
}

function Footer() {
  return (
    <h1>Footer coming soon</h1>
  );
}