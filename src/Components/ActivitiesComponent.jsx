import React, { useEffect, useRef, useState } from "react";
import SwipeableViews from "react-swipeable-views";

export function ActivitiesComponent2(){

    const cardContainerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (cardContainerRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = cardContainerRef.current;
                // Check if we've reached the end of the container, if so, start from the beginning
                const newScrollPosition = scrollLeft + clientWidth >= scrollWidth ? 0 : scrollLeft + 1;
                cardContainerRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
            }
        }, 50); // Adjust the interval and scroll increment as needed

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    
    return(

        <section className="bg-red-600 text-brand-white py-12 flex justify-center items-center">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What can you do in Colombia?</h2>
                <div className="overflow-x-auto flex justify-center">
                    <div className="flex space-x-8 px-4" id="cardContainer" ref={cardContainerRef}>
                        {/* Cards go here */}


                        <div className="flex-shrink-0 w-60">
                            <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                <img src="https://placehold.co/100x100" alt="Activity 1" className="w-full rounded" />
                                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-600 text-xl font-bold">
                                    Explore Bogotá
                                </p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-60">
                            <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                <img src="https://placehold.co/100x100" alt="Activity 1" className="w-full rounded" />
                                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-600 text-xl font-bold">
                                    Visit Tayrona Park
                                </p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-60">
                            <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                <img src="https://placehold.co/100x100" alt="Activity 1" className="w-full rounded" />
                                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-600 text-xl font-bold">
                                    Find the Lost City
                                </p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-60">
                            <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                <img src="https://placehold.co/100x100" alt="Activity 1" className="w-full rounded" />
                                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-600 text-xl font-bold">
                                    The Gold Museum
                                </p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-60">
                            <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                <img src="https://placehold.co/100x100" alt="Activity 1" className="w-full rounded" />
                                <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-600 text-xl font-bold">
                                    Explore the Coffee Culture
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>


    )
}


export function ActivitiesComponent() {
    // Define your cards data or any other content you want to display in the swipeable view
    const cards = [
        {
            img: "https://placehold.co/100x100",
            title: "Explore Bogotá",
        },
        {
            img: "https://placehold.co/100x100",
            title: "Visit Tayrona Park",
        },
        {
            img: "https://placehold.co/100x100",
            title: "Find the Lost City",
        },
        {
            img: "https://placehold.co/100x100",
            title: "The Gold Museum",
        },
        {
            img: "https://placehold.co/100x100",
            title: "Explore the Coffee Culture",
        },
    ];


       // Step 1: Add State for Current Index
       const [currentIndex, setCurrentIndex] = useState(0);

       // Step 2: Create Navigation Functions
       const goToNextCard = () => {
           setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
       };
   
       const goToPrevCard = () => {
           setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
       };

       useEffect(() => {
        const interval = setInterval(goToNextCard, 3000); // Change card every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [cards.length]);
       


    return (
        <section className="bg-brand-pink text-brand-white py-12 flex justify-center items-center"
        
        style={{
            backgroundImage: `url('public/110.jpg')`,
            backgroundBlendMode: "multiply",
            backgroundSize: 'fill',
            backgroundPosition: 'top',
            backgroundAttachment: 'scroll',
        }}
        
        >
            <div className="container mx-auto text-center ">
                <h2 className="text-3xl font-bold mb-8">What can you do in Colombia?</h2>

                <div className="relative flex items-center justify-center h-full">
                    {/* Left Button */}
                    <button onClick={goToPrevCard} className="hidden md:flex left-0 z-10 ml-2 lg:ml-10 bg-black text-brand-white p-2 rounded-lg shadow-lg hover:bg-gray-600">
                       <i className="fas fa-arrow-left"></i>
                    </button>

                <SwipeableViews enableMouseEvents index={currentIndex} onChangeIndex={setCurrentIndex}>
                    {cards.map((card, index) => (
                        <div key={index} className="flex justify-center card transform transition-all duration-300">
                            <div className="flex-shrink-0 w-60">
                                <div className="bg-white rounded-lg overflow-hidden text-center relative">
                                    <img src={card.img} alt={`Activity ${index + 1}`} className="w-full rounded" />
                                    <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-brand-white text-xl font-bold">
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwipeableViews>

                {/* Right Button */}
                <button onClick={goToNextCard} className="hidden md:flex right-0 z-10 mr-2 lg:mr-10 bg-black text-brand-white p-2 rounded-lg shadow-lg hover:bg-gray-600">
                    <i className="fas fa-arrow-right"></i>
                </button>

              

               </div>

                <div className="flex  justify-center items-center space-x-2 pt-4">
                    {cards.map((_, index) => (
                        <span key={index} className={`block h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-950'}`}></span>
                    ))}
                </div>
                
            </div>
        </section>
    );
}

