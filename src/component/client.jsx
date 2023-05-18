import '../styles/client.css';
import jessica from '../asssest/jessica.svg';
 import mason from '../asssest/mason.svg';
 import adam from '../asssest/adam.svg';
 import leonard from '../asssest/leonard.svg';
const Client = () =>{
    return(
<div className='our-client'>
            <h3>What our clients are saying</h3>
            <p>High-defination video is video of higher resolution 
                and quality than standard definition.<br></br> while there’s no 
                standard meaning for high definition, generally any standard video image</p>
                <div className='what-they-said'>
                    <div className='said'>
                    <blockquote>High-defination video is video of higher 
                        resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality 
                        than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                        high-defination video is video of higher resolution and quality than standard definition.
                         build your future with our quality education. the best and largest all-in-one online tutoring 
                         platform in the world</blockquote>
                         <div className='client'>
                            <div>
                         <img src={jessica}/>
                         </div>
                         <div>
                       <h6>Bella Moon</h6>
                       <p>Product Designer</p>
                         </div>
                         </div>
                         </div>
                         <div className='said'>
                         <blockquote>High-defination video is video of higher 
                        resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality 
                        than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                        high-defination video is video of higher resolution and quality than standard definition.
                         build your future with our quality education. the best and largest all-in-one online tutoring 
                         platform in the world</blockquote>
                         <div className='client'>
                            <img src={leonard}/>
                            <div>
                                <h6>Samuel Fortune</h6>
                                <p>Product Designer</p>
                            </div>
                         </div>
                         </div>
                          <div className='said'>
                         <blockquote>High-defination video is video of higher 
                        resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality 
                        than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                        high-defination video is video of higher resolution and quality than standard definition.
                         build your future with our quality education. the best and largest all-in-one online tutoring 
                         platform in the world</blockquote>
                         <div className='client'>
                            <img src={adam}/>
                            <div>
                                <h6>Bryce Jason</h6>
                                <p>Product Designer</p>
                            </div>
                         </div>
                         </div>
                         <div className='said'>
                         <blockquote>High-defination video is video of higher 
                        resolution and quality than standard definition. 
                        high-defination video is video of higher resolution and quality 
                        than standard definition. hbuild your future with our quality education. 
                        the best and largest all-in-one online tutoring platform in the worldd definition. 
                        high-defination video is video of higher resolution and quality than standard definition.
                         build your future with our quality education. the best and largest all-in-one online tutoring 
                         platform in the world</blockquote>
                         <div className='client'>
                            <img src={mason}/>
                            <div>
                                <h6>Bryce Jason</h6>
                                <p>Product Designer</p>
                            </div>
                         </div>
                         </div> 
                </div>
        </div>
    )
}
export default Client;