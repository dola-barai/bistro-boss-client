import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
      
            const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('https://bistro-boss-server-dibanishi81-gmailcom.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(( ) => {   
                        navigate(from, { replace: true });
                })

            
        });
        
    };

    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-6">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-primary">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;