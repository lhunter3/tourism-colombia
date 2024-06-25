import React, { useState, useEffect } from 'react';



export function NavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Logic to determine if scrolling up or down

            setIsAtTop(window.scrollY <= 10);
            
            setIsScrolled(currentScrollY < lastScrollY || currentScrollY <= 0);
            setLastScrollY(currentScrollY); // Update the last scroll position
            if (isOpen) {
                setIsOpen(false); // Close the collapsible menu on scroll
            }
            
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    const navStyles = {
        transition: 'top 300ms', // Smooth transition for the top property
        top: isScrolled ? '0' : '-50%' , // Control visibility with top property
        position: isScrolled && isAtTop ? 'relative' : '' || isScrolled  && !isAtTop? 'fixed ' : '',
    };

  
    return (
        <nav style={navStyles} className={`bg-brand-blue p-4 flex items-center justify-between z-50 ${isScrolled ? 'fixed top-0 left-0 right-0' : ''}`}>
                <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="Logo with CO and Colombia text" className="h-10 w-10" />
            </div>
            <div className="hidden md:flex space-x-8 text-brand-white text-sm font-bold">
                <a href="#" className="hover:underline">WHERE TO GO</a>
                <a href="#" className="hover:underline">WHAT TO DO</a>
                <a href="#" className="hover:underline">PRACTICAL INFORMATION</a>
                <a href="#" className="hover:underline">BLOG</a>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-brand-white">
                <i className="fas fa-search"></i>
                <i className="fas fa-user-circle"></i>
                <div className="flex items-center space-x-1">
                    <span>EN</span>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-brand-white focus:outline-none">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-brand-blue text-brand-white text-sm font-bold flex flex-col items-center space-y-4 py-4">
                    <a href="#" className="hover:underline">WHERE TO GO</a>
                    <a href="#" className="hover:underline">WHAT TO DO</a>
                    <a href="#" className="hover:underline">PRACTICAL INFORMATION</a>
                    <a href="#" className="hover:underline">BLOG</a>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-user-circle"></i>
                        <div className="flex items-center space-x-1">
                            <span>EN</span>
                            <i className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

