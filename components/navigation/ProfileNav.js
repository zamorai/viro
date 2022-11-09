import styles from '../../styles/navigation/ProfileNav.module.css'
import supabase from '../../utils/supabase'

const items = ['Perfil', 'Pedidos', 'Suscripciones', 'Mensajes', 'Soporte']

export default function ProfileNav({ setLoginState, setProfileOpen }) {

  const handleSignOut = async () => {
    const {error} = await supabase.auth.signOut()
    if(!error) {
      setProfileOpen(false)
      setLoginState('returningUser')
    }
  }

  return (
    <div className={styles.container}>
      
      <section className={styles.navigation}>
        <h3 className={styles.intro}>Hola Iker!</h3>
        {items.map((item) => (
          <p className={styles.navItem}>{item}</p>
        ))}
        <p onClick={handleSignOut} className={styles.navItem}>Terminar Sesion</p>
      </section>

    </div>
  )
}
