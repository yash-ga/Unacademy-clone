import Styles from './live.module.css'
import Book from './images/Book.svg'
export const CbseNavCard = () => {
    return (
        <div className="row" id={Styles.cbseNavCard}>
            <div className="col-2">
                <img src={Book} alt="..." />
            </div>
            <div className='col-10' id={Styles.cbse12}>CBSE Class 12</div>
        </div>
    )
}
