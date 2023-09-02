import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 25px;
`;

export const Img = styled.img`
  border-radius: 4px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  align-items: end;
  gap: 30px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 10px;
`;

export const AddInfoWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkInfo = styled(Link)`
  border: none;
  border-radius: 25px;
  padding: 8px;
  color: #fff;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  background: rgba(122, 184, 147, 1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:hover {
    color: yellow;
  }
`;
