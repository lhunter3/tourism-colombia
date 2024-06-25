

export function HeroComponent(){
    return(
        <div className="relative aspect-ratio-16-9 -z-30">
            <img className="w-screen object-fill" src="https://placehold.co/1920x1080" alt="Scenic view of a coastal area with lush greenery and a beautiful sunset" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                <div className="text-center text-brand-white p-4 border border-brand-white max-w-lg">
                    <h1 className="text-2xl md:text-4xl font-bold">Colombia, the country of beauty,</h1>
                    <p className="text-lg md:text-2xl">invites you to explore each of its corners.</p>
                </div>
                <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-brand-pink text-brand-white text-sm md:text-lg font-bold rounded">Find out</button>
            </div>
        </div>
    )
}