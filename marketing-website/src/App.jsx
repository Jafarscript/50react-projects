import {Hero,
  Service,
  Subscribe,
  SpecialOffers,
  SuperQuality,
  CustomerReviews,
  Footer,
  PopularProducts} from './sections'

import Nav from './components/Nav'

  const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b w-full">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App