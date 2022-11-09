import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth'
import styles from '../../styles/doctorDashboard/ChatList.module.css'
import supabase from '../../utils/supabase'
import dayjs from 'dayjs'


export default function ChatList({ currentPatient, patientList, setCurrentPatient, messages }) {
  const [selectedPatient, setSelectedPatient] = useState(currentPatient) 
  const [updated, setUpdated] = useState(0)

  const formatDate = (date) => {
    const isToday = dayjs(date).isSame(dayjs()); 
    if (isToday) {
      return 'Today'
    }
    return dayjs('2022-11-06T20:02:55.730854+00:00').format('MM/DD/YYYY')
  }

  const getLastMessage = (patient) => {
    const lastMessage = messages.filter((msg) => msg.patientId === patient.patient && msg.doctorId === patient.doctor)
    return lastMessage
  }

  useEffect(() => {
    setUpdated(updated + 1)
  }, [messages])

  const updatePatient = (user) => {
    console.log(user)
    setCurrentPatient(user)
    setSelectedPatient(user)
  }


  const renderPatientList = () => {
    
    return (
      <div className={styles.chatContainer}>
          {patientList.map((user, i) => {
            const lastMsg = getLastMessage(user)
            return (
            <div onClick={() => updatePatient(user)} className={`${styles.card} ${(user?.patient === selectedPatient?.patient || currentPatient.patient === user.patient) && styles.activeCard}`}>
              <div style={{background: 'linear-gradient(56deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}} className={styles.imageDummy}></div>
              <section className={`${i !== user.length - 1 ? styles.messageInfo : styles.borderlessMessageInfo}`}>
    
                  <div className={styles.topInfo}>
                    <h3 className={`${styles.userName} ${lastMsg[lastMsg.length - 1].unread && styles.unreadMessage}`}>{user.patientName.split('@')[0]}</h3>
                    <p className={styles.date}>{formatDate(lastMsg[lastMsg.length - 1].created_at)}</p>
                  </div>

                  <div className={styles.bottomInfo}>
                    <h3 className={`${styles.lastMessage} ${lastMsg[lastMsg.length - 1].unread && styles.unreadMessage}`}>{lastMsg[lastMsg.length - 1].message}</h3>
                    {lastMsg[lastMsg.length - 1].unread && <div className={styles.unread}></div>}
                  </div>

              </section>
            </div>
          )
          })}
        </div>
    )
  }

  return ( 
      <section className={styles.contentContainer}>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Mensajes</h1>
        </div>

        <div className={styles.searchContainer}>
          <input className={styles.search} placeholder='Buscar' />
        </div>

        {messages.length && renderPatientList()}

      </section>
  )
}
