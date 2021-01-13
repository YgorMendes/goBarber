import React from 'react';
import { DefaultContext } from 'react-icons/lib';

import User from '../../svgs/User';
import Email from '../../svgs/Email';
import Password from '../../svgs/Password';
import Error from '../../svgs/Error';
import Succes from '../../svgs/Succes';
import Alert from '../../svgs/Alert';
import Closed from '../../svgs/Closed';

interface PropsIcon {
  iconName: string;
}

function index({ iconName }: PropsIcon): JSX.Element {
  switch (iconName) {
    case 'User':
      return <User />;
    case 'Email':
      return <Email />;
    case 'Password':
      return <Password />;
    case 'Succes':
      return <Succes />;
    case 'Error':
      return <Error />;
    case 'Alert':
      return <Alert />;
    case 'Closed':
      return <Closed />;
    default:
      console.log('error icon name');
  }
  return <></>;
}

export default index;
