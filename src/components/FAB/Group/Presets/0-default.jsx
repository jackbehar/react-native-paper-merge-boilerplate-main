import React from 'react';
import Group from '../Group';
import Fab from '../../Fab';

export default (
  <Group
    open={true}
    visible={true}
    icon='calendar-today'
    closedIcon='plus'
    uxpId='fab-group-1'
  >
    <Fab icon='star' label='Favorites' uxpId='fab-1' />
    <Fab icon='email' label='Messages' uxpId='fab-2' />
    <Fab icon='bell' label='Notifications' uxpId='fab-3' />
  </Group>
);
