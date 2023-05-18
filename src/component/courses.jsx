import '../styles/courses.css';
import schedule from '../asssest/schedule.svg';
import research from '../asssest/research.svg';
import audience from '../asssest/audience.svg';
import bootstrap from '../asssest/bootstrap.svg';
import javascript from '../asssest/javascript.svg';
import outroom from '../asssest/outroom.svg';
import analysis from '../asssest/analysis.svg';
import grade from '../asssest/grade.svg';
import book from '../asssest/book.svg';
import geffery from '../asssest/geffery.svg';
import leonard from '../asssest/leonard.svg';
import samuel from '../asssest/samuel.svg';
import mason from '../asssest/mason.svg';
import adam from '../asssest/adam.svg';
// import mask from '../asssest/mask.svg';
import jessica from '../asssest/jessica.svg';

const courses = [
    {
        img: research,
        type: 'Design',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to user research in UX Design',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Leonard Victor',
        nameicon: leonard,
        price: '$15.00',
    },
    {
        img: audience,
        type: 'Marketing',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to new marketing audience',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Jeffery Williams',
        nameicon: leonard,
        price: '$32.00',
    },
    {
        img: javascript,
        type: 'Design',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to Html, Css & Bootstrap',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Claretta Mason',
        nameicon: leonard,
        price: '$15.00',
    },
    {
        img: outroom,
        type: 'Design',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to Javascript, Git & GitHub',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Jessica Duke',
        nameicon: leonard,
        price: '$15.00',
    },
    {
        img: analysis,
        type: 'Design',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to outroom  marketing analysis',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Samuel Jacobs',
        nameicon: leonard,
        price: '$15.00',
    },
    {
        img: bootstrap,
        type: 'Marketing',
        rating1: '4.7k',
        rating2: '8.k+',
        star: grade,
        topic: 'Introduction to live  marketing analysis',
        time: '23hrs 50mins',
        timeicon: schedule,
        lesson: '15 lesson',
        lessonicon: book,
        name: 'Adam smith',
        nameicon: leonard,
        price: '$15.00',
    },
]
const Courses = () => {
    return (

        <section className='popular-courses'>
            <section className='courses'>
                <h3>Browse Our Popular Courses</h3>
                <p>High-defination video is video of higher resolution and
                    quality than standard definition. <br></br>while there’s no standard meaning for high definition,
                    generally any standard video image</p>
                <div>
                    <p className="categories">All Categories </p>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Marketing</p>
                </div>
            </section>
            <section className='researched'>
                {
                    courses.map((course, index) => {
                        return (
                            <div className='research' key={index}>
                                <img src={course.img} />
                                <div className='research-content'>
                                    <div>
                                        <p id="design">{course.type}</p>
                                    </div>
                                    <div>
                                        {course.rating1}
                                        <img src={course.star} />
                                        {course.rating2}
                                    </div>
                                </div>
                                <h4>
                                    {course.topic}
                                </h4>
                                <div className='research-content'>
                                    <div className='schedule'>
                                        <div>
                                            <img src={course.timeicon} />
                                        </div>
                                        <div>
                                          <p> {course.time}</p>
                                        </div>
                                    </div>
                                    <div className='schedule'>
                                        <div>
                                            <img src={course.lessonicon} />
                                        </div>
                                        <div>
                                            <p> {course.lesson}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='research-content'>
                                    <div className='schedule'>
                                        <div>
                                            <img src={course.nameicon} /></div>
                                        <div>
                                            <h6>{course.name}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>{course.price}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <button className='view '>Explore All Courses</button>
        </section>
    )
}
export default Courses