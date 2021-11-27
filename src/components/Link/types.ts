import { AnchorHTMLAttributes } from 'react';
//import { Link } from 'react-router-dom';



export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  to?: any;
}
