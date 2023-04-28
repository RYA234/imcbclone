import React from 'react'
import Link from "next/link";

export default function NavbarItem({title,param}) {
  return (
    <div className={`font-semibold p-2`}>
           <Link href={`/?genre=${param}`}>
                {title}
           </Link>    
    </div>
  )
}
