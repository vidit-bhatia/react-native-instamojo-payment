import React from 'react';
import {InstamojoPaymentComponent} from '../';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<InstamojoPaymentComponent
      instamojo_long_url={"http://www.google.com"}
      redirect_url={"http://www.google.com"}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});