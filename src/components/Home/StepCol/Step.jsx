
import './Step.css';

export default function Step() {

    return (
        <section id="step-sec">

            <div class="container text-center">
            <p style={{ marginBottom: '7%', fontSize: '2em', fontWeight: '600', fontFamily: 'Comfortaa' }}> Take your chance to impress people around you. </p>
                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-12 card-col">
                        <div class="card style-card" style={{ width: '15rem' }}>
                            <img src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text step-p">Create an account.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 card-col">
                        <div class="card style-card" style={{ width: '15rem' }}>
                            <img src="https://c.tenor.com/UJdIsN02dyoAAAAC/mail-download.gif" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text step-p"> Share your Discoveries.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 card-col">
                        <div class="card style-card " style={{ width: '15rem' }}>
                            <img src="https://cdn.dribbble.com/users/925704/screenshots/6163362/explore_animation.gif" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text step-p"> Explore around.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}