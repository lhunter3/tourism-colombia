import React from "react";

export function FooterComponent() {
    return(
             
      <footer className="bg-brand-blue text-white py-12"
     
      
      >
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Where to Go</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Regions</a></li>
              <li><a href="#" className="hover:underline">Cities</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">What to Do</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Activities</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Festivals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Travel Tips</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Health</a></li>
              <li><a href="#" className="hover:underline">Safety</a></li>
              <li><a href="#" className="hover:underline">Weather</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Meetings</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Conferences</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Venues</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p>&copy; 2023 Colombia Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
   
    )
}