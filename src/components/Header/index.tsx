import ThreadsLogo from "../../assets/threads-logo.svg";
export function Header() {
  return (
    <header className="h-[5vh] w-full flex items-center justify-center">
      <img src={ThreadsLogo} alt="Logo do Threads" className="h-[30px] mt-10" />
    </header>
  );
}
