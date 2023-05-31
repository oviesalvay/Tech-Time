import '../styles/best.css'
import unsplashs from '../asssest/unsplashs.svg';
import cast from '../asssest/cast.svg';
import localatm from '../asssest/localatm.svg';
import groups from '../asssest/groups.svg';
import schedule from '../asssest/schedule.svg'
import yellow from '../asssest/yellow.png';
import triangled from '../asssest/triangled.png';
import purplecircle from '../asssest/purplecircle.png';

const Best = () =>{
    return(
        <section className='best'>
        <img src={yellow} alt='yellow' className='yellow'/>
        <img src={triangled} alt="" className='triangled'/>
        <img src={purplecircle} alt="" className='purplecircle'/>
        <div className='the-best'>
        <h2>This is why we are best from others</h2>
        <p>High-defination video is video of higher resolution and quality 
            than standard definition. while there’s no standard meaning for high definition, 
            generally any standard video image</p>
            <figure>
                <img src={unsplashs}/>
            </figure>
            </div>
            <div className='card'>
                <div>
            <img src={cast} id="group" alt="cast"/>
            <h6>Experienced Mentors</h6>
            <p>High-defination video is video of higher resolution and quality
                 than standard definition. high-defination video is video of higher
                  resolution and quality than standard definition. </p>
    </div>
    <div>
        <img src={schedule} id="grouping" alt='schedule'/>
        <h6>One-On-One Meetings</h6>
        <p>high-defination video is video of higher resolution 
            and quality than standard definition. high-defination video is
             video of higher resolution and quality than standard definition. </p>
    </div>
            <div>
                <img src={groups} id="groups" alt="groups"/>
                <h6>One-On-One Meetings</h6>
                <p>High-defination video is video of higher 
                    resolution and quality than standard definition. 
                    high-defination video is video of higher resolution
                     and quality than standard definition. </p>
            </div>
            <div>
                <img src={localatm} id="grouped" alt='localatm'/>
                <h6>Affordable Prices</h6>
                <p>High-defination video is video of higher resolution and 
                    quality than standard definition. high-defination video is video of 
                    higher resolution and quality than standard definition. </p>
            </div>
            </div>
       </section> 
    )
}
export default Best;