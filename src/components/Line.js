import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { db, auth } from '../firebase.js'
import { collection, query, orderBy, limit, onSnapshot} from 'firebase/firestore';
import SendMessage from './SendMessage.js';

function Line() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe =
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`msg ${
              uid === auth.currentUser.uid ? 'sent' : 'received'
            }`}>
              <img src={photoURL} alt=""></img>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage/>
    </div>
  )
}

export default Line