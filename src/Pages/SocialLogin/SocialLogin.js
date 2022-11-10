import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <button className="btn text-lg btn-circle mx-2">
                <FaGoogle></FaGoogle>
            </button>
            <button className="btn text-lg btn-circle mx-2">
                <FaGithub></FaGithub>
            </button>
        </div>
    );
};

export default SocialLogin;