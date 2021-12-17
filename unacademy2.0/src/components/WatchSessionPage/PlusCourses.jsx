import Styles from './session.module.css'
import GREYLABEL from './images/GREY LABEL.svg'
import pic20 from './images/pic20.png'
import pic22 from './images/pic22.png'
import pic21 from './images/pic21.png'
import pic23 from './images/pic23.png'



const arr1 = [
    {
        img: pic20,
        subject: "Chemistry",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Shalini Verma"
    },
    {
        img: pic21,
        subject: "Maths",
        title: "Rivision Comprehensive Course on Vectors - Part II",
        name: "Shivani Sharma"
    },
    {
        img: pic22,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Ravindra Patel"
    },
    {
        img: pic23,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Suraj Nautiyal"
    }


]

export const PlusCourses = () => {
    return (
        <>
            {
                arr1.map((x) => (
                    <div className="card col-4" id={Styles.livecard} key={Math.random(1)}>
                        <img src={x.img} className="card-img-top" alt="..." id={Styles.imgdiv} />
                        <div className="card-body">
                            <div id={Styles.subjectDiv}>
                                <div>
                                    <img src={GREYLABEL} alt="" />
                                </div>
                                <div id={Styles.subject}>{x.subject}</div>
                            </div>
                            <div id={Styles.title}>{x.title}</div>
                            <div id={Styles.subtitle}>
                                Starts on Dec 4, 2021 • 8 lessons
                            </div>
                            <div id={Styles.subtitle}>{x.name}</div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}


