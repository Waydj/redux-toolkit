import styles from "./button.module.css";

export const Button = ({
  containerClassName = "",
  className = "",
  onClick = () => {},
  children = "",
  isBackButton = false,
}) => {
  return (
    <div className={containerClassName} onClick={onClick}>
      <span
        className={`${
          isBackButton ? styles["back-button"] : styles.button
        } ${className}`}
      >
        {children}
      </span>
    </div>
  );
};
