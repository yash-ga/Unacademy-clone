import Styles from './live.module.css'
import pic10 from './images/pic10.png'
import pic11 from './images/pic11.png'
import pic12 from './images/pic12.png'
import pic13 from './images/pic13.png'


const arr1 = [
    {
        img: pic10,
        watch: "10M",
        follower: "37k",
        name: "Bharat Panchal"
    },
    {
        img: pic11,
        watch: "12M",
        follower: "39k",
        name: "Sherya Pal"
    },
    {
        img: pic12,
        watch: "20M",
        follower: "63k",
        name: "Nikita Negi"
    },
    {
        img: pic13,
        watch: "16M",
        follower: "19k",
        name: "Suraj Jain"
    },


]
export const Featured = () => {
    return (
        <>
            {
                arr1.map((x,id) => (
                    <div className="card mb-3 ms-3 me-3 col-5" id={Styles.featuredCard} key={id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={x.img} className="img-fluid rounded-start" id={Styles.featuredImg} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id={Styles.featuredBody}>
                                    <div className={Styles.featuredName}>{x.name}</div>
                                    <div className={Styles.featuredText}>Use code gauravj to enroll - 10% off Author of <br /> India's Best selling economics books. Owner of <br /> Economics on your tips, Accounts adda and Min </div>
                                    <div className={Styles.featuredBox}>
                                        <div>{x.watch}</div>
                                        <div>{x.follower}</div>
                                    </div>
                                    <div className={Styles.featuredRating}>
                                        <div>Watch min </div>
                                        <div>Followers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
