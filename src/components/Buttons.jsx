import styles from './Buttons.module.css'
import Button from './Button';
const Buttons = ({onButtonClick}) => {
    
    const buttonNames = [1,2,3,4,5,6,7,8,9,0,'/','*','+','-','C','=']

    
    return (
        <>
        <div className={styles.buttons}>
            <Button buttonElements = {buttonNames} onButtonClick = {onButtonClick} ></Button>

    </div>
        </>
    );


}

export default Buttons;