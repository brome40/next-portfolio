import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { SocialIconWrapper } from './ui/SocialIconWrapper'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href='mailto:bmrome01@gmail.com'>
          <MagicButton
            title='Let&apos;s get in touch'
            icon={<FaLocationArrow/>}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Ben Rome</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(({ id, img, link }) => (
            <SocialIconWrapper key={id} link={link}>
              <img src={img} alt={id.toString()} width={20} height={20}/>
            </SocialIconWrapper>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
