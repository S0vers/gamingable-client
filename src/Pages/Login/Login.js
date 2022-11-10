import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-rose-50">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='password' type="text" placeholder="email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                    <div className='text-center mb-5'>
                        <button className="btn text-lg btn-circle mx-2">
                            <FaGoogle></FaGoogle>
                        </button>
                        <button className="btn text-lg btn-circle mx-2">
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;