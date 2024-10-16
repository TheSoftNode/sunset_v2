
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () =>
{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            const response = await fetch('https://iotdev-0fl4.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            if (data.status === 'success')
            {
                setStatus('Signup successful! Redirecting to login page...');
                toast.success("SignUp successful!")
                setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
            } else
            {
                toast.error(data.message)
                setStatus(data.message);
            }
        } catch (error)
        {
            setStatus('Error signing up. Please try again later.');
        }
    };
    return (
        <div className='min-h-screen pt-3 flex items-start justify-center bg-gradient-to-r from-gray-100 to-white p-4'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg my-3 mx-auto w-full max-w-sm p-10 rounded-lg border border-transparent transition duration-300 transform hover:scale-105 hover:shadow-xl'>
                <h1 className='font-bold text-2xl py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-blue-500'>
                    Register Your SusNet Hardware
                </h1>

                {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
                {status && <p className='text-pink-500 text-sm font-semibold p-4 text center'>{status}</p>}

                <div className='space-y-4'>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Full Name'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                        required
                    />

                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email Address'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                        required
                    />

                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                        required
                    />
                </div>

                <button type="submit" className='mt-6 p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full font-bold rounded-lg hover:from-green-500 hover:to-teal-500 transition duration-300 transform hover:scale-105'>
                    Sign Up
                </button>

                <p className='mt-4 text-center text-gray-600'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-blue-500 font-semibold hover:underline'>
                        Log In
                    </Link>
                </p>


            </form>
        </div>
    );
};

export default Signup;

