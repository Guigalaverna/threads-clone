import ThreadsLogo from "../../assets/threads-logo-gradient.png";
import MetaLogo from "../../assets/meta-logo.svg";

export function SplashScreen() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-around animate-[fade_3s]">

      <span></span>
      <img src={ThreadsLogo} alt="Logo do Threads" className="w-20" />

      <footer className="flex flex-col items-center">
        <span className="text-zinc-500 mb-2">from</span>
        <img src={MetaLogo} alt="Logo do Meta" className="w-24" />
      </footer>
    </main>
  );
}
