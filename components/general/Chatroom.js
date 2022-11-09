import React, { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../context/Auth'
import styles from '../../styles/userProfile/mensajes.module.css'
import supabase from '../../utils/supabase'
import dayjs from 'dayjs'

export default function Chatroom({ currentPatient, messages}) {
  const user = useAuth()
  const [patientMessages, setMessages] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [text, setText] = useState('')

  const formatDate = (date) => {
    return {
      date: dayjs(date).format('MM/DD/YYYY') ,
      time: dayjs(date).format('h:mm A')
    }
  }

  const filterMessages = (messages) => {
    const filteredMessages = messages.filter((message) => message.patientId === currentPatient.patient && message.doctorId === currentPatient.doctor)
    console.log('wwwuot', filteredMessages)
    setMessages(filteredMessages)
  }

  useEffect(() => {
    setSelectedPatient(currentPatient)
  }, [currentPatient]);

  useEffect(() => {
    console.log('meeessage', messages, selectedPatient)
    if (messages.length) {
      filterMessages(messages)
    }
  }, [selectedPatient, messages]);

  useEffect(() => {
    scrollToBottom()
  }, [patientMessages]);

  const sendMessage = async (e) => {
    e.preventDefault()

    const {data: message, error} = await supabase
    .from('messages')
    .insert({ patientName: currentPatient.patientName, doctorName: currentPatient.doctorName, patientId: currentPatient.patient, doctorId: currentPatient.doctor, message: text, type: currentPatient.type, sender: user.user.id, unread: user.user.id !== currentPatient.doctor})
    // need more tweaking to correctly insert it??? maybe its fine like this actually
    console.log(message, error)
    setText('')
  }

  const scrollRef = useRef();

  // const onScroll = async ({ target }) => {
  //   if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
  //     setUnviewedMessageCount(0);
  //     setIsOnBottom(true);
  //   } else {
  //     setIsOnBottom(false);
  //   }

  //   //* Load more messages when reaching top
  //   if (target.scrollTop === 0) {
  //     // console.log("messages.length :>> ", messages.length);
  //     const { data, error } = await supabase
  //       .from("messages")
  //       .select()
  //       .range(messages.length, messages.length + 49)
  //       .order("id", { ascending: false });
  //     if (error) {
  //       setError(error.message);
  //       return;
  //     }
  //     target.scrollTop = 1;
  //     setMessages((prevMessages) => [...prevMessages, ...data]);
  //   }
  // };

  const scrollToBottom = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  return (
    <div>
        <section ref={scrollRef} className={styles.container}>
        <div className={styles.messages}>
          {patientMessages.map((message, idx) => (
            <>
              {((patientMessages[idx - 1] && formatDate(patientMessages[idx].created_at).date !== formatDate(patientMessages[idx - 1].created_at).date) || idx === 0) && <span className={styles.messageDate}>{formatDate(message.created_at).date}</span>}
              <div className={`${message.message.length > 5 ? styles.messageContainer : styles.messageContainerSmall} ${message.sender === user.user.id ? styles.userMessage : styles.doctorMessage}`}>
                <p className={styles.messageContent}>{message.message}</p>
                <span className={styles.messageTime}>{formatDate(message.created_at).time}</span>
              </div>
            </>
            ))}
          </div>
      </section>

      <section className={styles.inputContainer}>
        <form onSubmit={sendMessage} className={styles.formContainer}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder='test' className={styles.input}/>
          <button disabled={text.length === 0} className={styles.button} type='submit'>Send</button>
        </form>
      </section>
    </div>
  )
}
