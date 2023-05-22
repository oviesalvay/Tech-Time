import '../styles/quality.css';
import frame from '../asssest/frame.svg';
import autoplay from '../asssest/autoplay.svg';
import volume from '../asssest/volume.svg';
import description from '../asssest/description.svg';
import antenna from '../asssest/antenna.svg';
import unsplash from '../asssest/unsplash.svg';
import unsplashed from '../asssest/unsplashed.svg';

const Quality = () => {
    return (
        <section className='high-quality'>
            <div className='quality'>
                <h2>High quality video, audio & live classes</h2>
                    <p>High-defination video is video of higher resolution and quality than standard definition.
                        while there’s no standard meaning for high definition,
                        generally any standard video image</p>
                <button className='view'>View Courses</button>
                <div className='class'>
                    <div className='classes'>
                        <img src={autoplay} />
                        <p>Record Class</p>
                    </div>
                    <div className='classes'>
                        <img src={volume} />
                        <p>Audio Classes</p>
                    </div>
                    <div className='classes'>
                        <img src={description} />
                        <p>Live Classes</p>
                    </div>
                    <div className='classes'>
                        <img src={antenna} />
                        <p>50+ notes</p>
                    </div>
                </div>
            </div>
            <picture>
                        <img src={frame} id="frame"/>
                <figure>
                    <img src={unsplash}  id='unsplash'/>
                </figure>
                <figure>
                    <img src={unsplashed} id='unsplashed' />
                </figure>
            </picture>
        </section>
    )
}
export default Quality;