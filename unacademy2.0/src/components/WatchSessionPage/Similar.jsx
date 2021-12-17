import Styles from './session.module.css'
import pic4 from './images/pic4.png'
import GREYLABEL from './images/GREY LABEL.svg'
import pic5 from './images/pic5.png'
import pic6 from './images/pic6.png'
import pic16 from './images/pic16.png'


const arr1 = [
    {
        img: pic4,
        subject: "Chemistry",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Rubika Zaidi"
    },
    {
        img: pic5,
        subject: "Maths",
        title: "Rivision Comprehensive Course on Vectors - Part II",
        name: "Yashika Manwal"
    },
    {
        img: pic6,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Shreya Negi"
    },
    {
        img: pic16,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Shantanu Nautiyal"
    }


]

export const Similar = () => {
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


