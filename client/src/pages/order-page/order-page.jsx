import { useNavigate } from "react-router-dom";
import styles from "./order-page.module.css";
import { ContentWrapper } from "../../components/content-wrapper";
import { Button } from "../../components/button";

export const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button containerClassName={styles.button} onClick={() => navigate("/")}>
        На главную
      </Button>
    </ContentWrapper>
  );
};
