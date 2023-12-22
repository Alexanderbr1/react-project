import styled from "styled-components";

export interface StyledProps {
  Height?: string;
}

const ConfidentialWrapper = styled.div<StyledProps>`
  color: white;
  font-size: ${({ Height }) => (Height ? Height : "10px")};
  text-align: center;
`;

const Confidential = () => {
  return (
    <>
      <ConfidentialWrapper Height="100px">Secret Route</ConfidentialWrapper>
    </>
  );
};

export default Confidential;
