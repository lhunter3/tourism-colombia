

export function InfoComponent(){
    return(
        <section className="bg-brand-gray py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-brand-blue text-3xl font-bold mb-8">What do you need to know if you are going to Colombia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <i className="fas fa-info-circle text-4xl text-brand-blue"></i>
              <h3 className="text-xl font-bold mt-4">About Colombia</h3>
            </div>
            <div>
              <i className="fas fa-cloud-sun text-4xl text-brand-blue"></i>
              <h3 className="text-xl font-bold mt-4">Weather</h3>
            </div>
            <div>
              <i className="fas fa-heartbeat text-4xl text-brand-blue"></i>
              <h3 className="text-xl font-bold mt-4">Health and Vaccines</h3>
            </div>
            <div>
              <i className="fas fa-passport text-4xl text-brand-blue"></i>
              <h3 className="text-xl font-bold mt-4">Visas and Customs</h3>
            </div>
          </div>
        </div>
      </section>
    )
}