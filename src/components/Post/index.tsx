import { RxDotsHorizontal, RxDotFilled } from 'react-icons/rx'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { TbRepeat } from 'react-icons/tb'
import { IoPaperPlaneOutline } from 'react-icons/io5'

import ZuckermanProfilePic from '../../assets/zuckerman.jpg'
import ElonMuskProfilePic from '../../assets/musk.jpg'

export function Post() {
  return (
    <div className="mt-10 pb-5 flex border-2 border-b-zinc-800 border-l-transparent border-t-transparent border-r-transparent">
      <aside className="flex flex-col items-center justify-between">
        <img src={ZuckermanProfilePic} alt="Foto de perfil do @zuck" className="w-10 rounded-full" />
        <span className="flex h-full w-[2px] bg-zinc-900" />
        <img src={ElonMuskProfilePic} alt="Foto de perfil do @elonmusk" className="w-6 h-6 object-cover object-top rounded-full" />
      </aside>
      <aside className="ml-2 w-full mb-2">
        <header className="flex w-full items-start justify-between">
          <div>
            <span className="font-bold">zuck</span>
          </div>
          <div className="flex items-center gap-4">
            <time className="text-zinc-700">14 min</time>

            <RxDotsHorizontal size={14} color="white" />
          </div>
        </header>

        <article className="mt-2">
          <p className="text-[13px] text-zinc-100">Hello, Threads!</p>

          <img src="https://pxcdn.bigbangnews.com/bigbang/112022/1668020152417/weweff.webp?cw=738&ch=513&extw=JPG" alt="Mark Zuckerberg" className="rounded-lg border-2 mt-2 border-zinc-900" />
        </article>

        <footer className="mt-3">
          <div className="flex">
            <AiOutlineHeart size={20} />
            <HiOutlineChatBubbleOvalLeft size={20} />
            <TbRepeat size={20} />
            <IoPaperPlaneOutline size={20} />
          </div>

          <div className="flex items-center mt-3 gap-2 text-zinc-700">
            <span>1 resposta</span>
            <RxDotFilled size={10} />

            <span>Ver curtidas</span>
          </div>
        </footer>
      </aside>
    </div>

  )
}
