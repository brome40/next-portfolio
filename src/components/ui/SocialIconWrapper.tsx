'use client'
import React from "react"

export const SocialIconWrapper = ({ children, link }: { children: React.ReactNode, link:string }) => {
  return (
    <div
      className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
      onClick={() => window.open(link, '_blank')}>
      {children}
    </div>
  );
}
