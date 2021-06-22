import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#1b9fa2" : "#4B59F7")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 40px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#85e9eb" : "#1b9fa2")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`