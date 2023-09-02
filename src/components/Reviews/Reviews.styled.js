import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const Item = styled.li`
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.01);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.h3`
  margin-bottom: 15px;
`;
