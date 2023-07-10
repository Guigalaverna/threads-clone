import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Header } from "./components/Header";

import { Post } from "./components/Post";

export default function() {
  const [showingSplashScreen, setShowingSplashScreen] = useState(false);

  if (showingSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <main className="w-full h-full flex flex-col px-7 text-base">
      <Header />
      <section className="mt-5">
        <Post />
        <Post />
        <Post />
      </section>
    </main>
  );
}
