import Spinner from "react-bootstrap/Spinner";

/* Exporting the Loading component. */
export const Loading = () => {
  return (
    <div>
      <h1>Now Loading</h1>
      <Spinner animation="grow" size="sm" />
    </div>
  );
};
