import Styles from './live.module.css'


export const TestSeries = () => {
    return (
        <>
          <div className="col-4" id={Styles.testSeries}>
              <div className={Styles.extended}>.</div>
              <div className={Styles.term1}>TERM 1 Practice - MCQs test series -Commerce</div>
              <div className={Styles.freelabel}>Free</div>
              <div className={Styles.test17}>Test 17 • Dec 6, 9:00 AM</div>
          </div>  
        </>
    )
}
