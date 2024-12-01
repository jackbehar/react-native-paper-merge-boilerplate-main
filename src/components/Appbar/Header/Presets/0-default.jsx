import React from 'react';
import Header from '../Header';
import Content from '../../Content/Content';
import Action from '../../Action/Action';
import BackAction from '../../BackAction/BackAction';

export default (
  <Header uxpId='appbar-header-1'>
    <BackAction uxpId='appbar-header-backaction-1' />
    <Content title='Title' uxpId='appbar-header-content-1' />
    <Action icon='magnify' uxpId='appbar-header-action-1' />
    <Action icon='dots-vertical' uxpId='appbar-header-action-2' />
  </Header>
);
