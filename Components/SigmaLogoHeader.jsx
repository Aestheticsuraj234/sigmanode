import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const SigmaLogoHeader = () => {
  return (
    <nav className="flex-center items-center flex w-full  pt-3  ">
    <div className="flex flex-center">
      <Link href={"/"}>
        <Image
          src={"/assests/sigmaRedLogo.svg"}
          alt="Business Logo"
          width={160}
          height={160}
          className="object-contain"
        />
      </Link>
     
    </div>
    </nav>
  )
}

export default SigmaLogoHeader