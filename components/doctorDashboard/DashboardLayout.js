import { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth'
import styles from '../../styles/doctorDashboard/DashboardLayout.module.css'
import ChatList from './ChatList'
import DashList from './DashList'
import supabase from '../../utils/supabase'
import Chatroom from '../general/Chatroom'
import Historial from './Historial'
import Compras from './Compras'
import InformacionGeneral from './InformacionGeneral'
import Recursos from './Recursos'

// This is a protected route, only a doctor can access it. 
// we grab the doctors ID from the user object. From here we need info from 
// patients table, and for each patient we want to grab their related doctors  

export default function DashboardLayout() {
  const user = useAuth()
  const [tab, setTab] = useState('messages')
  const [selectedTab, setSelectedTab] = useState(null)
  const [patientList, setPatientList] = useState([])
  const [currentPatient, setCurrentPatient] = useState(null)

  const [messages, setMessages] = useState([])
  const [subscription, setSubscription] = useState(null);

  const handleNewMessage = (payload) => {
    setMessages((prevMessages) => [...prevMessages, payload.new]);
  };

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .eq('doctorId', user.user.id)
        .order("id", { ascending: true });
        // at this time this should be okay, but later we want to probalby make sure we fetch messages for each user

      if (!error) {
        setMessages(data);
      }
    }
  };

  useEffect(() => {
    if (patientList.length && !subscription) {
      getInitialMessages();
      
      const mySubscription = supabase
      .from('messages')
      .on('*', payload => {
        console.log('Change received!', payload)
        handleNewMessage(payload)
      })
      .subscribe()
      console.log(mySubscription)
      setSubscription(mySubscription)
    }
    
    // return () => supabase.removeSubscription(mySubscription);

  }, [patientList])



  useEffect(() => {
    const getPatients = async () => {
      const { data: patients } = await supabase
      .from('patients')
      .select()
      .eq('doctor', user.user.id)
      
      setPatientList(patients)
      setCurrentPatient(patients[0])
    }

    if (user) {
      getPatients()
    }
  }, [user])


  const renderTab = (tab) => {
    console.log(currentPatient)
    switch(tab) {
      case 'messages':
        setSelectedTab(<Chatroom currentPatient={currentPatient} messages={messages} />)
        break;
      case 'historial':
        setSelectedTab(<Historial currentPatient={currentPatient} />)
        break;
      case 'compras':
        setSelectedTab(<Compras currentPatient={currentPatient} />)
        break;
      case 'informacion': 
        setSelectedTab(<InformacionGeneral currentPatient={currentPatient} />)
        break;
      case 'recursos':
        setSelectedTab(<Recursos />)
        break;
    }
  }

  useEffect(() => {
    renderTab(tab)
  }, [tab, currentPatient, messages])
  // also need a controller to organize what screen the doctor is currently watching


  return (
    <div className={styles.container}>
      
      <main className={styles.contentContainer}>

        <section className={styles.chat}>
          <ChatList currentPatient={currentPatient} patientList={patientList} setCurrentPatient={setCurrentPatient} messages={messages} />
        </section>

        <section className={styles.dash}>

          <div className={styles.dashChat}>
            <DashList setTab={setTab} />
          </div>
          <div className={styles.mainPanel}>
            {selectedTab}
          </div>

        </section>

      </main>

    </div>
  )
}
