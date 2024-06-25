

export function TravelComponent(){
    return(
        <section className="bg-brand-blue text-white py-12"
        style={{
          backgroundImage: `url('public/texture.jpg')`,
          backgroundBlendMode: 'luminosity',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
      }}
      >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How can you get to Colombia?</h2>
            <img src="https://placehold.co/800x400" alt="Map" className="w-full rounded" />
          </div>
        </section>
    )
}