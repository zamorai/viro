import '../styles/globals.css'
import Navbar from '../components/navigation/Navbar'
import { useRouter } from 'next/dist/client/router'
import { navbarRoutes, footerRoutes } from '../information/restrictedRoutes'
import Footer from '../components/navigation/Footer'
import { AuthProvider } from '../context/Auth'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const showNavbar = navbarRoutes.has(router.asPath)
  const showFooter = footerRoutes.has(router.asPath)
  
  return (
    <AuthProvider>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </AuthProvider>
  )
}

export default MyApp
