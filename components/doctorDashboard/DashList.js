import React, { useState } from 'react'
import { TbMessages, TbReportMedical, TbShoppingCart, TbUserSearch, TbBook2 } from 'react-icons/tb'
import { Tooltip } from '@mantine/core';

const items = [
  {
    icon: <TbMessages strokeWidth={1} size={35} />,
    tooltip: 'Mensajes',
    key: 'messages',
  },
  {
    icon: <TbReportMedical strokeWidth={1} size={35} />,
    tooltip: 'Historial medico',
    key: 'historial',
  },
  {
    icon: <TbShoppingCart strokeWidth={1} size={35} />,
    tooltip: 'Compras y suscripciones',
    key: 'compras',
  },
  {
    icon: <TbUserSearch strokeWidth={1} size={35} />,
    tooltip: 'Informacion general',
    key: 'informacion'
  },
  {
    icon: <TbBook2 strokeWidth={1} size={35} />,
    tooltip: 'Recursos',
    key: 'recursos'
  },

]

export default function DashList({ setTab }) {
  const [selected, setSelected] = useState(0)
  return (
    <div className='w-full h-full bg-[#fdfdfd] flex items-center justify-around'>
      {items.map((item, i) => (
        <Tooltip  label={item.tooltip}>
          <div onClick={() => {
            setSelected(i)
            setTab(item.key)
          }} className={`${i === selected && 'border-blue-500 border-b-2 bg-blue-50'} h-full hover:bg-blue-50 cursor-pointer w-full flex items-center justify-center`}>
            {item.icon}
          </div>
        </Tooltip>
      ))}
    </div>
  )
}
