import { Header } from "./components/Header";

import { Post } from "./components/Post";

import { GoHomeFill } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { CgSearch } from 'react-icons/cg'
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from 'react-icons/bs'

export default function() {
  // const [showingSplashScreen, setShowingSplashScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowingSplashScreen(false)
  //   }, 3000)
  // }, [])
  //
  // if (showingSplashScreen) {
  //   return <SplashScreen />;
  // }

  return (
    <main className="w-full h-full flex flex-col px-3 text-base relative">
      <Header />
      <section className="mt-5 mb-[7.7vh]">
        <Post />
        <Post />
        <Post />
      </section>
      <footer className="fixed flex items-center justify-center w-full h-[8vh] bg-[#101010] bottom-0 left-0">
        <div className="brightness-50 flex items-center justify-evenly w-full">
          <GoHomeFill size={24} />
          <CgSearch size={24} />
          <FiEdit size={24} />
          <AiOutlineHeart size={24} />
          <BsFillPersonFill size={24} />
        </div>
      </footer>
    </main>
  );
}
