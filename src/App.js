import './App.css';
import FormW from './components/Form';
import { Container, Button } from 'react-bootstrap'
import promo from './assets/1.jpg'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

function App() {
  return (
    <Container>

      <h1 id='h1' className='text-center m-3 castor'>THE HOT CASTOR OIL HAIR MASK RECIPE FOR HAIR GROWTH</h1>
      <p id='bonus' className='text-center m-3'>+ BONUS Essential Oil Recipe!</p>

      <div id='hero' className='d-flex flex-md-row flex-sm-column align-items-center'>

        <div id="formSection" className= 'col-md-7 col-sm-12 col-xs-12'><img className='img-fluid' src={promo} alt='promo'/></div>
        <FormW />

      </div>
        <div className='d-flex justify-content-center align-items-center m-5'>
          <div id='line'></div>
          <p className=' text-dark col-4 text-center'>Why Castor Oil?</p>
          <div id='line'></div>
        </div>

      <div id='oil' className='d-flex flex-md-row flex-sm-column align-items-center'>

        <div className='oil-text col-md-6 col-sm-12 col-xs-12'>
          <p>Touted as the best oil to <b>stimulate hair growth</b> since Ancient Egyptian times, castor oil was the legendary beauty secret of <b>Queen Cleopatra</b> herself. </p>
          <p>Castor oil on its own nourishes, improves circulation and reduces inflammation on the hair follicle helping to <b>reduce hair loss, relieve itchy scalp </b> and <b> grow your hair thick and strong.  </b> </p>
          <p>It's also the very best carrier oil! This is why you should always ensure your castor oil is:</p>
          <ul>
            <li>Highest quality &amp; 100% pure</li>
            <li>Certified organic </li>
            <li>Cold-pressed, hexane-free  extra-virgin</li>
            <li>Always bottled in glass</li>
          </ul>
          <p>Castor oil helps cells absorb, so you can upgrade your hair mask with the optional <b> 7 secret synergistic essential oils for hormones & hair </b> included in this recipe. This clinically practiced, patient-preferred, & scientifically supported method helps to drive nutrients deep into hair follicles – even for hair loss caused by <b> hormonal problems, alopecia, thyroid issues, Hashimoto’s, menopause, and more. </b></p>
        </div>

        <div  className='oil-text col-md-6 col-sm-12 col-xs-12'><img className='img-fluid' src='https://cdn05.zipify.com/G--KdKEwiGyfuGavjxMjPcCRf4Y=/fit-in/1080x0/44f66d04014d4502863c1fa63ad7b463/cosmetic.png' alt='promo'/></div>

      </div>
      <img className='img-fluid' src='https://cdn05.zipify.com/aVGhiDMaiNqImPpqveiY2dy7-RE=/fit-in/2048x0/895d96f24eaf4dcab5310cc544a05cd1/dream-hair-benefit-bullets.jpg' />
      <h2 className='text-center mt-5'>ENTER YOUR EMAIL NOW!</h2>
      <p className='text-center unlock'>To Unlock This Free, Less-mess, Simple Self-care Recipe For Natural Hair Growth.</p>
      <div className='text-center m-3'>
       <Button variant='success'  className='px-5 py-3'  href="#formSection" >Get it NOW!</Button>
      </div>
      <div className='text-center m-3'>
        <img className='img-fluid' width='150px' src='https://cdn05.zipify.com/Q1AEnhd3irxyGsRdtLKhSZVWiKY=/fit-in/2048x0/4afac8dd831844d992f2a3431ac40819/6ab2bd-full.png'  />
      </div>
      <p className='text-center inquiry'>For all general inquiries, please contact us at <a href='mailto:care@drmarisol.com'>care@drmarisol.com</a></p>
      <div className='text-center m-3 mt-5'>
        <a href="https://www.facebook.com/queenofthethrones/"  target="_blank"><FaFacebook id="facebook" /></a>
         <a href="  https://www.youtube.com/user/marisolnd"  target="_blank"><FaYoutube  id="youtube"/></a>
         <a  href="https://www.instagram.com/queenofthethrones/"  target="_blank"><FaInstagram id="instagram" /></a>
      </div>

      <p className='text-center mt-5'>©2020 Copyright. All rights reserved</p>
  </Container>
  );
}

export default App;
