import Styles from './live.module.css'
import pic7 from './images/pic7.png'
import GREYLABEL from './images/GREY LABEL.svg'
import pic8 from './images/pic8.png'
import pic9 from './images/pic9.png'

const arr1 = [
    {
        img: pic7,
        subject: "Chemistry",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Shubham Gupta"
    },
    {
        img: pic8,
        subject: "Maths",
        title: "Rivision Comprehensive Course on Vectors - Part II",
        name: "Nikita Gairala"
    },
    {
        img: pic9,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Rajeev Chauhan"
    },


]

export const Upcoming = () => {
    return (
        <>
            {
                arr1.map((x) => (
                    <div className="card col-4" id={Styles.livecard} key={Math.random(1)}>
                        <img src={x.img} className="card-img-top img-fluid" alt="..." id={Styles.imgdiv} />
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


