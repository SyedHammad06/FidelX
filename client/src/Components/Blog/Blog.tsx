import React from 'react';
import Img1 from '../../assets/Images/pic-3.jpg';
import Img2 from '../../assets/Images/pic-4.jpg';
import Img3 from '../../assets/Images/pic-5.jpg';
import Img4 from '../../assets/Images/pic-6.jpg';
import Img5 from '../../assets/Images/pic-7.jpg';
import Img6 from '../../assets/Images/pic-8.jpg';
import { Navbar } from '../../Containers/Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './Blog.scss';

interface Props {}

export const Blog: React.FC<Props> = () => {
  return (
    <div className='Blog'>
      <Navbar displayMenu={true} />
      <header className='Blog__header'>
        <h1 data-aos='fade-in'>Blog Section</h1>
      </header>
      <div className='Blog__section'>
        <div className='Blog__section-1' id='blog-1'>
          <h2 className='Blog__heading' data-aos='fade-in'>
            Why does your company need a website or an app?
          </h2>
          <div
            className='Blog__sub-section Blog__sub-section-1'
            data-aos='fade-right'
          >
            <div className='Blog__text'>
              Have you ever thought of expanding your business? Or getting that
              edge over your competitors to get on top? Then you must have
              surely thought of the possibility of getting a website for your
              business or enterprise. So here are some advantages that will come
              along with getting a website for your business.
              <br />
              <br />
              <b>1. Legitimacy</b> <br />
              If you’re running a business that is just starting out or if it is
              from a new market that has never been taped in before, you will be
              needing a website as your customers will surely be expecting it.
              This will act as a proof that business enterprise is legit and
              they will be able to gain more knowledge about business as well.
              Thus, it will help your business gain credibility.
            </div>
            <div className='Blog__image-container'>
              <img src={Img1} alt='not found' />
            </div>
          </div>
          <div
            className='Blog__sub-section Blog__sub-section-2'
            data-aos='fade-left'
          >
            <div className='Blog__image-container remove'>
              <img src={Img2} alt='not found' />
            </div>
            <div className='Blog__text'>
              <b>2. Recognition</b> <br />
              Your brand will start gaining recognition and possibly the first
              thing that would pop into people’s mind when they think of a
              certain product or a service. With really smart marketing
              strategies and with the help of SEO you can gain a lot of traction
              and this will put you in the map.
              <br />
              <br />
              <b>3. Loyal Customers</b> <br />
              “Loyalty is a two-way street” said by Harvey Specter is a very
              important life lesson we could follow in every aspect of life. As
              every successful businessperson has always said, the first few
              customers who trusted your brand stuck by your side are the most
              important people that will help in your journey to success. A
              website will help you connect better with your customers and over
              time they will start recommending your brand and thus you will
              surely gain more traction.
            </div>
          </div>
          <div
            className='Blog__sub-section Blog__sub-section-3'
            data-aos='fade-right'
          >
            <div className='Blog__text'>
              <b>4. Increased revenue</b> <br />
              With efficient marketing your business will eventually start
              gaining more popularity and will create a chance for you to
              increase your revenue by selling your services or products online.
              It will save you a lot of time as well.
              <br />
              <br />
              <b>5. Getting the right audience</b> <br />
              While the traditional marketing strategies are getting outdated
              and considering how much the marketing spectrum has evolved over
              the past decade, all business needs to adopt the new techniques
              that are being followed to up their game with the magic of digital
              marketing you can target your customers depending on age, gender
              and region. This will give you a great advantage in the long run.
            </div>
            <div className='Blog__image-container'>
              <img src={Img3} alt='not found' />
            </div>
          </div>
        </div>
        <hr className='Blog__horizontal-line' />
        <div className='Blog__section-2' id='blog-2'>
          <h2 className='Blog__heading' data-aos='fade-in'>
            Why great design matters !!!
          </h2>
          <div
            className='Blog__sub-section Blog__sub-section-1'
            data-aos='fade-left'
          >
            <div className='Blog__image-container'>
              <img src={Img4} alt='not found' />
            </div>
            <div className='Blog__text'>
              This is one of the most frequently asked questions by most of the
              people during the discussion of the web design. Well, the answer
              is a big “YES!” as long as the internet exists. A good design is
              more than just work of creative art. It is a medium to bring the
              businesses close to its customers and will help in the building of
              your brand image. Companies have realised the importance of a
              great design and the value it adds to their brand. So here we will
              be discussing about some of the advantages that will come along
              with it.
              <br />
              <br />
              <b>1. First Impression</b>
              <br />A really strong and aesthetically pleasing design will give
              a good first impression about your brand. This will help you build
              a strong customer trust. On the other hand, a poorly done website
              will make you lose that trust and will make it harder for your
              business to grow.
            </div>
          </div>
          <div
            className='Blog__sub-section Blog__sub-section-2'
            data-aos='fade-right'
          >
            <div className='Blog__text'>
              <b>2. Sets your brand apart</b>
              <br />
              As I have discussed earlier a good web design will make your brand
              stand out from your competitors and the people will more likely
              tend to remember your brand.
              <br />
              <br />
              <b>3. Welcoming environment</b>
              <br />
              An elegant and easy to navigate design will help your brand to
              give a more welcoming environment that will make the brand more
              likable. The simpler the navigation is the more satisfied will the
              customer from your services.
              <br />
              <br />
              <b>4. Stay up to date</b>
              <br />
              As we all now trends come and go, so it highly necessary to stay
              up to date by using the popular trendy designs which will impress
              the customers. You can incorporate these trends and see what works
              for you best.
            </div>
            <div className='Blog__image-container'>
              <img src={Img5} alt='not found' />
            </div>
          </div>
          <div
            className='Blog__sub-section Blog__sub-section-3'
            data-aos='fade-left'
          >
            <div className='Blog__image-container remove'>
              <img src={Img6} alt='not found' />
            </div>
            <div className='Blog__text'>
              <b>5. Spread the word</b>
              <br />
              Having a great design will help you communicate the brands true
              value, goals and ideas. This will make you reach to your customers
              on a effectively and will have a bit of personal touch along with
              it as well.
              <br />
              <br />
              <b>6. Marketing Boost</b>
              <br />A really good design can add revenue to your company with
              help of social media marketing. An eye-catching design will give
              you that edge for getting more clicks to attract your potential
              customers.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
