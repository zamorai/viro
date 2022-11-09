import { Drawer } from '@mantine/core';
import styles from '../../styles/general/TreatmentDrawer.module.css'
import ConsultButton from './ConsultButton';
import Link from 'next/link';
import supabase from '../../utils/supabase';
import { useAuth } from '../../context/Auth';
import { useRouter } from 'next/dist/client/router';

export default function TreatmentDrawer({ opened, setOpened }) {

  return (
    <Drawer
    opened={opened}
    onClose={() => setOpened(false)}
    position='top'
    styles={{
      header: {display: 'none'}
    }}
    size="xl"
  >
    <div className='flex flex-col sm:flex-row h-full justify-center'>

      <section className={`flex flex-col items-center justify-around flex-1 ${styles.backgroundFirst}`}>
        <div className='text-5xl'>
          Cuidado del cabello
        </div>
        <img className='w-40 sm:w-64 md:w-96' src='/Finasteride-Mockup.png' />
        <div className='flex gap-8 lg:gap-24'>
          <ConsultButton text={'Consulta'} />
          <button className='text-2xl lg:text-4xl'>Tratamientos</button>
          <button className='text-2xl lg:text-4xl'>Productos</button>
        </div>
      </section>

      <section className={`flex flex-col items-center justify-around flex-1 ${styles.backgroundSecond}`}>
        <div className='text-5xl'>
          Salud Sexual
        </div>
        <img className='w-40 sm:w-64 md:w-96' src='/Sildenafil-Frontal-Mockup.png' />
        <div className='flex gap-8 lg:gap-24'>
            <span><ConsultButton text={'Consulta'} /></span>
          <Link href={{ pathname:'/cuestionario', query: {tratamiento: 'ed'} }}>
            <button className='text-2xl lg:text-4xl'>Tratamientos</button>
          </Link>
          <button className='text-2xl lg:text-4xl'>Productos</button>
        </div>
      </section>

    </div>
  </Drawer>
  );
}