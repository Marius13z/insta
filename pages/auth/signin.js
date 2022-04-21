import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Navbar from '../../components/Navbar'


function signin({ providers }) {



    return (
        <>
          <Navbar />
         
         <div className="flex flex-col items-center py-2 min-h-screen justify-center -mt-40 ">
           <img className="w-80" src="https://links.papareact.com/ocw"/>
           <p className="font-xs italic" >Just an instagram clone, nothing more!</p>
          <div className="mt-28">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="p-3 bg-gray-400 rounded-lg text-white" onClick={() => signIntoProvider(provider.id, {callbackUrl: '/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
          </div>

         </div>
        </>
      )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}

export default signin