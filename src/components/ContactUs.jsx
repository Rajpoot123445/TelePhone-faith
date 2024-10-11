import React from 'react';
import "./MainPage.scss";
import { TiMessages } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { GiHeadphones } from "react-icons/gi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GrPersonalComputer } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineAccountTree } from "react-icons/md";
import { TfiSignal } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className='main-page'>
            <div className="borderline w-full h-[1px]"></div>
            <section className="main-page__hero ">
                <div className="main-page__hero-content space-y-5">
                    <h2 className='text-7xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Get In Contact</h2>
                    <h2 className='text-5xl font-sans font-thin'>We Love To Chat</h2>
                    <p className='text-2xl px-2 pt-6 font-sans font-thin'>We love talking to customers. Our team are here to help answer any questions you may have, there’s nothing we haven’t heard before.</p>
                    <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                        We answer 98% of calls within 10 seconds and we’re proud of our 5 star rating on TrustPilot.
                    </p>
                    <div className='flex gap-6'>
                        <button className="main-page__cta-button font-sans font-semibold">Call 0800 772 0000</button>
                        <button className="main-page__cta-button font-sans font-semibold">Email Us</button>
                    </div>

                </div>
                <div className='flex justify-center items-center'>

                    <img
                        src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/lady.png"
                        alt="Hero"
                        className="w-[]"
                    />
                </div>
            </section>

            <div className="borderline w-full h-[1px]"></div>

            <form className='px-24 py-12 space-y-6'>
                <h1 className='mb-8 text-3xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Send Us A Message</h1>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-xl font-sans font-normal text-gray-900 ">Your Name</label>
                        <input type="text" id="first_name" class=" border border-gray-300  text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-xl font-sans font-normal text-gray-900 dark:text-white">Contact Number</label>
                        <input type="text" id="last_name" class=" border border-gray-300 text-lg text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" placeholder="1234-567890" required />
                    </div>


                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xl font-sans font-normal text-gray-900 dark:text-white">Email Address</label>
                    <input type="email" id="email" class=" border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none" placeholder="john.doe@company.com" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xl font-sans font-normal text-gray-900 dark:text-white">Your Message</label>
                    <textarea
                        type="email"
                        id="email"
                        class=" border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-blue outline-none"
                        placeholder="Tell Us how we can help?"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className='w-[25%]'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>
                        Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.
                    </p>
                </div>
                <div>
                    <button className='message'>Send Message</button>
                </div>

            </form>
            <div className="borderline w-full h-[1px]"></div>
            <div className='px-[10%] py-16 space-y-8'>
                <div>
                    <h1 className='text-4xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Ways To Connect With Tamar Telecom</h1>
                </div>
                <p className='text-xl font-sans'>We’re open from 9am to 5.30pm Monday to Friday (excluding public holidays) and can be contacted in the following ways.</p>
                <div className=' px-4 w-full'>
                    <div className='flex gap-5 mb-9'>
                        <div className='w-[50%] p-3 space-y-2 border border-pink-500 shadow-xl rounded-md'>
                            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Call Us</p>
                            <p className='text-xl font-sans'>Call us free on 0800 772 0000</p>
                        </div>
                        <div className='w-[50%] p-3 space-y-2 border border-pink-500 shadow-xl rounded-md'>
                            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Email Us</p>
                            <p className='text-xl font-sans'>Email <a href="/" className='text-2xl font-sans text-blue-600'>hello@tamar.co.uk</a></p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-[50%]  p-3 space-y-2 border border-pink-500 shadow-xl rounded-md'>
                            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Write To Us</p>
                            <p className='text-xl font-sans'>Tamar Telecommunications</p>
                            <p className='text-xl font-sans'>19 Research Way</p>
                            <p className='text-xl font-sans'>Derrifords</p>
                            <p className='text-xl font-sans'>Plymouth</p>
                            <p className='text-xl font-sans'>PL6 8BT</p>
                        </div>
                        <div className='w-[50%] p-3 space-y-4 border border-pink-500 shadow-xl rounded-md'>
                            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Be Social</p>
                            <p className='text-xl font-sans pr-16'>We love to be social! Contact us using any of social platforms below</p>
                            <div className='flex gap-6 w-full pt-2'>
                            <FaFacebookF className='text-5xl text-blue-600' /> <FaLinkedin className='text-5xl text-blue-600' /> <FaInstagram className='text-5xl text-pink-600' /> <FaYoutube className='text-5xl text-red-600' /> <FaXTwitter className='text-5xl' /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="borderline w-full mt-2 h-[1px]"></div>

          
            <div className='px-[10%] py-16 space-y-8'>
                <div>
                    <h1 className='text-4xl'>Useful Links</h1>
                </div>
                <div className='flex items-center justify-between px-4 w-full'>
                    <div className='flex justify-center items-center flex-col hover:bg-gray-200 p-3 rounded-md'>
                        <LiaFileInvoiceSolid className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Pay An Invoice</p>
                    </div>
                    <div className='flex justify-center items-center flex-col hover:bg-gray-200 p-3 rounded-md'>
                        <GrPersonalComputer className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Control Panel</p>
                    </div>
                    <div className='flex justify-center items-center flex-col hover:bg-gray-200 p-3 rounded-md'>
                        <BiTransfer className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Account Transfer</p>
                    </div>
                    <div className='flex justify-center items-center flex-col hover:bg-gray-200 p-3 rounded-md'>
                        <MdOutlineAccountTree className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>FAQ</p>
                    </div>
                    <div className='flex justify-center items-center flex-col hover:bg-gray-200 p-3 rounded-md'>
                        <TfiSignal className='text-8xl text-[#c6117d]' />
                        <p className='text-2xl'>Porting</p>
                    </div>
                </div>
            </div>

            <div className='getTouch flex justify-center items-center gap-4 py-16 flex-col'>
                <div>
                    <h1 className='text-4xl'>Get In Touch...</h1>
                </div>
                <div className='flex items-center justify-center gap-32 w-full'>
                    <div className='flex justify-center items-center flex-col'>
                        <TiMessages className='text-8xl' />
                        <p className='text-2xl'>hello@tamar.co.uk</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <GiRotaryPhone className='text-8xl' />
                        <p className='text-2xl'>0800 772 0000</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <GiHeadphones className='text-8xl' />
                        <p className='text-2xl'>Contact Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs