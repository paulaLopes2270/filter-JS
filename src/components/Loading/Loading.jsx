import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <AiOutlineLoading size="50px" />
    </LoadingContainer>
  );
};
