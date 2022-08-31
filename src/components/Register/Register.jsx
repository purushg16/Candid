
import { useState } from 'react';
import OTPInput from "otp-input-react";
import './Register.css';

export default function Register(props) {

    const [otp, setOtp] = useState();

    const [disableOTP, enableOTP] = useState('none');

    function submit() {
        enableOTP('block');
    }

    function handleOTP(e) {
        console.log(otp);
    }

    return (
        <section id='register-sec'>
            <form onSubmit={submit}>
                <div className='form-head text-center' style={{ paddingTop: '3%' }}>
                    <h2 className='form-brand'> <a href='/' style={{ color: 'black'}}> Candid </a> </h2>
                    <p> ~ Let's create a world. ~ </p>
                </div>

                <div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    {/* <div className="mb-3 row">
                        <div className="col-4 text-left">
                            <p> Enter the OTP:  </p>
                        </div>
                        <div className="col-4 text-center">
                            <OTPInput style={{ justifyContent: 'center' }} value={otp} onChange={setOtp} OTPLength={4} otpType="number" disabled={false} secure />
                        </div>
                        <div className="col-4 text-center">
                            <button type='button' className='btn btn-dark' style={{ color: '#e1b565' }} onClick={handleOTP}> Verify </button>
                        </div>
                    </div> */}

                    {/* <button onClick={{}} className='btn btn-dark'> Check Mail </button> */}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> First Name </label>
                    <input required type="text" className="form-control" id="exampleInputFName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Last Name </label>
                    <input required type="text" className="form-control" id="exampleInputSName" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="role" className="form-label"> Choose who you will be..</label>
                    <select className="form-select" aria-label="Default select example" id='role'>
                        <option selected disabled> Not selected </option>
                        <option value="artist"> Artist  </option>
                        <option value="art"> Art </option>
                    </select>
                </div>

                <div className="mb-3 form-check">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1"> By clicking this, you are this!! </label>
                </div>
                <button type="submit" className="btn btn-dark" style={{ color: '#e1b565' }}>Submit</button>

                {/* <div className='text-center' style={{  padding:'5%', position:'inherit'}}>
                    <p style={{ fontFamily: 'Comfortaa' }}> Enter the otp recieved thorugh your mail! </p>
                    <OTPInput style={{ justifyContent: 'center' }} value={otp} onChange={setOtp} OTPLength={4} otpType="number" disabled={false} secure />
                    <div id='verify-btn-sec'>
                    </div>
                </div> */}
                <p style={{ fontFamily: 'Comfortaa', textAlign: 'center' }}> Have an account? <a href='/login' style={{ color: '#e1b565' }}> Login!</a> </p>
            </form>
        </section>
    )

}