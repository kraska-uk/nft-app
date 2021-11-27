import { FC } from 'react';
import { SvgProps } from '../../components/Svg/types';
import { ConnectorNames } from '../../constants';



export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}
