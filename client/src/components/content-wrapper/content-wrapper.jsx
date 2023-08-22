import styles from "./content-wrapper.module.css";

export const ContentWrapper = ({ children, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
