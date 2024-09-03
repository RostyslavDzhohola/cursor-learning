"use client";

import { useState } from "react";
import OnboardingModal from "./OnboardingModal";
import UserInfoDisplay from "./UserInfoDisplay";
import Head from "next/head";

export default function CursorComposerPage() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: "",
  });

  const handleOnboardingComplete = (data: typeof userData) => {
    setUserData(data);
    setShowOnboarding(false);
  };

  const handleResubmit = () => {
    setShowOnboarding(true);
  };

  return (
    <>
      <Head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </Head>
      <div className="p-6">
        <h1 className="text-3xl mb-6">Composer</h1>
        {showOnboarding ? (
          <OnboardingModal onComplete={handleOnboardingComplete} />
        ) : (
          <UserInfoDisplay userData={userData} onResubmit={handleResubmit} />
        )}
      </div>
    </>
  );
}
