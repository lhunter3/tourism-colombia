import React from "react";


export function RegionsComponent(){
    return(

        <div className="bg-brand-blue pb-8"
        style={{
            backgroundImage: `url('public/texture.jpg')`,
            backgroundBlendMode: 'luminosity',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
        }}
         >

        
        <div className="text-center">
        <div className="py-8">
            <h1 className="md:text-2xl text-xl font-bold text-brand-white">FIND THE ENCANTO OF COLOMBIA</h1>
            <div className=" bg-brand-pink text-brand-white py-2 px-4 mt-2 inline-block text-lg font-bold md:py-4 md:px-60">ACROSS OUR REGIONS</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-8">
            <div className="p-4 rounded-lg w-full md:w-80 bg-transparent flex flex-col items-center">
                <img src="https://placehold.co/280x370" alt="People enjoying traditional Colombian festivities" className="rounded-t-lg w-full"/>
                <h2 className="text-xl font-bold mt-4 text-brand-white">DESTINATIONS WITH ALLURING TRADITIONS</h2>
                <p className="mt-2 text-brand-white">Art, festivities, handicrafts, music and dances will show you the unique charm of Colombia.</p>
                <div className="flex-grow"></div>
                <button className="bg-brand-pink text-brand-white py-2 px-4 mt-4 rounded">SEE MORE</button>
            </div>
            <div className="p-4 rounded-lg w-full md:w-80 bg-transparent flex flex-col items-center">
                <img src="https://placehold.co/280x370" alt="Person exploring the natural beauty of Colombia" className="rounded-t-lg w-full"/>
                <h2 className="text-xl font-bold mt-4 text-brand-white">THE SECRETS BEHIND COLOMBIA’S ENCANTO</h2>
                <p className="mt-2 text-brand-white">Travel through a country with charm in every corner, from its traditions, through its nature and flavors, to its amazing experiences.</p>
                <div className="flex-grow"></div>
                <button className="bg-brand-pink text-brand-white py-2 px-4 mt-4 rounded">SEE MORE</button>
            </div>
            <div className="p-4 rounded-lg w-full md:w-80 bg-transparent flex flex-col items-center">
                <img src="https://placehold.co/280x370" alt="People hiking and enjoying the scenic views of Colombia" className="rounded-t-lg w-full"/>
                <h2 className="text-xl font-bold mt-4 text-brand-white">DESTINATIONS WITH EXPERIENCES THAT FILL YOUR HEART</h2>
                <p className="mt-2 text-brand-white">Ancestral wisdom and thousands of adventures await you in a country full of charm and movie-like scenery.</p>
                <div className="flex-grow"></div>
                <button className="bg-brand-pink text-brand-white py-2 px-4 mt-4 rounded">SEE MORE</button>
            </div>
        </div>
    </div>

    </div>
    )
}