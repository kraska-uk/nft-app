import React from 'react';
import { hot } from 'react-hot-loader';
import { Segment, Container, List } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';
import { appName } from '../constants';
//import { routerPaths } from '../router/helper';
//import getExternalLinkProps from '../utils/getExternalLinkProps';



function Footer() {
  return (
    <Segment as={'footer'} inverted vertical >
      <Container textAlign='center'>
        <List inverted link horizontal>
          <List.Item>
            {appName} © {new Date().getFullYear()}.
          </List.Item>
        </List>
      </Container>
    </Segment >
  );
};

export default hot(module)(Footer);
