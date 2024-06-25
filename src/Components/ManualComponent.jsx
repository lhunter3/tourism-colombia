import React from 'react';

export function ManualComponent(){
    return(

        <section className="bg-brand-gray py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Colombian Manuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="https://placehold.co/300x400" alt="Manual 1" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">An Illustrated Handbook for Magicians</h3>
            </div>
            <div>
              <img src="https://placehold.co/300x400" alt="Manual 2" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">An Illustrated Handbook for Nature</h3>
            </div>
            <div>
              <img src="https://placehold.co/300x400" alt="Manual 3" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">An Illustrated Handbook for Culture</h3>
            </div>
          </div>
        </div>
      </section>
    )
}