import Styles from "./video.module.css"

export const Comments=({name,desc,image})=>{
    return (
        <div className={Styles.cmain}>
        <div className={Styles.name}>{name} </div>

        <div className={Styles.description}>{desc}</div>
        <div className={Styles.image}><img src={image} width={45} alt="..." /></div>
        </div>
    )
}