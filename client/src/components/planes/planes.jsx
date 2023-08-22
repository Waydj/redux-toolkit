import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlanes } from "../../store/planes/planesSlice";
import { Spinner } from "../../components/spinner";
import { ContentWrapper } from "../content-wrapper";
import { PlaneItem } from "../plane-item";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import { Button } from "../button";
import { useSortPlanes } from "../../hooks/useSortPlanes";
import styles from "./planes.module.css";

export const Planes = () => {
  const dispatch = useDispatch();

  const { planes, isLoading } = useSelector((state) => state.planes);

  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
    planes || []
  );

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={styles.sort}>
        <ContentWrapper className={styles["planes-header"]}>
          <Button
            onClick={() => setIsDescSort((v) => !v)}
            className={styles["sort-btn"]}
          >
            Сортировать по цене {`${isDescSort ? "-" : "+"}`}
          </Button>
          <Link to={paths.createPlane} className={styles.createPlane}>
            Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planes}>
        {sortedPlanes &&
          sortedPlanes.map((plane) => (
            <PlaneItem plane={plane} key={plane._id} />
          ))}
      </ContentWrapper>
    </>
  );
};
