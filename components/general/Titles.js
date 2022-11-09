import styles from '../../styles/general/Titles.module.css'

export default function Titles({ primary, secondary}) {
  return (
    <p className={styles.primary}>{primary}<span className={styles.secondary}> {secondary}</span></p>
  )
}
