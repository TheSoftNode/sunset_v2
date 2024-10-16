import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () =>
{
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const errorMessage = location.state?.error;

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            const response = await fetch('https://iotdev-0fl4.onrender.com/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data)

            if (data.status === 'valid')
            {
                setStatus('Login successful! Redirecting to home page...');
                // onVerify();  // Call the function to mark user as authenticated
                toast.success("Login successful!")
                navigate('/'); // Redirect to Thermo page
            } else
            {
                setStatus('Invalid email. Please try again.');
                toast.error('Invalid email. Please try again.')
            }
        } catch (error)
        {
            setStatus('Error verifying email. Please try again later.');
            toast.error('Error verifying email. Please try again later.')
            console.log(error)
        }
    };



    return (
        <div className='min-h-screen pt-3 flex items-start justify-center bg-gradient-to-r from-gray-100 to-white p-4'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg my-3 mx-auto w-full max-w-sm p-10 rounded-lg border border-transparent transition duration-300 transform hover:scale-105 hover:shadow-xl'>
                {status && <p className='text-pink-500 text-sm font-semibold p-1 text-center'>{status}</p>}
                <h1 className='font-bold text-2xl py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-blue-500'>
                    Welcome to SusNet
                </h1>
                <p className='text-center text-gray-600 mb-4'>
                    A Sustainable AI-Enabled Energy Management Network
                </p>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <div className='space-y-4'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email Address'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                    />

                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                    />
                </div>

                <button className='mt-6 p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full font-bold rounded-lg hover:from-green-500 hover:to-teal-500 transition duration-300 transform hover:scale-105'>
                    Sign In
                </button>

                <p className='mt-4 text-center text-gray-600'>
                    Don&apos;t have an account?{' '}
                    <Link to='/signup' className='text-blue-500 font-semibold hover:underline'>
                        Sign Up
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default Login;



