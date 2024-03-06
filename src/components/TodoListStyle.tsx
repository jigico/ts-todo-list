import styled from "styled-components";

export const TodoListContainer = styled.div`
  margin: 1rem auto;
  min-height: 40vh;
`;

export const TotoListTitle = styled.h2`
  margin: 1rem auto;
  font-size: 1.5rem;
`;
export const TodoListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const TodoItem = styled.li`
  padding: 1rem;
  width: calc((100% - 3rem) / 4);
  box-shadow: 0 0 4px 2px #f0f0f0;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background: #ffffc4;
  }
`;
export const TodoTitle = styled.h3`
  font-size: 1.2rem;
`;
export const ContentStyle = styled.p`
  padding: 1rem 0;
`;
export const ButtonArea = styled.div`
  display: flex;
  gap: 1rem;

  & button {
    width: 50%;
  }
`;
export const BtnNormal = styled.button`
  height: 28px;
  border-radius: 5px;
  font-family: inherit;
`;
export const BtnBlackF = styled(BtnNormal)`
  background: #262626;
  color: #ffffff;
  border: none;
`;

export const BtnBlackS = styled(BtnNormal)`
  font-weight: bold;
  background: #ffffff;
  color: #000000;
  border: 2px solid #262626;
`;
