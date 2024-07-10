import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  height: 114px;
  padding-left: 90px;
  border-top: 1.5px solid #e4e8ed;

  img {
    margin-right: ${({ theme }) => theme.spacing.lg2};
  }
`;
