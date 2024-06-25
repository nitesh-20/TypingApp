import React from 'react';

// Shared Tailwind CSS classes
const primaryNavClasses = "flex items-center justify-between p-4 bg-[#0EF4FF] text-primary-foreground h-14";
const linkClasses = "hover:text-secondary";

const Navbar = () => {
    return (
        <nav className={primaryNavClasses}>
            <div className="flex items-center">
                <img src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">TypeGame</span>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className={linkClasses}>Home</a>
                <a href="#" className={linkClasses}>Profile</a>
                <a href="#" className={linkClasses}>About</a>
            </div>
            <div>
                <a href="#" className={`text-secondary ${linkClasses}`}>Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
