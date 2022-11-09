import styles from '../../styles/general/HighlightProduct.module.css'
import Button from './Button'

export default function HighlightProduct({ order, info }) {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        
        <section style={{order: order === 'left' ? 1 : 2}} className={styles.content}>
          <h1 className={styles.title}>{info.title}</h1>

          <div  className={styles.infoContainer}>
            {info.items.map((item) => (
              <div className={styles.info}>
                {item.icon}
                <p className={styles.text}>{item.text}</p>
              </div>
            ))}
          </div>
          
          <div>
            <Button />
          </div>

        </section>

        <section style={{order: order === 'left' ? 2 : 1}} className={styles.image}>
          <div className={styles.imgContainer}>
            <img src={info.img} />
          </div>
        </section>

      </div>
    </div>
  )
}
