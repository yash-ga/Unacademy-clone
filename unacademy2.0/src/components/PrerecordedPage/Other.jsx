import pic3 from './images/pic3.png'
import GREYLABEL from './images/GREY LABEL.svg'
import pic2 from './images/pic2.png'
import Styles from './prerecorded.module.css'


const arr1 = [
    {
        img: pic2,
        subject: "English",
        title: "Last min. Comprehensive Course on Organic - Part II",
        name: "Nikita Negi"
    },
    {
        img: pic3,
        subject: "English",
        title: "Complete Grammar Basic to Advance Part I",
        name: "Nikita Negi"
    },
    
]

export const Other = () => {
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


