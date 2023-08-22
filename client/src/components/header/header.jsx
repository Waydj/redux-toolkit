import { ContentWrapper } from "../content-wrapper";
import WaveImage from "./wave.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n комфортом`}</h1>
        <p
          className={styles.desc}
        >{`С нашей компание вы забуде обо всем,\n кроме высого уровня комфорта`}</p>
      </ContentWrapper>
      <img src={WaveImage} alt="bg" className={styles.wave} />
    </div>
  );
};
