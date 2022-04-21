
import Image from 'next/image'
import Link from 'next/link'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline'
import {
    HomeIcon
} from '@heroicons/react/solid'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Navbar = () => {
  const {data: session, status} = useSession()
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
         <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid h-19 w-24 cursor-pointer">
             <Image
             src="https://links.papareact.com/ocw"
             layout="fill"
             objectFit="contain"
             />
         </div>
        
        
         <div onClick={() => router.push("/")} className="relative lg:hidden  w-10 flex-shrink-0 cursor-pointer">
             <Image
             src="https://links.papareact.com/jjm"
             layout="fill"
             objectFit="contain"
             />
         </div>
         

        {/* Middle - Search input field */}
         
         <div className="max-w-xs">

        <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400"/>
            </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search"/>

        </div>

         </div>

        {/* Right */}
        {session ? (
            <div className="flex items-center justify-end space-x-4">
            <HomeIcon onClick={() => router.push("/")} className="navBtn"/>
        
    
            <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45"/>
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 
            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
            </div>
    
             <PlusCircleIcon onClick={() => setOpen(true)} className="h-7 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"/>
            <UserGroupIcon className="navBtn"/>
            <HeartIcon className="navBtn"/>
            <img referrerpolicy="no-referrer" src={session?.user?.image} className="md:hidden h-10 rounded-full cursor-pointer"/>
            </div>
        ) : (
          <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn"/>
          <button onClick={signIn}>Sign in</button>
          </div>
        )}


        </div>

    </div>
  )
}

export default Navbar
