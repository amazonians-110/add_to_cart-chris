import React from 'react';
import { shallow } from 'enzyme';
import DetailsBox from './DetailsBox.jsx';

describe('Details Component', () => {
  it('should render', () => {
    const details = shallow(<DetailsBox />);
    expect(details).toMatchSnapshot();
  });
});
