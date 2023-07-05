"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession, signIn, getProviders } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const OnBoardComponent = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    })

    const handleOnChangeValue = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'Email') {
            setEmail(value);
        } else if (name === 'Password') {
            setPassword(value);
        }
    };

    const handleToggleEye = () => {
        setToggleEye(!toggleEye);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

                // Save the token in a cookie
                Cookies.set('jwtToken', token, { expires: 7 });

                // Registration successful, handle success scenario
                toast.success('🦄 Account Created Successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                router.push('/login');
            } else {
                const data = await response.json();
                console.error(data.error);
                toast.error(data.error, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error(error);
        }
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
                            src="/assests/OnBoard_1.svg"
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
                                    value={email}
                                    onChange={handleOnChangeValue}
                                    className="block min-h-[auto] w-full rounded border-0 bg-white shadow-lg px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200 font-semibold text-gray-500"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleOnChangeValue}
                                    className="block min-h-[auto] w-full rounded border-0 bg-white shadow-lg px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear font-semibold text-gray-500"
                                    id="exampleFormControlInput3"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type={toggleEye ? 'text' : 'password'}
                                    name="Password"
                                    value={password}
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
                                        className="text-blue-600 font-semibold transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-gradient-to-r from-rose-700 to-pink-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >
                                Register
                            </button>
                        </form>

                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                        </div>

                        {providers &&
                            Object.values(providers).map((providers) => (
                                <div
                                    key={providers.name}
                                    onClick={() => signIn(providers.id)}
                                    className="mb-3 flex gap-2 font-semibold glassmorphism w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    <Image
                                        src={"/assests/Google_Logo.png"}
                                        height={30}
                                        width={30}
                                        className="rounded-full object-contain"
                                    />
                                    Continue with Google
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnBoardComponent;
