import React from 'react';

import Content from '../../components/content';
import Kit from '../../components/kit';

export default function KitLayout() {
  return (
    <Content header children={<Kit />} />
  );
}
