import { useParams } from "react-router-dom";
import styled from "styled-components";

export const RouteNotFound = function () {
  // Je récupère les paramètres de la route car je souhaite afficher la page que l'utilisateur voulait atteindre.
  const params = useParams();

  return (
    <RouteNotFoundContainer>
      {/* La route choisi par l'utilisateur étant stockée sous la propriété '*', je dois la récupérer avec le style tableau */}
      {/* Faites un log de params pour voir ce qu'il contient ! */}
      Erreur, la page: <strong> {params["*"]} </strong> n'existe pas !
    </RouteNotFoundContainer>
  );
};

const RouteNotFoundContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;
