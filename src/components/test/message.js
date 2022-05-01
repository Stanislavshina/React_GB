import '../../styles/styles.css'
import styles from '../../styles/ul.module.css'

export function Message({props1, props2, props3, props4, films, message}){
   const msg = 'with love from France'
   return <div>
      <h1 className="title">{msg}</h1>
      <h1 className="title">{props1}</h1>
      <h1 className="title">{props2}</h1>
      <h1 className="title">{props4}</h1>
      <ul className={styles.films}>films: 
         {
            films.map((film)=>(
               <li className={styles.filmItem}>
            <hr/>
            <h4 className={styles.title}>{film.title}</h4>
            <p className={styles.year}>{film.year}</p>
            <hr/>
            </li>))
            }
      </ul>
      <button onClick={()=>props3('wow! its work')}>CLICK ME</button>
      </div>
}