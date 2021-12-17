import styles from './style/navbar1.module.css';

export const Navbar2 = () => {

    const handleLogout = ()=>{
        window.localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/"
        alert("Logout")
    }

    return (
        <>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_container_img}>
                    <img src="/Icons/unacademy.svg" alt="img" />
                    <div className={styles.nvbr_vertical_line}></div>
                    <button className={styles.navbar_btn}>CBSE Class 12
                        <img src="./Icons/downarrow.svg" alt="img" width={30} />
                    </button>
                </div>
                <div>
                    <img src="./Images/search.png" width={300} alt="img" />
                    <button className={styles.nvbr_user_nm} onClick={handleLogout} >Username</button>
                </div>
            </div>
        </>
    )
}
