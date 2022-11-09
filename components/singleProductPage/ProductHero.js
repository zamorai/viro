import styles from '../../styles/product/ProductHero.module.css'
import Button from '../general/Button'
import { Accordion } from '@mantine/core';

export default function ProductHero() {
  return (
    <div className={styles.wrapper}>

      <section className={styles.container}>

        <div className={styles.imageContainer}>
          <img src='/product-bg.jpg' className={styles.image} />
        </div>

        <div className={styles.infoContainer}>
          <span className={styles.tag}>Most Popular</span>
          <h2 className={styles.productName}>Sildenafil</h2>
          <p className={styles.productSub}>Generic for viagra</p>

          <p className={styles.productDesc}>An erectile dysfunction medication that’s FDA approved and clinically proven to treat ED, sildenafil has the same active ingredient as Viagra® at 10% of the cost. Better sex at a lower price—what’s not to love?</p>
          <button className={styles.button}>Start your free trial</button>

          <div className={styles.accordion}>
            <Accordion classNames={{
              content: styles.accordionLabel,
              label: styles.accordionLabel,
            }} defaultValue="customization">
              <Accordion.Item value="customization">
                <Accordion.Control>Customization</Accordion.Control>
                <Accordion.Panel >Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="flexibility">
                <Accordion.Control>Flexibility</Accordion.Control>
                <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="focus-ring">
                <Accordion.Control>No annoying focus ring</Accordion.Control>
                <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>

          <p className={styles.disclaimer}>* Only available if prescribed after an online consultation with a healthcare provider.</p>


        </div>

      </section>

    </div>
  )
}
