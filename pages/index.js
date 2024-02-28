// allows updating the title for the webpage
import Head from "next/head";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieStandForm from "@/components/create-form";
import Report from "@/components/report";
import { hours } from "../data";

export default function Home() {
  // Initalized to null to allow for conditional rendering
  const [cookieStand, setCookieStand] = useState(null);

  function handleCreate (cookieStandInfo) { 
    setStandReports([...standReports, StandInfo]);
  }

  return (
    <>
      {/* this head is different because it's imported to update webpage title */}
      <Head>
        <title>Cookie Stands</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main className="p-4">
        <CookieStandForm onCreate={handleCreate}/>
      </main>
      <Footer />
    </>
  );
}



