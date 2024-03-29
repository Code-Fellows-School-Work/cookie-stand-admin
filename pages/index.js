// allows updating the title for the webpage
import Head from "next/head";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieStandForm from "@/components/create-form";
import Report from "@/components/report";
import LoginForm from "@/components/login-form";
import { hours } from "../data";

export default function Home() {
  // Initalized to null to allow for conditional rendering
  const [cookieStandReports, setCookieStandReports] = useState([]);
  const [user, setUser] = useState(null); // State to simulate user login

  // Used Chatgpt to create login code
  const handleLogin = (username, password) => {
    setUser({ username });
  };

  const handleCreate = (cookieStandInfo) => {
    setCookieStandReports([...cookieStandReports, cookieStandInfo]);
  };

  return (
    <>
      {/* this head is different because it's imported to update webpage title */}
      <Head>
        <title>Cookie Stands</title>
      </Head>
      <Header />
      <main className="p-4">
        {!user ? (
          // If no user is logged in, show the login form
          <LoginForm onLogin={handleLogin} />
        ) : (
          // Once logged in, show the main content
          <>
            <CookieStandForm onCreate={handleCreate}/>
            <Report reports={cookieStandReports} hours={hours}/>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
