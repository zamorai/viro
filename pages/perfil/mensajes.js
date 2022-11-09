import React from 'react'
import Chatroom from '../../components/general/Chatroom'
import MessageUtils from '../../components/userProfile/MessageUtils'

export default function mensajes() {
  return (
    <div>
      <MessageUtils />

      <Chatroom/>
    </div>
  )
}
