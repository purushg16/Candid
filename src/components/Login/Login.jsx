
import './login.css'

export default function Login(props) {

    function handleSubmit(e){
        console.log(e);
    }

    return (
        <section id='login-sec'>
            <form onSubmit={handleSubmit}>
                <div className='form-head text-center'>
                    <h2 className='form-brand'><a href='/' style={{ color: 'black'}}> Candid </a> </h2>
                    <p> ~ Welcome back. ~ </p>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> Username </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-dark" style={{ color:'#e1b565' }}> Login </button>
                <p style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: '3%' }}> Don't have an account? Create <a href='/register' style={{ color: '#e1b565' }}> here!</a> </p>
            </form>
        </section>
    )

}