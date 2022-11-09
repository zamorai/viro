import styles from '../../styles/navigation/Navbar.module.css'
import { useEffect, useState } from 'react'
import { Burger } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks';
import { BiChevronDown } from 'react-icons/bi'
import TreatmentDrawer from '../general/TreatmentDrawer';
import MultiDrawer from '../general/MultiDrawer';
import Login from './Login';
import Register from './Register';
import ProfileNav from './ProfileNav';
import supabase from '../../utils/supabase';
import Link from 'next/link';
import { useAuth } from '../../context/Auth';

export default function Navbar() {
  const[scroll, scrollTo] = useWindowScroll();
  const[treatmentsOpen, setTreatmentsOpen] = useState(false)
  const[profileOpen, setProfileOpen] = useState(false)
  const[loginState, setLoginState] = useState('newUser')
  const user = useAuth()
  const [showAdmin, setShowAdmin] = useState(false)

  useEffect(() => {
    const getAdminPriv = async () => {
      const { data: profile } = await supabase
      .from('doctors')
      .select()
      .eq('id', user.user.id)
      .single()

      if (profile) {
        setShowAdmin(true)
      }
    }

    if(user?.user?.id) {
      setLoginState('activeUser')
      getAdminPriv()
    }

  }, [user])


  const componentToDisplay = loginState === 'newUser' ? <Register setProfileOpen={setProfileOpen} setLoginState={setLoginState} /> : loginState === 'returningUser' ? <Login setProfileOpen={setProfileOpen} setLoginState={setLoginState} /> : <ProfileNav setLoginState={setLoginState} setProfileOpen={setProfileOpen} />

  return (
    <div className={`${styles.container} ${scroll.y > 40 ? styles.shadow : styles.noShadow}`}>

      <div>
        <Link href='/'>
          <h1 className={styles.logo}>Viro</h1>
        </Link>
        {showAdmin && <div>yay</div>}
      </div>

      <section className={styles.rightNav}>

        <nav onClick={() => setTreatmentsOpen(!treatmentsOpen)} className={styles.treatmentsContainer}>
              <div className={styles.treatments}>
                <span className={styles.treatmentsText}>Tratamientos</span>
                <span className={styles.treatmentsIcon}><BiChevronDown size={24} /></span>
              </div>   
        </nav>

        <nav className={styles.burger}>
          <Burger onClick={() => setProfileOpen(!profileOpen)} opened={profileOpen} size={'sm'} />
        </nav>

      </section>
    <TreatmentDrawer opened={treatmentsOpen} setOpened={setTreatmentsOpen} />
    <MultiDrawer open={profileOpen} setOpen={setProfileOpen} component={componentToDisplay} />
    </div>
  )
}
