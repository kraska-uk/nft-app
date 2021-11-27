import React from 'react';
import { Link as LinkUi } from 'react-router-dom';
import getExternalLinkProps from '../../utils/getExternalLinkProps';
import { LinkProps } from './types';




const Link: React.FC<LinkProps> = ({ external, href, to, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  if (external)
    return <a href={href} {...internalProps} {...props} />;
  else
    return <LinkUi to={to} {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: 'primary',
};

export default Link;
