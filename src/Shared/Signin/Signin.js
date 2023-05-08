import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    const handleSignUp = () => { }
    const handleGoogleSignin = () => { }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7 border-2'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" name='name' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text" name='email' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" name='password' className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label"> <span className="label-text">Select Category</span></label>
                            <select name='role' className="select select-bordered w-full max-w-xs">
                                <option value='Buying'>Buying</option>
                                <option value='Selling'>Selling</option>
                            </select>
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    </form>
                    <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Signin;