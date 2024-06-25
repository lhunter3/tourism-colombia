
export function FestivalComponent(){
    return(
        <section className="bg-brand-pink text-white py-12"
        style={{
          backgroundImage: `url('public/110.jpg')`,
          backgroundBlendMode: "multiply",
          backgroundSize: 'fill',
          backgroundPosition: 'top',
          backgroundAttachment: 'scroll',
      }}
      
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Fairs and Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="https://placehold.co/300x200" alt="Fair 1" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">The Vallenato Festival</h3>
            </div>
            <div>
              <img src="https://placehold.co/300x200" alt="Fair 2" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">The Carnival of Barranquilla</h3>
            </div>
            <div>
              <img src="https://placehold.co/300x200" alt="Fair 3" className="w-full rounded" />
              <h3 className="text-xl font-bold mt-4">The Flower Festival</h3>
            </div>
          </div>
          <button className="mt-8 bg-brand-blue text-white px-6 py-2 rounded">View More</button>
        </div>
      </section>
    )
}