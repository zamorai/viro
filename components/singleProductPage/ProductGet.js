import styles from '../../styles/product/ProductGet.module.css'

const items = [{
  icon: "icon",
  title: 'Simple consultation',
  desc: 'Answer a few questions about your symptoms and health history.'
}, {
  icon: "icon",
  title: 'Connect with a provider',
  desc: 'A licensed medical provider will determine if treatment is right for you.'
},{
  icon: "icon",
  title: 'Free delivery',
  desc: 'Your ED medication will ship discreetly to you for free, if prescribed.'
},{
  icon: "icon",
  title: 'Better sex, guaranteed',
  desc: 'Love your results or get your money back with our 60-day guarantee'
}
]

export default function ProductGet() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>
        How to get sildenafil online through Viro
      </h1>

      <section className={styles.content}>

        {items.map((item) => (
          <div className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <div className={styles.cardText}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.text}>{item.desc}</p>
            </div>
          </div>
        ))}


      </section>


    </div>
  )
}
