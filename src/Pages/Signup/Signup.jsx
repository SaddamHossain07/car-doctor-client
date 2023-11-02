import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const Signup = () => {

    const { user, createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error =>
                console.error(error))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="text-center lg:text-left w-1/2 mr-16">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body space-y-6">
                        <h1 className="text-5xl font-bold text-center mb-6">Sign Up</h1>
                        <form className='space-y-4' onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-orange-600 text-white font-semibold rounded-xl py-4" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='py-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;