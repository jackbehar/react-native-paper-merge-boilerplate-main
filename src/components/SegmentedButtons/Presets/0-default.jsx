import * as React from 'react';
import SegmentedButtons from '../SegmentedButtons';

export default (
  <SegmentedButtons
    uxpId='segmented-buttons-1'
    value='walk'
    buttons={[
      { value: 'walk', label: 'Walking', icon: 'walk' },
      { value: 'train', label: 'Transit', icon: 'train' },
      { value: 'drive', label: 'Driving', icon: 'car' },
    ]}
  />
);
