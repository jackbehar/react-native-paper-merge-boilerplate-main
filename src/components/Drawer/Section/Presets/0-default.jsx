import * as React from 'react';
import Section from '../Section';
import Item from '../../Item/Item';

export default (
  <Section uxpId='drawer-section-1' title='Some title'>
    <Item
      uxpId='drawer-item-1'
      label='First Item'
      icon='inbox'
      onPress={() => console.log('First Item pressed')}
    />
    <Item
      uxpId='drawer-item-2'
      label='Second Item'
      icon='send'
      onPress={() => console.log('Second Item pressed')}
    />
  </Section>
);
