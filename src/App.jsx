import React, { useState } from 'react';

import './App.css'
import { NavComponent } from './Components/NavComponent'
import { HeroComponent } from './Components/HeroComponent';
import { FooterComponent } from './Components/FooterComponent';
import { RegionsComponent } from './Components/RegionsComponent';
import { DestinationsComponent } from './Components/DestinationsComponent';
import { ActivitiesComponent } from './Components/ActivitiesComponent';
import { ManualComponent } from './Components/ManualComponent';
import { TravelComponent } from './Components/TravelComponent';
import { FestivalComponent } from './Components/FestivalComponent';
import { InfoComponent } from './Components/InfoComponent';
import { TestimonialComponent } from './Components/TestimonialComponent';

function App() {

  return (

    <div>

      {/* Nav Section */}
      <NavComponent />

      {/* Hero Section */}
      <HeroComponent />

      {/* Regions Section */}
      <RegionsComponent />

      {/* Destinations Section */}
      <DestinationsComponent />

      {/* Activities Section */}
      <ActivitiesComponent />

      {/* Manuals Section */}
      <ManualComponent />

      {/* Testimonials Section */}
      <TestimonialComponent />

      {/* Travel Section */}
      <TravelComponent />

      {/* Fairs and Festivals Section */}
      <FestivalComponent />

      {/* Information Section */}
      <InfoComponent />

      {/* Foooter Section */}
      <FooterComponent />

    </div>

  )
}

export default App
