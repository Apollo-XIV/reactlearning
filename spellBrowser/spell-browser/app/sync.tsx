'use client';
import {Input, Ref} from '@components/input';
import { createRef, useEffect, useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
const client = new Client().setEndpoint('http://localhost/v1').setProject('kahoot-clone');
const databases = new Databases(client);

type message = {
  name: string;
  msg: string;
}

export default function sync() {
  const message = createRef<Ref>();
  const username = createRef<Ref>();
  const [record, setRecord] = useState("");
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    client.subscribe('databases.sync.collections.devTest.documents', response => {
      const {name, msg} = response.payload as message;
      console.log(name+": "+msg);
      setMessages((prev) => [...prev, {name: name, msg: msg}]);
     }); 
    const promise = databases.createDocument('Sync', 'devTest',ID.unique(), {name: "New User", msg: "hello"});
    promise.then(function (response) {
      setRecord(response.$id);
    })

    return () => {
      databases.deleteDocument('Sync','devTest', record );
    }
  }, []);

  async function saveMessage() {
    if (message.current && username.current) {
      const promise = databases.updateDocument('Sync', 'devTest', record,{name: username.current.value, msg: message.current.value})
      promise.then(function(response) {
        console.log("successfully updated");
      })
      message.current.value = "";
    }
  }

  return (
    <>
      <br></br>
      <Input label="name" ref={username}/><br/>
      <Input label="message" ref={message} />
      <button onClick={saveMessage}>Send Message</button>
      <p>{record}</p>
      {messages.map((message, index) => (
        <p key={index}>{message.name}: {message.msg}</p>
      ))}
    </>
  );
}