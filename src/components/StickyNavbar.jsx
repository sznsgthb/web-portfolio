import React from 'react';
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Card,
} from '@material-tailwind/react';
import { Link } from 'react-scroll';
 
function StickyNavbar({ scrollToPage }) {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
 
    const navList = (
        <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
          <Typography as='li' variant='small' className='p-1 font-normal'>
            <span onClick={() => scrollToPage(0.9)} className='flex items-center cursor-pointer'>
              Vision
            </span>
          </Typography>
          <Typography as='li' variant='small' className='p-1 font-normal'>
            <span onClick={() => scrollToPage(1.9)} className='flex items-center cursor-pointer'>
              Portfolio
            </span>
          </Typography>
          <Typography as='li' variant='small' className='p-1 font-normal'>
            <span onClick={() => scrollToPage(4.4)} className='flex items-center cursor-pointer'>
              Tools
            </span>
          </Typography>
          <Typography as='li' variant='small' className='p-1 font-normal'>
            <span onClick={() => scrollToPage(5.4)} className='flex items-center cursor-pointer'>
              About
            </span>
          </Typography>
          <Typography as='li' variant='small' className='p-1 font-normal'>
            <span onClick={() => scrollToPage(6.4)} className='flex items-center cursor-pointer'>
              Contact
            </span>
          </Typography>
        </ul>
      );
 
    return (
        <div>
            <Navbar className='navbar fixed top-0 z-[9999] h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4'>
                <div className='flex items-center justify-between text-blue-gray-900'>
                   <Typography as='li' variant='small' className='p-1 font-normal'>
                        <span
                            onClick={() => scrollToPage(0)}
                            className='flex items-center cursor-pointer'
                        >
                            Home
                        </span>
                    </Typography>
                     <div className='flex items-center gap-4'>
                        <div className='mr-4 hidden lg:block'>{navList}</div>
                        <div className='flex items-center gap-x-1'>
                        </div>

                    <IconButton
                        variant='text'
                        className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            className='h-6 w-6'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        ) : (
                            <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        )}
                    </IconButton>
            </div>

            </div>
                <Collapse open={openNav}>
                     {navList}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;