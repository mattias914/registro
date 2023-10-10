import Formulario from "../Formulario";
import Alert from "../Alert";
import SocialButton from "../SocialButton";
import './Registro.css'

const Registro = (props) => {
    return (
        <>
            <main>
                <h1>Crea una <span className='resaltar'>cuenta</span></h1>
                <SocialButton 
                img={[
                    "https://www.freeiconspng.com/uploads/images-for--facebook-icon-png-27.png",
                    "https://w7.pngwing.com/pngs/490/316/png-transparent-computer-icons-github-github-icon-cat-like-mammal-carnivoran-black.png",
                    "https://www.citypng.com/public/uploads/preview/hd-black-square-outline-linkedin-in-icon-symbol-png-31623972486t03drblxs7.png"]}/>   
                <Formulario />
            </main>
        </>
    )
}

export default Registro;