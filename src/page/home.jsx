import '../styles/home.css';
import Courses from '../component/courses';
import Quality from '../component/quality';
import Best from '../component/best'; 
import Client from '../component/client';
import Question from '../component/question';
import frame  from '../asssest/frame.svg';
import heroimage from '../asssest/heroimage.svg';
import zoom from '../asssest/zoom.svg';
import stripe from '../asssest/stripe.svg';
import slack from '../asssest/slack.svg';
import monday from '../asssest/monday.svg';
import dropbox from '../asssest/dropbox.svg';
import VisualStudio from '../asssest/VisualStudio.png';
import Group from '../asssest/Group.png';
import Grouped from '../asssest/Grouped.svg';
import Grouping from '../asssest/Grouping.png';
import arrowoutward from '../asssest/arrowoutward.png';
import Induction from '../asssest/Induction.svg';
import Frame from '../asssest/Frame.png';
import Frameed from '../asssest/Frameed.png';
import frames from '../asssest/frames.png';
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
    <img src={frame} />
    <div>
  <h4>255k+</h4> 
preview</div>
    </div>
   </div>
   {/* <img src={VisualStudio}/> */}
   <figure>
    {/* <img src={Induction}/> */}
    <img src={heroimage}/>
    {/* <img src={Frame}/> */}
   </figure>
   {/* <img src={Frameed}/> */}
   </section>
   <div className='icon'>
    <img src={stripe}/>
    <img src={zoom}/>
    <img src={monday}/>
    <img src={slack}/>
    <img src={dropbox}/>
   </div>
   <Quality/>
   <Best />
    <Courses/>
    <Client />
    <section className='connect'>
            <h4>JOIN OUR COMMUNITY</h4>
            <h2>Are you  ready to connect with the future<br></br> talent of the tech world</h2>
            <p>Meet up with other techstars and grow together</p>
            <img src={frames}/>
            <img src={Grouped}/>
            <img src={Group}/>
            <img src={Grouping}/>
            <button className='enroll'>Join Our Community</button>
        </section>
        <Question />
        </div>
    )
}
export default Home;