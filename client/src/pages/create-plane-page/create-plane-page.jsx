import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button/button";
import { ContentWrapper } from "../../components/content-wrapper/content-wrapper";
import { Input } from "../../components/input";
import { createPlane } from "../../store/plane/planeSlice";
import styles from "./create-plane-page.module.css";
import { paths } from "../../paths";

export const CreatePlanePage = () => {
  const navigate = useNavigate();
  const { errors } = useSelector((state) => state.plane);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [planeImage, setPlaneImage] = useState("");

  const handleCreate = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);

    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, { replace: true });
      }
    });
  }, [name, description, price, capacity, planeImage]);

  return (
    <ContentWrapper className={styles.create}>
      <Button
        containerClassName={styles["back-btn-container"]}
        isBackButton
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name="name"
          placeholder="Название самолета"
          error={errors?.name?.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Цена самолета"
          error={errors?.price?.message}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание самолета"
          error={errors?.description?.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость самолета"
          error={errors?.capacity?.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="planeImage"
          type="file"
          placeholder="Фото самолета"
          error={errors?.file?.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <Button
          containerClassName={styles["button-container"]}
          onClick={handleCreate}
        >
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};
