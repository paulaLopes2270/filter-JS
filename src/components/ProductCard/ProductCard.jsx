import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  box-shadow: 0 0 3px 0 gray;
`;
const ImageContainer = styled.div`
  flex: 0 1 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
`;
const DescriptionContainer = styled.div`
  padding: 10px;
`;

export const ProductCard = ({
  name = "",
  category = "",
  imgPath = "",
  description = ""
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imgPath} alt={name} />
      </ImageContainer>
      <DescriptionContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </DescriptionContainer>
    </CardContainer>
  );
};
