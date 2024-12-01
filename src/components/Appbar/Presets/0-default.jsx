import React from 'react';
import Appbar from '../Appbar';
import BackAction from '../BackAction/BackAction';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Action from '../Action/Action';
export default (
  <Appbar uxpId='appbar-1'>
    <BackAction uxpId='appbar-header-backaction-1' />
    <Content title='Title' uxpId='appbar-header-content-1' />
    <Header uxpId='appbar-header-1'>
      <Action icon='magnify' uxpId='appbar-header-action-1' />
      <Action icon='dots-vertical' uxpId='appbar-header-action-2' />
    </Header>
  </Appbar>
);
