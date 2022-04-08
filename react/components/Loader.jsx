import loader from "../../assets/images/loading.gif";
import styled from "styled-components";

export const Loader = function () {
  return (
    <LoaderContainer>
      <img src={loader} alt="En cours de chargement" />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
    height: auto;
  }
`;
