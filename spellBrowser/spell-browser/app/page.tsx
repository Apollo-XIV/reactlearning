'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Details from '@components/details';
import Input from '@components/input';
import { useState } from 'react';


export default function Home() {

  const [spell, setSpell] = useState("");

  function handleSpellChange(e: Event) {
    if ((e.target as HTMLInputElement).value == null) return;
  
synce  }

  return (
    <>
      <h1>hello world!</h1>
      <Input spell={spell} onChange={handleSpellChange}/>
      <Details spell={spell}/>
    </>
  )
}
