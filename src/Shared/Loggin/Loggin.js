import React from 'react';
import { Link } from 'react-router-dom';

const Loggin = () => {
    const handleLogin = ()=>{}
    const handleGoogleSignin = ()=>{}
    return (
        <div>
            <div className="">
                <div className='h-[800px] flex justify-center items-center'>
                    <div className='w-96 p-7 border-2'>
                        <h2 className='text-xl text-center'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="text" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Password</span></label>
                                <input type="password" className="input input-bordered w-full max-w-xs" />
                                <label className="label"> <span className="label-text">Forget Password?</span></label>
                            </div>
                            <input className='btn btn-accent w-full' value="Login" type="submit" />
                        </form>
                        <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loggin;