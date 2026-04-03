import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className='hero-section'>
        <Header />
        <Banner heading="ABOUT HOMELAND" />
      </div>

      <section className='py-5 about'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 mb-4 mb-md-0'>
              <img src="/about.jpg" alt="Our Company" className='img-fluid' />
            </div>
            <div className='col-md-6 ps-md-5'>
              <h2 className='fw-bold ls-2 text-dark mb-3' style={{ letterSpacing: '2px' }}>OUR COMPANY</h2>
              <p className='text-secondary mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in cum odio.
              </p>
              <p className='text-muted lh-lg mb-4'>
                Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto,
                quos autem voluptate ea? Sunt laudantium fugiat, mollitia voluptate? Modi
                blanditiis veniam nesciunt architecto odit voluptatum tempore impedit magnam itaque natus!
              </p>
              <button className='btn btn-outline-dark px-4 py-2  d-block mx-auto mx-md-0'>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-body-secondary py-5'>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className='fw-bold mb-3' style={{ letterSpacing: '2px' }}>OUR AGENTS</h2>
            <p className='text-muted mx-auto' style={{ maxWidth: '620px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum
              pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis!
              Optio minima quibusdam, laboriosam.
            </p>
          </div>

         <div className="row g-4 mt-5">

            <Card image="/person_1.jpg" title="Megan Smith" subtitle="Real Estate Agent" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!" />

            <Card image="/person_2.jpg" title="Brooke Cagle" subtitle="Real Estate Agent" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptates culpa earum similique corrupti itaque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni!" />

            <Card image="/person_3.jpg" title="Philip Martin" subtitle="Real Estate Agent" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo." />
          </div>

        </div>
      </section>

      <Footer/>

    </>
  )
}

export default About