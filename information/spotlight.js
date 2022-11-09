import { TbFileInvoice, TbStethoscope, TbPills, TbShieldLock, TbPrescription, TbAward, TbCertificate2, TbHeartHandshake, TbAmbulance } from 'react-icons/tb'


export const mainSpotlight = {
  title: 'Comienza tu consulta online',
  items: [
      {
        icon: <TbFileInvoice size={50} strokeWidth={1} />,
        text: 'Responde un par de preguntas sobre ti y tus objetivos de salud.'
      },
      {
        icon: <TbStethoscope size={50} strokeWidth={1} />,
        text: 'Te contectamos con un medico professional de inmediato, sin tener que esperar semanas'
      },
      {
        icon: <TbPills size={50} strokeWidth={1} />,
        text: 'Descubre los mejores traramientos para tu caso y esperalos directo en tu hogar.'
      },
      {
        icon: <TbShieldLock size={50} strokeWidth={1} />,
        text: 'Toda tu informacion personal queda encriptada y segura.'
      }
  ],
  img: '/gateway.jpg'
}

export const secondSpotlight = {
  title: 'Los mejores tratamientos y productos',
  items: [
      {
        icon: <TbPrescription size={50} strokeWidth={1} />,
        text: 'Tratamientos clinicamente comprovados desde perdida del cabello hasta salud sexual'
      },
      {
        icon: <TbCertificate2 size={50} strokeWidth={1} />,
        text: 'Opciones de medicamento aprovado por la FDA'
      },
      {
        icon: <TbHeartHandshake size={50} strokeWidth={1} />,
        text: 'Products amados por cientos de clientes y usados diariamente'
      },
      {
        icon: <TbAmbulance size={50} strokeWidth={1} />,
        text: 'Tu medicamento llega a la puerta de tu casa desde farmacias registradas'
      }
  ],
  img: '/certificate.jpg'
}