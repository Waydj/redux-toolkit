import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlane } from "../../store/plane/planeSlice";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import styles from "./plane-page.module.css";

export const PlanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { plane, isLoading } = useSelector((state) => state.plane);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button isBackButton onClick={() => navigate(-1)}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}</div>
          <Button
            containerClassName={styles["buy-btn-container"]}
            onClick={() => navigate("/order")}
          >
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles["image-container"]}>
          <img className={styles.image} src={plane.planeImage} alt="plane" />
        </div>
      </ContentWrapper>
    )
  );
};
