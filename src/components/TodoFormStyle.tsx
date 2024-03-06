import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & button {
    width: 50px;
  }
`;
export const InputStyle = styled.input`
  margin-right: 20px;
  height: 28px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-family: inherit;
  text-indent: 10px;
`;
