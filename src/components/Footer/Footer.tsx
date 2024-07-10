import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault, Typography } from 'vr-challenge-ds';

import Logo from '../../assets/logo.png';

import * as Styled from './Footer.styled';

const FooterComponent: FC = () => (
  <ThemeProvider theme={ThemeDefault}>
    <Styled.Wrapper data-testid="footer">
      <img src={Logo} alt="logo vr" />
      <Typography variant="button">
        © 2024 VR Benefícios - Todos os direitos reservados
      </Typography>
    </Styled.Wrapper>
  </ThemeProvider>
);
export default FooterComponent;
