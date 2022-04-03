import React from 'react';

const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto " data-bs-toggle="modal" data-bs-target="#loginModal" >
                Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-google me-2'></span>Sign In With Google
                            </button>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-facebook me-2'></span>Sign In With Facebook
                            </button>
                            <form>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" class="htmlForm-label">Email address</label>
                                    <input type="email" class="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="htmlForm-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputPassword1" class="htmlForm-label">Password</label>
                                    <input type="password" class="htmlForm-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 htmlForm-check">
                                    <input type="checkbox" class="htmlForm-check-input" id="exampleCheck1" />
                                    <label class="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-outline-primary w-100 mt-5">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;