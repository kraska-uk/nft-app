import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Header, Grid, Input, Button } from 'semantic-ui-react';
import Page from '../../components/Page';



function HomePage(props) {
  return (
    <Page >
      <Container>
        <Header as='h1'>
          <Header.Content>
            KRASKA NFT
            <Header.Subheader></Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    </Page>
  );
};

export default hot(module)(HomePage);
