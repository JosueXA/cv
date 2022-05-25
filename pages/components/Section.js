import style from '../../styles/Main.module.css'

export default function SectionCustom() {
  return (
    <section className={style.section}>

      <div className='cardA'>
        <div className='cardB'>

          <div className="tools">
            <div className={style.topTitleMain}>
              <h3>Trabajos anteriores</h3>
            </div>
          </div>

          <div className={style.wrapperJob} >
            <div className={style.titleJob}>
              <h4>Front-End Junior Developer</h4>
              <a href='#' target="_blank" rel="noopener noreferrer">Salsa Lab</a>
              <h6>2021 to 2022</h6>
            </div>
            <ul className={style.infoJob}>
              <li>
                <p>Maquetación de páginas web</p>
              </li>
              <li>
                <p>Conexión de servicios con el consumo de API</p>
              </li>
              <li>
                <p>Mejora de UX & UI</p>
              </li>
              <li>
                <p>Pruebas en multiplataforma responsive design</p>
              </li>
              <li>
                <p>Uso de librerías para interacción o manejo de información</p>
              </li>
              <li className={style.dnone}>
                <p></p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className='cardA'>
        <div className='cardB'>
          <div className={style.topTitleMain}>
            <h3>Educación</h3>
          </div>
          
          <div className={style.wrapperSkool}>
            <a href='#' target="_blank" rel="noopener noreferrer">Kodemia</a>
            <ol>
              <li>
                <p>Front-End</p>
              </li>
              <li>
                <p>Back-End</p>
              </li>
              <li>
                <p>Scrum</p>
              </li>
              <li className={style.dnone}>
                <p></p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className='cardA'>
        <div className='cardB'>
          <div className={style.topTitleMain}>
            <h3>Hobbies</h3>
          </div>
          
          <div className={style.hobbies}>
            <ul>
              <li>
                <p>Bailar</p>
              </li>
              <li>
                <p>Calistenia</p>
              </li>
              <li>
                <p>Powerlifter</p>
              </li>
              <li>
                <p>Básquetbol</p>
              </li>
              <li>
                <p>Lectura</p>
              </li>
              <li>
                <p>Escibir código</p>
              </li>
              <li>
                <p>Criptomonedas</p>
              </li>
              <li>
                <p>Videojuegos</p>
              </li>
              <li className={style.dnone}>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}
