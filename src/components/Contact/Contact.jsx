

import './Contact.css';

export default function Contact(props){

    return(
       
        <section id='contact-sec' className='text-center'>
            <h2 style={{ fontFamily:'Comfortaa', textDecoration:'underline' }}> Contact </h2>

            <p style={{ margin: '10vh 7vh 7vh',fontFamily:'Comfortaa', textAlign:'center' }}> 
                If you'd like to discuss any project we'd love to hear from you.<br></br>
                Please send us an email or call us. 
            </p>

            <p style={{ margin: '0vh 7vh 5vh',fontFamily:'Comfortaa', textAlign:'center' }}> 
               <span style={{ fontFamily: 'comfortaa', fontSize:'25px' }}> Email </span><br></br>
               <a rel="noreferrer" style={{ color:'black' }} target='_blank' href='mailto:officialpurushothaman@gmail.com'> officialpurushothaman@gmail.com </a>
            </p>

            <p style={{ margin: '0vh 7vh 7vh',fontFamily:'Comfortaa', textAlign:'center' }}> 
               <span style={{ fontFamily: 'comfortaa', fontSize:'25px' }}> Phone </span><br></br>
               +91 - 99 765 767 20 | +91 - 99 439 803 21
            </p>

            <div className='footer'>
            <a href='/' style={{ color:'black', fontFamily:'Rubik Wet Paint', fontSize:'35px' }}> 
                Candid 
            </a> 
            </div>
            

        </section>

    )

}