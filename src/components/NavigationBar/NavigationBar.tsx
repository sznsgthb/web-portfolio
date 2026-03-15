import { useState } from "react";
import { TbMenu2, TbX  } from "react-icons/tb";
import { useAdaptiveTriggers } from '../../useAdaptiveTriggers';
import { parallaxConfig } from '../../parallaxConfig';
import { Pages } from '../../types';
import type { NavigationBarProps } from "../../types";
import './NavigationBar.css';

function NavigationBar({ scrollToPage } : NavigationBarProps ) {
  const [open, setOpen] = useState(false);
      const width = useAdaptiveTriggers({})

    const handleClick = (page: Pages) => {
        const offset = parallaxConfig[width][page].offset;
        scrollToPage(offset); // scrollToPage blijft number
        setOpen(false);
    };

    const navItems = [
        { label: "Vision", page: Pages.intro },
        { label: "Portfolio", page: Pages.portfolio },
        { label: "Tools", page: Pages.tools },
        { label: "About", page: Pages.about},
        { label: "Contact", page: Pages.contact },
    ];

    return (
        <nav className="navbar">
        {/* className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-white/30 border-b border-white/20" */}
            <div className="navbar-container">
                {/* className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4" */}

                {/* HOME */}
                <button
                    onClick={() => handleClick(Pages.home)}
                    className="navbar-home"
                >
                    Home
                </button>

                {/* DESKTOP MENU */}
                <ul className="desktop-menu" >
                
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <button
                                onClick={() => handleClick(item.page)}
                                className="desktop-link"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* MOBILE BUTTON */}
                <button
                    className="mobile-toggle"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? <TbX /> : <TbMenu2 />}
                </button>

            </div>

                {/* MOBILE MENU*/}
            {open && (
                <div className="mobile-menu" >
                    <ul className="mobile-list" >
                        {navItems.map((item) => (
                        <li key={item.label}>
                            <button
                                onClick={() => handleClick(item.page)}
                                className="mobile-link"
                            >
                                {item.label}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavigationBar;