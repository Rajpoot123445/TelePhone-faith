import React from 'react'
import "./MainPage.scss";
import { Link } from 'react-router-dom'

const ControlPanel = () => {
    return (
        <div>
            <img
                src="https://faithtelecom.co.uk/wp-content/uploads/2018/11/logo.svg"
                alt="Faith Logo"
                className="h-[80px] px-12 my-4"
            />
            <div className='getTouch flex flex-col gap-1 px-12 py-6 items-start'>
                <h1 className='text-lg'>
                    <Link to="/" className='text-lg'> Tamar Home </Link>  /  Control panel home   /
                </h1>
                <h2 className='text-5xl'>Login</h2>
            </div>
            <div className='w-full p-16 flex justify-center'>
                <div className='w-[37%] px-9 py-9 border text-center space-y-6 rounded-2xl'>
                    <h1 className='text-4xl font-sans font-semibold'>Log into your account</h1>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 font-sans font-normal text-gray-900 dark:text-white">Account number / Username</label>
                        <input type="text" id="email" class=" border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" placeholder="e.g. 10XXXXX" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 font-sans font-normal text-gray-900 dark:text-white">Password</label>
                        <input type="email" id="email" class=" border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" placeholder="Password" required />
                    </div>
                    <p>
                    <a href="" className='text-blue-500 underline font-sans'>Forgotten your password?</a>
                    </p>
                    <div>
                        <button className='message py-1 px-16 font-sans font-semibold'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel