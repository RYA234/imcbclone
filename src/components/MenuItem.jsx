import React from 'react'
import Link from "next/link";

export default function MenuItem({title,address,Icon}) {
  return (
    <div>
        <Link href={address} className="mx-6 lg:mx-0 hover:text-amber-600">
            <Icon className="text-2xl sm:hidden mx-4"/>
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}
