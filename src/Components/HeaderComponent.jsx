import React from 'react';

export function HeaderComponent(){

    return(
        <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://placehold.co/150x50" alt="Logo" className="h-12" />
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">Learn</a>
            <a href="#" className="hover:underline">Find Here</a>
            <a href="#" className="hover:underline">Explore</a>
          </nav>
        </div>
      </header>
    )
   
};