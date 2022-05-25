// Components
import AsideCustom from './Aside'
import HeaderCustom from './Header'
import SectionCustom from './Section'

// Styles
import style from '../../styles/Main.module.css' 

export default function MainCustom() {
  return (
    <main className={style.main}>

			<HeaderCustom />

			<AsideCustom />

      <SectionCustom />

    </main>
  )
}
