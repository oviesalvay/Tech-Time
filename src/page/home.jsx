import '../styles/home.css';
import Courses from '../component/courses';
import Quality from '../component/quality';
import Best from '../component/best'; 
import Client from '../component/client';
import Question from '../component/question'
import frame  from '../asssest/frame.svg';
import heroimage from '../asssest/heroimage.svg';
import zoom from '../asssest/zoom.svg';
import stripe from '../asssest/stripe.svg';
import slack from '../asssest/slack.svg';
import monday from '../asssest/monday.svg';
import dropbox from '../asssest/dropbox.svg';
import VisualStudio from '../asssest/VisualStudio.png';
import grouped from '../asssest/grouped.png';
import bulb from '../asssest/bulb.svg';
import wordpress from '../asssest/wordpress.svg';
import Figma from '../asssest/Figma.svg';
import greencircle from '../asssest/greencircle.png';
import yellowtriangle from '../asssest/yellowtriagle.png'
import curved from '../asssest/curved.png';
const Home = () =>{
    return(
        <div>
    <section className="introduction">
        <div className="introduction-to">
   <h1>Grow your skills to advance your career path </h1> 
   <p>Build your future with our quality education. 
    the best and largest all-in-one online tutoring platform in the world</p>
    <div className='arrow'>
    <button className="get-started">Get Started Now</button>
    <button className="enroll">Enroll Now</button>
    </div>
    <div className='preview'>
    <img src={frame} alt='frame'/>
    <div>
  <h4>255k+</h4> 
preview</div>
    </div>
   </div>
   <figure>
    <img src={yellowtriangle} alt="" className='yellowtriangle'/>
   <img src={VisualStudio} alt="" className='visualstudio'/>
    <img src={heroimage} alt="" className="heroimage" />
    <img src={greencircle} alt="" className='greencircle'/>
    <img src={wordpress}className='wordpress' alt=""/>
   <img src={bulb}className='bulb' alt=""/>
   <img src={Figma}className='figma' alt=""/>
   <img src={curved} className='curved' alt=''/>
   </figure>
   </section>
   <div className='icon'>
    <img src={stripe} alt='stripe'/>
    <img src={zoom} alt='zoom'/>
    <img src={monday} alt='monday'/>
    <img src={slack} alt='slack'/>
    <img src={dropbox} alt='dropbox'/>
   </div>
   <Quality/>
   <Best />
    <Courses/>
    <Client />
    <section className='connect'>
            <h4>JOIN OUR COMMUNITY</h4>
            <h2>Are you  ready to connect with the future  talent of the tech world</h2>
            <p>Meet up with other techstars and grow together</p>
             <img src={grouped} alt='grouped'/>
            <button className='enroll'>Join Our Community</button>
        </section>
        <Question />
        </div>
    )
}
export default Home;