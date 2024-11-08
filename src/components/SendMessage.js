import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { db, auth } from '../firebase.js';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
function SendMessage() {
  const [message, setMessage] = useState();

  const { uid, photoURL } = auth.currentUser;

  function sendMessage(e){
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      text: message,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          type='text' placeholder='テキストを入力して下さい' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  )
}

export default SendMessage
