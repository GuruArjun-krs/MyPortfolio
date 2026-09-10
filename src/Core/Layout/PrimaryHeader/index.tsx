import React from 'react'
import { HeaderTab } from '../../Interface';

const PrimaryHeader = () => {

  const scrollToSection = () => {
    const aboutSection = document.getElementById('main_wrapper');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='aura aura-dual text-primary-color rounded-full w-full flex justify-center'>
      <nav className='bg-white px-[20px] py-[10px] rounded-full flex gap-[20px]'>
        {HeaderTab.map((el) => (
          <a className='text-text-secondary font-primary' key={el.id} href={el.id}>
            {el.title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default PrimaryHeader