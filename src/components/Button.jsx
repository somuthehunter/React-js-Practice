import styles from './Button.module.css';

const Button = ({ buttonElements, onButtonClick }) => {
  return (
    <>
      {buttonElements.map((element, index) => (
        <div
          key={index}
          className={styles.button}
          onClick={ () => onButtonClick(element)} // Pass the element or index on click
        >
          {element}
        </div>
      ))}
    </>
  );
};

export default Button;
