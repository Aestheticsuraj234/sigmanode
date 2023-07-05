"use client"
import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { CgFeed } from "react-icons/cg"
import { MdOutlineExplore } from "react-icons/md"
import { RiDraftLine } from "react-icons/ri"
import { BsBookmarkHeart } from "react-icons/bs"
import { AiOutlineSearch } from 'react-icons/ai'
import { GrPersonalComputer } from "react-icons/gr"
import { TfiMoreAlt } from "react-icons/tfi"
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const { handleToggleMenu } = useContext(GlobalContext)
    return (
        <>
            <div className="flex absolute top-0 bottom-0 left-0">
                <div className="flex z-50 flex-col h-screen p-3  glassmorphism shadow w-60">
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Link href={"/"}>
                                <Image
                                    src={"/assests/sigmaRedLogo.svg"}
                                    alt="Business Logo"
                                    width={160}
                                    height={160}
                                    className="object-contain"
                                />
                            </Link>
                            <div onClick={handleToggleMenu} className="rounded-full cursor-pointer py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
                                <AiOutlineClose className="text-2xl" />
                            </div>

                        </div>

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <CgFeed className="text-3xl text-gray-700" />
                                        <span className="font-bold text-gray-700 ">My Feed</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <MdOutlineExplore className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">Explore</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <BsBookmarkHeart className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">Bookmark</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <RiDraftLine className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">Draft</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <GrPersonalComputer className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">Hackathon</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <AiOutlineSearch className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">Search</span>
                                    </a>
                                </li>
                                <li className="rounded-lg hover:bg-white/70">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <TfiMoreAlt className="text-3xl text-gray-700" />
                                         <span className="font-bold text-gray-700 ">More</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}