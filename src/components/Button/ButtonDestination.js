import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  border-color: ${({ primary }) => (primary ? "#1b9fa2" : "#4B59F7")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 40px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#1b9fa2" : "#4B59F7")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  background-color: transparent;
  border-style: solid;
  margin-top: 1rem;
  
   
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#1b9fa2" : "#4B59F7")};
    color: white;

  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`