import React from 'react';

import Content from '../../components/content';
import Main from '../../components/main';

export default function MainLayout() {
  return (
    <Content header children={<Main />} />
  );
}
