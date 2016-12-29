import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Member from './Member';

describe('Member component', () => {
  it('should render default text', () => {
    const member = TestUtils.renderIntoDocument(<Member/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(member, 'h2');
    expect(h2.textContent).toEqual('Fred Flintstone');
  });
});
