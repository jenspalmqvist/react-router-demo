import { useParams } from "react-router-dom";

export const About = () => {
  const { secretParameter } = useParams();
  return (
    <>
      <h2>Om oss</h2>
      <p>Vi gör balla grejer</p>
      {secretParameter === "true" ? (
        <p>Ibland gör vi hemliga grejer</p>
      ) : (
        <p>Vi gör aldrig hemliga grejer</p>
      )}
      {secretParameter && secretParameter}
    </>
  );
};
