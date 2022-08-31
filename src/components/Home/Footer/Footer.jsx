import './footer.css';


export default function Footer(props) {

    return (
        <section id='footer-sec' className='text-center'>
            <a className='bottom-brand' href='/'> Candid </a>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about"> About </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact"> Contact </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/team"> Team </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li> */}
            </ul>
        </section>
    )

}