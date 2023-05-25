import '../styles/question.css'
import add from '../asssest/add.svg';
import yellow from '../asssest/yellow.png';
import circle from '../asssest/circle.png';
import shapeleft from '../asssest/shapeleft.png';
import dash from '../asssest/dash.png';
import dot from '../asssest/dot.png';
  
  const Question = () =>{
    return (
        <section className='questions'>
         <img src={circle} className='circle' alt="" />
            <img src={dot} className='dot' alt="" />
            <img src={yellow} className='yellow' alt="" />
            <img src={shapeleft} className='shapeleft' alt=''/>
            <img src={dash} className='dash' alt=""/>
        <div className='question'>
        <h3>Frequently Asked Questions</h3>
        <p>High-defination video is video of higher resolution and quality 
            than standard definition. <br></br>while there’s no standard meaning for high definition,
             generally any standard video image</p></div>
             <h5>Is there a free trial available?</h5>
        <p>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education.
             the best and largest all-in-one online tutoring platform in the worldd definition. </p>
             <span></span>
             <div className='plans'>
             <div>
             <h6>Can i change my plan later?</h6>
             </div>
             <figure>
                <img src={add}/>
             </figure>
             </div>
             <span></span>
             <div className='plans'>
             <div>
             <h6>Are the courses lifetime?</h6>
             </div>
             <figure>
                <img src={add}/>
             </figure>
             </div>
             <span></span>
             <div className='plans'>
             <div>
             <h6>Do i get certified after taking courses?</h6>
             </div>
             <figure>
                <img src={add}/>
             </figure>
             </div>
             <span></span>
             <div className='plans'>
             <div>
             <h6>How do i reach out to mentors?</h6>
             </div>
             <figure>
                <img src={add}/>
             </figure>
             </div>
             <span></span>
             <div className='plans'>
             <div>
             <h6>Do we get job ready after taking courses?</h6>
             </div>
             <figure>
                <img src={add}/>
             </figure>
             </div>
             <span></span>
    </section>  
    )
  }
  export default Question