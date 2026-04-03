import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <div className='hero-section'>
        <Header />
        <Banner heading="CONTACT US" />
      </div>

      <section className='form-section'>
        <div className='container py-5'>
          <div className='row g-5'>

      
            <div className='col-12 col-md-8'>
              <form>

                <div className='mb-3'>
                  <label className='form-label fw-semibold'>Full Name</label>
                  <input type="text" className='form-control' placeholder='Full Name' />
                </div>

                <div className='mb-3'>
                  <label className='form-label fw-semibold'>Email</label>
                  <input type="email" className='form-control' placeholder='Email Address' />
                </div>

                <div className='mb-3'>
                  <label className='form-label fw-semibold'>Subject</label>
                  <input type="text" className='form-control' placeholder='Enter Subject' />
                </div>

                <div className='mb-3'>
                  <label className='form-label fw-semibold'>Message</label>
                  <textarea className='form-control' rows="5" placeholder="Say hello to us"></textarea>
                </div>

                <button type="submit" className='btn btn-primary px-4 py-2'>
                  Send Message
                </button>

              </form>
            </div>

          
            <div className='col-12 col-md-4'>
              <h5 className='fw-bold mb-4'>CONTACT INFO</h5>

              <div className='mb-4'>
                <h6 className='fw-bold'>Address</h6>
                <p className='text-muted'>203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>

              <div className='mb-4'>
                <h6 className='fw-bold'>Phone</h6>
                <p className='text-primary'>+1 232 3235 324</p>
              </div>

              <div className='mb-4'>
                <h6 className='fw-bold'>Email Address</h6>
                <p className='text-primary'>youremail@domain.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact