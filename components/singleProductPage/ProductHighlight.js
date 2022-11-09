import styles from '../../styles/product/ProductHighlight.module.css'
import Button from '../general/Button'
import { FiCloud, FiGitBranch, FiLayers, FiNavigation2 } from 'react-icons/fi'

const info = {
  items: [{
    itemTitle: "How to take sildenafil",
    itemText: 'Typically sildenafil is taken about an hour before sex. Because it’s taken as-needed, you don’t have to worry about remembering to take a pill every day—just when the moment is right. It’s often suggested that you take it on an empty stomach, but follow your provider’s recommendation for best results.'
  },
  {
    itemTitle: "Hey there",
    itemText: 'The most common side effects of generic for Viagra® are headache, lightheadedness, flushing, temporary abnormal vision, stuffy nose, sleep problems, back pain, and upset stomach. Your medical provider can help you mitigate or treat these symptoms if you experience them.'
  }
],
  img: '/pill1.png'
}

export default function ProductHighlight() {
  return (
    <div className={styles.container}>
      
      <section className={styles.content}>
        <span className={styles.tag}>About Sildenafil</span>

        <div className={styles.infoContainer}>
          {info.items.map((item) => (
            <div className={styles.info}>
              <h1 className={styles.itemTitle}>{item.itemTitle}</h1>
              <p className={styles.text}>{item.itemText}</p>
            </div>
          ))}
        </div>
        
     
        <div>
          <Button />
        </div>

      </section>

      <section className={styles.image}>
        <div className={styles.imgContainer}>
          <img src={info.img} />
        </div>
      </section>

    </div>
  )
}
