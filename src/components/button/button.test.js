import { h } from 'preact';
import { shallow } from 'enzyme';
import Button from '.';

describe('Test Button component', () => {
	it('Test click event', () => {
	  const mockCallBack = jest.fn();
  
	  const button = shallow((<Button onClick={mockCallBack}>Click me!</Button>));
	  button.find('button').simulate('click');
	  expect(mockCallBack.mock.calls.length).toEqual(1);
	});
  });