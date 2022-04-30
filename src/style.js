import styled from "styled-components";

export const CategoryFilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`;

export const CategoryButton = styled.button`
  background: none;
  border: none;
  box-shadow: 0 0 3px 0 ${({ selected }) => (selected ? "green" : "gray")};
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  transform: ${({ selected }) => (!selected ? "none" : "scale(1.03)")};
  :hover {
    transform: scale(1.03);
    box-shadow: ${({ selected }) =>
      selected ? "0 0 3px 0 green" : "0 0 3px 0 green"};
  }
`;

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
