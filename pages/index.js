
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="https://links.papareact.com/jjm" />
      </Head>
        
        {/* Navbar */}
        <Navbar/>

        {/* Feed */}
        <Feed />
        {/* Modal */}
        <Modal />
        
    </div>
  )
}

export default Home
