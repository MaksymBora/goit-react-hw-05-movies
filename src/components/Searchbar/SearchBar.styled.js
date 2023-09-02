import styled from 'styled-components';

export const InputWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin: 30px 10px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 215px;
  padding: 10px 0 10px 15px;
  font-family: 'Open Sans', sans;
  font-weight: 400;
  color: #377d6a;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 60px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;

  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  & + label {
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 0;
    bottom: 8px;
    padding: 5px 15px;
    color: #032429;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0);
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
    background: rgba(122, 184, 147, 0);

    &:after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      top: 100%;
      left: 50%;
      margin-left: -3px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 3px solid rgba(122, 184, 147, 0);
      transition: all 0.3s ease-in-out;
    }
  }

  &:focus,
  &:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }

    & + label {
      color: #fff;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: rgba(122, 184, 147, 1);
      transform: translateY(-40px);

      &:after {
        border-top: 4px solid rgba(122, 184, 147, 1);
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 11px;
  color: #fff;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  background: rgba(122, 184, 147, 1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:hover {
    color: yellow;
  }
`;
