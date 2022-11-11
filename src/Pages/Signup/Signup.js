import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.display.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        createUser(email, password)
            .then(result => {
                form.reset();
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://gamingable-server-e8mcnhjtb-s0vers.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // local storage is not the best but the easiest place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        Navigate(from, { replace: true });
                    });
                updateUserProfile(profile)
                    .then(() => {
                    })
                    .catch(e => console.error(e));
            })
            .catch(e => {
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Gamingable || Signup</title>
                <meta name="Gamingable" content="Website" ></meta>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-rose-50">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <form onSubmit={handleSignup} className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Display Image</span>
                                </label>
                                <input name='display' type="text" placeholder="image" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                        <p className='text-center'>Already a member? <Link className=' font-bold text-rose-600' to='/login'>Login</Link></p>
                    </div>
                    <div className='text-center mb-5'>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;