// allows updating the title for the webpage
import Head from "next/head";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieStandForm from "@/components/create-form";
import Report from "@/components/report";

export default function Home() {
  // Initalized to null to allow for conditional rendering
  const [cookieStand, setCookieStand] = useState(null);

  function cookieStandHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Used ChatGPT to help target form data
    const newCookieStand = {
      Location: formData.get("Location"),
      "Minimum Customers Per Hour": formData.get("Minimum Customers per Hour"),
      "Maximum Customers Per Hour": formData.get("Maximum Customers per Hour"),
      "Average Cookies Per Sale": formData.get("Average Cookies per Sale"),
    };
    setCookieStand(newCookieStand);
    event.target.reset();
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
        <CookieStandForm onSubmit={cookieStandHandler} />
        {/* Use of the ternary operator will allow for default message or dynamically render when cookie stand is created  */}
        {cookieStand ? (
          <Report reply={cookieStand} />
        ) : (
          <p className="text-center m-6">No Cookie Stands Available</p>
        )}
      </main>
      <Footer />
    </>
  );
}



