import React from 'react'
import TabComponent from './TabComponent'

import "./MainPage.scss";
import { TiMessages } from "react-icons/ti";
import { GiRotaryPhone } from "react-icons/gi";
import { GiHeadphones } from "react-icons/gi";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { BiMobileVibration } from "react-icons/bi";
import Accordion from './Accordion';

const Voip = () => {
    return (
        <div>
            <div className='main-page'>
                <div className="borderline w-full h-[1px]"></div>
                <section className="main-page__hero ">
                    <div className="main-page__hero-content space-y-5">
                        <h2 className='text-5xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Tamar VoIP – Your ISDN Switch Off Solution</h2>
                        <p className='text-2xl px-2 pt-6 font-sans font-thin'>We’re launching into a new era of telecoms. Discover the power of Tamar VoIP (Voice over Internet Protocol), our cutting-edge phone system designed specifically for businesses. With our state-of-the-art app, you'll experience crystal-clear inbound and outbound calls, empowering you to showcase your Tamar numbers as the cornerstone of your business operations.</p>
                        <p className='text-2xl px-2 pb-4 font-sans font-thin'>
                            With our VoIP solutions, you can enjoy cost-effective, scalable, and feature-rich communication tools designed to boost productivity and streamline operations.
                        </p>
                        <p className='text-2xl px-2 pb-4 font-sans font-thin'>This is the perfect solution for the ISDN Switch Off.</p>
                        <div className='flex gap-6'>
                            <button className="main-page__cta-button px-2 font-sans font-semibold">Choose Your Number</button>
                            <button className="main-page__cta-button font-sans font-semibold">Find Out More</button>
                            <button className="message px-5 text-center font-sans font-semibold"> <FaPlay className='text-xl' /> </button>
                        </div>
                    </div>
                    <div className=' w-[45%] flex justify-center items-center'>
                        <img
                            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/voip-1.png"
                            alt="Hero"
                        />
                    </div>
                </section>

                <div className="borderline w-full h-[1px]"></div>

                <div className=' w-full  px-24 py-12'>
                    <h2 className='text-center w-full text-5xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Tamar VoIP Features:</h2>
                    <TabComponent />
                </div>
                <div className="borderline w-full mt-3 h-[1px]"></div>

                <h2 className='text-center font-sans text-3xl py-9 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Step 1: What Type Of Service Do You Need?</h2>

                <div className='flex flex-col md:flex-row justify-center w-full gap-6 px-24 pb-12'>
                    <div className='w-[31%]'>
                        <div class="w-[88%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="messageBox flex flex-col justify-center items-center gap-3 rounded-none h-60 py-2">
                                <BiMobileVibration className='text-8xl' />
                                <h1 className="text-3xl font-sans font-bold text-center">Receive Calls</h1>
                                <p className='text-xl font-sans'>Our Classic Virtual Numbers</p>
                            </div>
                            <div class="p-5">
                                <p className='font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Professional Business Phone Numbers.</p>
                                <p className='font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Simple, Affordable, Effective</p>
                                <ul>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex items-center gap-2 mt-4'> <div className='w-5 h-5 rounded-full border-4 bg-blue-500'></div> Over 10 Completely Free Features</li>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2'><div className='w-5 h-5 mt-1 rounded-full border-4 bg-blue-500'></div> Send Calls To Your Mobiles & Landlines</li>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2'><div className='w-6 h-5 mt-1 rounded-full border-4 bg-blue-500'></div> 24/7 Management With Our Free Control Panel & App</li>
                                </ul>
                                <div className='text-center'>

                                    <button className='message w-full font-sans text-xl font-semibold mt-12'>Select</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-[31%]'>
                        <div class="w-[88%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="messageBox flex flex-col justify-center items-center gap-3 rounded-none h-60 py-2">
                                <PiPhoneCallBold className='text-8xl' />
                                <h1 className="text-3xl font-sans font-bold text-center">Make & Receive Calls</h1>
                                <p className='text-xl font-sans'>Our Complete VoIP System</p>
                            </div>
                            <div class="p-5">
                                <p className='font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Professional Business Phone Numbers.</p>
                                <p className='font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Simple, Affordable, Effective</p>
                                <ul>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex items-center gap-2 mt-4'> <div className='w-5 h-5 rounded-full border-4 bg-blue-500'></div> Over 10 Completely Free Features</li>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2'><div className='w-5 h-5 mt-1 rounded-full border-4 bg-blue-500'></div> Send Calls To Your Mobiles & Landlines</li>
                                    <li className='font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2'><div className='w-6 h-5 mt-1 rounded-full border-4 bg-blue-500'></div> 24/7 Management With Our Free Control Panel & App</li>
                                </ul>
                                <div className='text-center'>

                                    <button className='message w-full font-sans text-xl font-semibold mt-12'>Selected</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="borderline w-full mt-3 h-[1px]"></div>

                <div className='bg-yellow-200 mx-16 my-7 p-8 text-center rounded-2xl'>
                    <h1 className='font-sans text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Need Help? Our team are happy to answer any questions, give us a call on 0800 772 0000</h1>
                </div>

                <div className='flex justify-center items-center py-12'>
                    <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png" alt="Review" className='w-[500px]' />
                </div>

                <div className="borderline w-full mt-3 h-[1px]"></div>

                <div class="w-full px-12">
                    <div className=''>
                        <h1 className='text-3xl font-sans font-bold text-center py-9 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Benefits Of <span className='text-3xl font-sans font-bold border-b-4 border-yellow-300'> Switching To Tamar </span> VoIP </h1>
                    </div>
                    <div class="flex flex-col gap-4 ">
                        <div className='flex w-full '>
                            <div className='w-[20%] flex justify-center items-start'>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-2.png" alt="first" className='w-36' />
                            </div>
                            <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">Cost Savings:</h5>
                                <p class="mb-3 text-2xl leading-10 font-sans font-thin">Say goodbye to expensive phone bills. With VoIP, calls are transmitted over the internet, eliminating the need for traditional phone lines and reducing costs significantly. Not only will you save money over traditional phone systems, you’re future proofing your business by choosing the solution for the ISDN switch off.</p>
                            </div>

                        </div>
                        <div className='flex w-full '>
                            <div className='w-[20%] flex justify-center items-start '>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-1.png" alt="second" className='w-36' />
                            </div>
                            <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">Flexibility:</h5>
                                <p class="mb-3 text-2xl leading-10 font-sans font-thin">Work from anywhere, at any time, with our flexible VoIP solutions. Whether you're in the office, on the road, or working remotely, you can access your VoIP phone system from any internet-connected device, ensuring you never miss an important call or message. Whether you’re a team of 1 or an office of 50, our VoIP solutions offer ultimate flexibility as you grow your business.</p>
                            </div>
                        </div>
                        <div className='flex w-full '>
                            <div className='w-[20%] flex justify-center items-start '>
                                <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-3.png" alt="third" className='w-36' />
                            </div>
                            <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">Reliability:</h5>
                                <p class="mb-3 text-2xl leading-10 font-sans font-thin">Count on our VoIP phone systems for reliable and crystal-clear communication. All you need is a good internet connection and your new VoIP phone will work to the same high standards our customers are used to getting with Tamar Business Numbers. We’re a network provider in our own right, not a reseller, so you’re putting reliability at the forefront of your business comms by cutting out any obstacles.</p>
                            </div>
                        </div>
                        <div className='text-center mb-4'>
                            <button className="message py-2 px-5 text-lg font-sans font-semibold">Choose Your Number</button>
                        </div>
                    </div>
                </div>

                <div className="borderline w-full mt-4 h-[1px]"></div>

                <div className='px-48 py-8 space-y-5'>
                    <h2 className='text-5xl text-center font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]'>Frequently Asked Questions</h2>
                    <Accordion />
                </div>

                <div className='flex justify-center items-center py-12'>
                    <img src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png" alt="Review" className='w-[500px]' />
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
        </div>
    )
}

export default Voip