import React from 'react'
import Footer from './Footer/Footer'
import './home.css'
import Info from './Info/Info'
import Navbar from './Navbar/navbar'
import Starter from './starter/Starter'
import Step from './StepCol/Step'

export default class Home extends React.Component {

    componentDidMount() {
        // const Ulkitscript1 = document.createElement("script");
        // Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js";
        // Ulkitscript1.async = true;

        // const Ulkitscript2 = document.createElement("script");
        // Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js";
        // Ulkitscript2.async = true;
        
        // const Ulkitscript3 = document.createElement("script");
        // Ulkitscript3.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js";
        // Ulkitscript3.async = true;

        // const Ulkitscript4 = document.createElement("script");
        // Ulkitscript3.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js";
        // Ulkitscript3.async = true;

        // document.body.appendChild(Ulkitscript1);
        // document.body.appendChild(Ulkitscript2);
        // document.body.appendChild(Ulkitscript3);
        // document.body.appendChild(Ulkitscript4);

    }

    render(){
        return(
            <section id="home">
                <div className='fancy-border'>
                    <Navbar />
                    <Starter />
                </div>
                <div className='padding-home'>
                    <Step />
                    <Info />
                </div>
                <Footer />

            </section>
        )
    }
}