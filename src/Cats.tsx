import { useParams } from "react-router-dom";

export const Cats = () => {
  const { catName } = useParams();
  return (
    <p>
      En katt som heter <b>{catName}</b>
    </p>
  );
};
