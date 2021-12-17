export const SideBar = () => {
    return (
        <div className="col-2">
            <div className={Styles.fixedTop}>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Home} alt="" id={Styles.homeImg} />Home</div>
                </div>
                <div className="row" id={Styles.selfStudy}>Self Study</div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Compass} alt="" id={Styles.homeImg} />Browse</div>
                </div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={light} alt="" id={Styles.homeImg} />Practice</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Aplus} alt="" id={Styles.homeImg} />Test</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={bookopen} alt="" id={Styles.homeImg} />Syllabus</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={doubt} alt="" id={Styles.homeImg} />Doubts & solution</div>
                </div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={youtube} alt="" id={Styles.homeImg} />Free Live Class</div>
                </div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Vector} alt="" id={Styles.homeImg} />Other Courses</div>
                </div>
            </div>
        </div>
    )
}
