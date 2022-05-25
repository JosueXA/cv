// import anime from 'animejs/lib/anime.es.js';
// import ScrollMagic from 'scrollmagic';

// import styles from '../../styles/Home.module.css'
import style from '../../styles/Main.module.css'

// import Image from 'next/image'

export default function HeaderCustom() {
  return (
    <header className={style.header}>
      <div className={style.ctntPhoto}>
        <div className={style.photoProfile}></div>
      </div>
    </header>
  )
}
