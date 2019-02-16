import React from 'react';
import { shallow } from 'enzyme';
import AddToListModal from './AddToListModal.jsx';

describe('AddToList Component', () => {
  it('should render', () => {
    const addToList = shallow(<AddToListModal />);
    expect(addToList).toMatchSnapshot();
  });
});