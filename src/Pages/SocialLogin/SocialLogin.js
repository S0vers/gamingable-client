import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
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
                        localStorage.setItem('genius-token', data.token);
                        Navigate(from, { replace: true });
                    });

            })
            .catch(err => console.error(err))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
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
                        localStorage.setItem('genius-token', data.token);
                        Navigate(from, { replace: true });
                    });

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn text-lg btn-circle mx-2">
                <FaGoogle></FaGoogle>
            </button>
            <button onClick={handleGithubSignIn} className="btn text-lg btn-circle mx-2">
                <FaGithub></FaGithub>
            </button>
        </div>
    );
};

export default SocialLogin;