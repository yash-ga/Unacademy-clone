import Styles from './live.module.css'
import pic3 from './images/pic3.png'
import GREYLABEL from './images/GREY LABEL.svg'
import pic2 from './images/pic2.png'
import pic1 from './images/pic1.png'

const arr1 = [
    {
        img: pic3,
        subject: "Chemistry",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Nikita Negi"
    },
    {
        img: pic1,
        subject: "Maths",
        title: "Rivision Comprehensive Course on Vectors - Part II",
        name: "Yashika Manwal"
    },
    {
        img: pic2,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Shivam Dubey"
    },


]

export const LiveLecture = () => {
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


