import React from 'react';
import { hot } from 'react-hot-loader';
import { Container, Header, } from 'semantic-ui-react';



function ErrorComponent() {
  return (
    <Container textAlign='center'>
      <Header as='h1' content={'Something went wrong'} />
      <Header as='h2' content={'We are working to resolve the problem'} />
    </Container>
  );
};

export default hot(module)(ErrorComponent);
