
import './about.css';

export default function About() {

    return (
        <section id='about-sec'>
            <h2 style={{ fontFamily:'Comfortaa', textDecoration:'underline' }}> About </h2>


            <p style={{ margin: '10vh 7vh',fontFamily:'Comfortaa', textAlign:'justify' }}> 
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly 
                used to demonstrate the visual form of a 
                document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used 
                as a placeholder before final copy is available. 
            </p>

            <div style={{ display:'flex', justifyContent:'end' , margin: '7% 10% 3%' }}>
                <p  style={{fontFamily:'Comfortaa', fontSize:'25px' }}> by <a href='/' style={{ color:'black', fontFamily:'Rubik Wet Paint', fontSize:'30px' }}> Candid </a> </p>
            </div>
        </section>
    )

}