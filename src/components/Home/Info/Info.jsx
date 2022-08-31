
import './info.css';

export default function Info(props) {

    return (
        <section id='info-sec'>
            <h2 id='creator'> Choose who you are. <span className='hr-span'></span> </h2>

            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 info-col">

                        <div class="card info-card">
                            <img src="https://cdn.dribbble.com/users/2711480/screenshots/14090850/media/8c29d32fe56114d48c61c45be66f5157.gif" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Be the <span>Artist</span> </h5>
                                    <p class="card-text"> Create and share things through <a href='/' className='home-a' style={{ color: 'rgb(250, 207, 127)', fontFamily: 'Lilita One', margin:0 }}>Candid</a>.</p>
                                    <a href="/register" class="btn btn-dark"> Get Started </a>
                                </div>
                        </div>

                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 info-col">
                        <div class="card info-card">
                            <img src="https://cdn.dribbble.com/users/1418633/screenshots/5106121/hi-dribbble-studiotale_still_2x.gif?compress=1&resize=400x300" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Be the <span>Art</span> </h5>
                                    <p class="card-text"> Appreciate the creators by liking them.</p>
                                    <a href="/creator/register" class="btn btn-dark"> Register </a>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}