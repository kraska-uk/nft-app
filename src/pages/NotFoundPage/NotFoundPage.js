import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { routerPaths } from '../../router/helper';
import Page from '../../components/Page';



function NotFoundPage() {
  return (
    <Page title={'Page not found'}>
      <Container>
        <p>Page not found</p>
        <Link to={routerPaths.main}>
          Go to Home page
        </Link>
      </Container>
    </Page>
  );
};

export default hot(module)(NotFoundPage);
