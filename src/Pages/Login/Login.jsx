import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import useAuth from '../../Hooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    // const { logIn } = useContext(AuthContext)
    const { logIn } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="text-center lg:text-left w-1/2 mr-16">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body space-y-6">
                        <h1 className="text-5xl font-bold text-center mb-6">Login now!</h1>
                        <form className='space-y-4' onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-orange-600 text-white font-semibold rounded-xl py-4" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='py-4 text-center'>New to Car Doctor? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;