import photo from '../../images/melissaPhoto.jpeg';
import style from './About.module.css';

const About = () => {
    return (
    <div className={style.aboutMeContainer}>
        <img src={photo} alt={'MelissaPhoto'} />
        
        <div className={style.infoContainer}>
            <h1>Sobre <span className={style.aboutSpan}>mi</span></h1>
            <p>
                ¡Hola! Soy Melissa Monroy y este es mi primer proyecto de Frontend desarrollado en el Bootcamp Henry. Por medio de este proyecto te comparto un poco de mi crecimiento profesional obtenido durante este increíble y continuo proceso de aprendizaje.
            </p>
            <p>
                Durante mi tiempo en el bootcamp, he adquirido habilidades sólidas en <span className={style.aboutSpan}>HTML, CSS, JavaScript y React</span>. Además de comprender la importancia y poner en práctica el colaborativo, superando obstáculos con creatividad y determinación.
            </p>
            <p>            
                ¡Gracias por visitar mi página! Siempre estoy dispuesta a escuchar sugerencias y hacer parte de nuevas oportunidades.
            </p>
        </div>       
    </div>
    )
}

export default About;