import React from 'react';
import { shallow } from 'enzyme';
import DeliverModal from './DeliverModal.jsx';

describe('Deliver Component', () => {
  it('should render', () => {
    const deliver = shallow(<DeliverModal />);
    expect(deliver).toMatchSnapshot();
  });
});