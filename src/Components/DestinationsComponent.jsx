import React from "react";

export function DestinationsComponent(){
    return (
        <div className="bg-brand-gray"
        
      
        
        
        
        >
            <header className="py-16">
                <h1 className="text-center md:text-4xl text-3xl font-bold text-brand-pink">Destinations in Colombia</h1>
                <p className="text-center text-gray-600 mt-2">In Colombia, rhythm runs through our veins. It's a country that will thrill you with a huge range of destinations catering for all tastes.</p>
            </header>
            <main className="px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="relative group col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2">
                        <img src="https://placehold.co/600x600" alt="Smiling women in traditional Colombian attire" className="w-full h-full object-cover rounded-lg" />
                        {/* Adjust the opacity of this div on hover to darken the image */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-brand-white">Cartagena de Indias</h2>
                            <p className="text-brand-white">Discover Cartagena de Indias, a jewel of world heritage. Cartagena is a city that is located on the shores of the Caribbean Sea, in the northwestern part of the South American continent. If you are...</p>

                        </div>
                    </div>
                    

                    <div className="relative group">
                        <img src="https://placehold.co/300x300" alt="Smiling women in traditional Colombian attire" className="w-full h-full object-cover rounded-lg" />
                        {/* Adjust the opacity of this div on hover to darken the image */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-brand-white">Bogotá</h2>
                        </div>
                    </div>

                    <div className="relative group">
                        <img src="https://placehold.co/300x300" alt="Smiling women in traditional Colombian attire" className="w-full h-full object-cover rounded-lg" />
                        {/* Adjust the opacity of this div on hover to darken the image */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-brand-white">San Andrés Island</h2>
                        </div>
                    </div>

                    <div className="relative group">
                        <img src="https://placehold.co/300x300" alt="Smiling women in traditional Colombian attire" className="w-full h-full object-cover rounded-lg" />
                        {/* Adjust the opacity of this div on hover to darken the image */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-brand-white">Medellín</h2>
                        </div>
                    </div>

                    <div className="relative group">
                        <img src="https://placehold.co/300x300" alt="Smiling women in traditional Colombian attire" className="w-full h-full object-cover rounded-lg" />
                        {/* Adjust the opacity of this div on hover to darken the image */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-brand-white">Cali</h2>
                        </div>
                    </div>

                    

                
                </div>
                <div className="text-center mt-8 pb-8">
                    <button className="bg-brand-blue text-brand-white text-sm py-3 px-8 rounded-md">VIEW MORE</button>
                </div>
            </main>
        </div>
    )
}