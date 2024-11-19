import * as React from 'react';
import { Card } from '../Card';
import { Title } from '../Title/Title';
import { Content } from '../Content/Content';
import { Actions } from '../Actions/Actions';
import { Cover } from '../Cover/Cover';
import { Button } from '../../Button/Button';
import Text from '../../Text/Text';

export default (
  <Card uxpId='card-1' mode='outlined'>
    <Title uxpId='card-title-1' title='Card Title' subtitle='Card Subtitle' />
    <Cover uxpId='card-cover-1' source='https://picsum.photos/700' />
    <Content uxpId='card-content-1'>
      <Text uxpId='content-text-1'>Card Content</Text>
    </Content>
    <Actions uxpId='card-actions-1'>
      <Button uxpId='card-actions-button-1' mode='contained'>
        Submit
      </Button>
    </Actions>
  </Card>
);
