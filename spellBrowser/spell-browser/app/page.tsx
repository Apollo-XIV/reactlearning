import Image from 'next/image'
import styles from './page.module.css'
import Sync from './sync';




export default function Home() {
  
  return <>
    <img src='logo.gif'/>
    <Sync></Sync>
  </>;
}


