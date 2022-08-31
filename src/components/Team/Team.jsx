
import './Team.css';
import purush from './mee.jpg';

export default function Team(props) {

    return (
        <section id='team-sec' className='text-center'>

            <h2> Us </h2>

            <div className='containter' style={{ marginTop: '7vh' }}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12' style={{ padding:'3%'}}>
                        <div className="card style-card" style={{ background:'transparent', overflow: 'hidden' }}>
                            <img src={purush} className="card-img-top" alt="..." />
                                <div className="card-body" style={{ background:'transparent' }}>
                                    <h5 className="card-title"> Purushothaman G </h5>
                                    <p className="card-text" style={{wordSpacing:'3px'}}> As Frontend Developer </p>
                                    <p className="card-text" style={{wordSpacing:'3px'}}> Front-End | Back-end | Python </p>
                                    <a target='_blank' rel='noreferrer' href="https://purushfolio.netlify.app/" className="btn btn-dark" style={{ color:'gold' }}> Know More </a>
                                </div>
                        </div>
                    </div>

                    {/* <div className='col-6 col-sm-6' style={{ padding:'3%'}}>
                        <div className="card style-card" style={{ background:'transparent', overflow: 'hidden' }}>
                            <img src={purush} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> Purushothaman G </h5>
                                    <p className="card-text" style={{wordSpacing:'3px'}}> Front-End | Back-end | Python </p>
                                    <a href="/" className="btn btn-dark" style={{ color:'gold' }}> Know More </a>
                                </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </section>
    )

}