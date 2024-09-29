import styles from './Display.module.css'

const Display = ( {CalVal}) => {
    return (
        <>
        <div className={styles.display}>
            <input type="text" placeholder='0' value = {CalVal} readOnly />
        </div>  
        </>
    );

}

export default Display;