import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Footer from '../components/Footer';

function Blog() {
  return (
    <>
      <div className='hero-section'>
        <Header />
        <Banner heading="OUR BLOG" />
      </div>

      <section className='recent-blog'>
        <div className="container">
          <h2>Recent Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>

          <div className='row mt-5 g-4'>

            <Card image="/img_4.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />

            <Card image="/img_2.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />

            <Card image="/img_3.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />

            <Card image="/img_4.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />

            <Card image="/img_2.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />

            <Card image="/img_3.jpg" date="Jan 20th, 2019" title="Art Gossip by Mike Charles" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt." />
          </div>
        </div>


        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-4">
          <ul className="pagination flex-wrap">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </section>

      <Footer/>

    </>
  )
}

export default Blog