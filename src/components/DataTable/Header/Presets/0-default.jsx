import React from 'react';
import Header from '../Header';
import Title from '../../Title/Title';
export default (
  <Header uxpId='datatable-header-1'>
    <Title sortDirection='descending' uxpId='datatable-header-title-1'>
      Dessert
    </Title>
    <Title numeric uxpId='datatable-header-title-2'>
      Calories
    </Title>
    <Title numeric uxpId='datatable-header-title-3'>
      Fat (g)
    </Title>
  </Header>
);
