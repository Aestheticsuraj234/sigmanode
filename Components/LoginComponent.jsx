"use client";
import React, { useState, useEffect ,useContext} from 'react';
import Image from 'next/image';
import { useSession, signIn, getProviders } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '@/context/globalContext';
import Cookies from 'js-cookie';

const LoginComponent = () => {
    const {loginPassword,loginEmail,handleFormSubmit,handleOnChangeValue} = useContext(GlobalContext)
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const router = useRouter();
    const [toggleEye, setToggleEye] = useState(true);

    useEffect(() => {
    const setUpProvider = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        setUpProvider();
    }, []);

    useEffect(() => {
        if (session) {
            router.push('/');
        }
    }, [session]);

    useEffect(()=>{
        if(Cookies.get("authToken")){
            router.push('/')
        }
    },[])

   

    const handleToggleEye = () => {
        setToggleEye(!toggleEye);
    };

    
    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    {/* Left section */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <Image
                            src="/assests/login_2.svg"
                            className="object-contain"
                            width={700}
                            height={700}
                            alt="Phone image"
                        />
                    </div>

                    {/* Right section */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleFormSubmit}>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    name="Email"
                                    value={loginEmail}
                                    onChange={handleOnChangeValue}
                                    className="block min-h-[auto] w-full rounded border-0 bg-white shadow-lg px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200 font-semibold text-gray-500"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type={toggleEye ? 'text' : 'password'}
                                    name="Password"
                                    value={loginPassword}
                                    onChange={handleOnChangeValue}
                                    className="block min-h-[auto] w-full rounded border-0 bg-white shadow-lg px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear font-semibold text-gray-500"
                                    placeholder="Password"
                                />
                                <div
                                    onClick={handleToggleEye}
                                    className="absolute inset-y-0 hover:bg-gray-200 rounded-full right-0 px-3 py-1.5 flex items-center justify-center text-sm leading-5"
                                >
                                    {toggleEye ? (
                                        <AiFillEyeInvisible size={18} className="text-gray-500" />
                                    ) : (
                                        <AiFillEye size={18} className="text-gray-500" />
                                    )}
                                </div>
                            </div>

                            <div className="mb-6 flex items-center justify-between">
                                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                                    <a
                                        href="#!"
                                        onClick={() => router.push("/onBoard")}

                                        className="text-blue-600 font-semibold transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                                    >
                                        Don't have an account
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-gradient-to-r from-rose-700 to-pink-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >
                                Login
                            </button>
                        </form>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginComponent;
