import Styles from './session.module.css'
import GREYLABEL from './images/GREY LABEL.svg'
import pic6 from './images/pic6.png'
import pic17 from './images/pic17.png'
import pic18 from './images/pic18.png'
import pic19 from './images/pic19.png'



const arr1 = [
    {
        img: pic6,
        subject: "Chemistry",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Nikita Negi"
    },
    {
        img: pic18,
        subject: "Maths",
        title: "Rivision Comprehensive Course on Vectors - Part II",
        name: "Deepak Sharmal"
    },
    {
        img: pic17,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Shreya Negi"
    },
    {
        img: pic19,
        subject: "Physics",
        title: "Last min. Comprehensive Course on Optics - Part I",
        name: "Suraj Nautiyal"
    }


]

export const More = () => {
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


