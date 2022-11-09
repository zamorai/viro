import styles from '../../styles/general/MultiDrawer.module.css'
import { Drawer } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export default function MultiDrawer({ open, setOpen, component }) {
  const { height, width } = useViewportSize();
  return (
      <Drawer classNames={{ closeButton: styles.button, header: styles.header}} opened={open} size={`${width > 820 ? '50%' : 'full'}`} onClose={() => setOpen(false)} position='right'> 
        {component}
      </Drawer>

  )
}
