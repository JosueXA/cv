import style from '../../styles/Main.module.css'

export default function AsideCustom() {
  return (
    <aside className={style.aside}>

      <div className="cardAlt work">
        <div className="imgSection">
          <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76"><path fillRule="nonzero" fill="#3F9CBB" d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"></path></svg>
        </div>
        <div className="cardDesc">
          <div className="cardHeader">
            <div className="cardTitle">Stack de tecnologías MERN || MEAN</div>
            <div className="cardMenu">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="cardTime">Josué Xicotencatl Avalos</div>
          <p className="recent">Full Stack Developer</p>
        </div>
      </div>

      <div className='cardA'>

        <div className='cardB'>
          <div className={style.topTitleMain}>
            <h3>Contáctame</h3>
          </div>

          <div className={style.socialIcons}>
            <a href='#' target="_blank" rel="noopener noreferrer">
              <svg className={style.icons}><use href="#mail"></use></svg>
              josue.xicotencatl.a@gmail.com
            </a>
            <a href='#' target="_blank" rel="noopener noreferrer">
              <svg className={style.icons}><use href="#whatsapp"></use></svg>
              5549143203
            </a>
            <a href='#' target="_blank" rel="noopener noreferrer">
              <svg className={style.icons}><use href="#github"></use></svg>
              JosueXA
            </a>
            <a href='#' target="_blank" rel="noopener noreferrer">
              <svg className={style.icons}><use href="#likedin"></use></svg>
              Josué X A
            </a>
          </div>
        </div>


      </div>

      <div className='cardA'>
        <div className='cardB'>
          <div className={style.topTitleMain}>
            <h3>Resumen Profesional</h3>
          </div>

          <div className={style.resumenPersonal}>
            <p>Resumen profesional que ya está en el cv y hasta aumenta un poco ya que es una página web de CV</p>
          </div>
        </div>
      </div>

      <div className='cardA'>
        <div className='cardB'>
          <div className={style.topTitleMain}>
            <h3>Especialización</h3>
          </div>

          <div className={style.tecnologies}>
            <ul>
              <li>
                <p>React.js</p>
              </li>
              <li>
                <p>Next.js</p>
              </li>
              <li>
                <p>Node.js</p>
              </li>
              <li>
                <p>Bootstrap 5</p>
              </li>
              <li>
                <p>Angular 8</p>
              </li>
              <li>
                <p>Ionic 5</p>
              </li>
              <li>
                <p>Laravel 5.8</p>
              </li>
              <li>
                <p>API RestFull</p>
              </li>
              <li>
                <p>jQuery</p>
              </li>
              <li>
                <p>git & gitHub</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>SASS</p>
              </li>
              <li className={style.dnone}>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      

      
    </aside>
  )
}
