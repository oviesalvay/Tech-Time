import '../styles/quality.css';
import frame from '../asssest/frame.svg';
import autoplay from '../asssest/autoplay.svg';
import volume from '../asssest/volume.svg';
import description from '../asssest/description.svg';
import antenna from '../asssest/antenna.svg';
import unsplash from '../asssest/unsplash.svg';
import unsplashed from '../asssest/unsplashed.svg';
import green from '../asssest/green.png';
import circle from '../asssest/circle.png';
import semicircle from '../asssest/semicircle.png';


const Quality = () => {    
    return (
        <section className='high-quality'>  
            <img src={green} alt="" className='green'/>
            <img src={circle} alt="" className='circle'/> 
            <img src={semicircle} alt="" className='semicircle'/>
            <div className='quality'>
                <h2>High quality video, audio & live classes</h2>
                    <p>High-defination video is video of higher resolution and quality than standard definition.
                        while there’s no standard meaning for high definition,
                        generally any standard video image</p>
                <button className='view'>View Courses</button>
                <div className='class'>
                    <div className='classes'>
                        <img src={autoplay} alt='autoplay'/> 
                        <p>Record Class</p>
                    </div>
                    <div className='classes'>
                        <img src={volume} alt='volume'/>
                        <p>Audio Classes</p>
                    </div>
                    <div className='classes'>
                        <img src={description} alt='description'/>
                        <p>Live Classes</p>
                    </div>
                    <div className='classes'>
                        <img src={antenna} alt='antenna'/>
                        <p>50+ notes</p>
                    </div>
                </div>
            </div>
            <picture>
                        <img src={frame} id="frame" alt='frame'/>
                <figure>
                    <img src={unsplash}  id='unsplash' alt='unsplash'/>
                </figure>
                <figure>
                    <img src={unsplashed} id='unsplashed' alt='unsplashed' />
                </figure>
            </picture>
        </section>
    )
}
export default Quality;