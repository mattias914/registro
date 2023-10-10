import './SocialButton.css';

//font-awesome roto no carga los iconos mejor img por el momento

const SocialButton = (props) => {
    return (
        <>
            <section className="social">
                <a className="button" href="https://www.facebook.com/" target={'_blank'}><img src={props.img[0]} alt="facebook icono" /></a>
                <a href="https://github.com/" target={'_blank'}><img src={props.img[1]} alt="github icono" /></a>
                <a href="https://www.linkedin.com/" target={'_blank'}><img src={props.img[2]} alt="linkedin icono" /></a>
            </section>
        </>
    )
}

export default SocialButton;