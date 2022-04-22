import { h } from 'preact';
import Home from '../src/routes/home';
import { shallow } from 'enzyme';

describe('Initial Test of the Home page', () => {
	let context;
	beforeEach(() => {
		context = shallow(<Home />);
	  });

	test('If one Button is rendered', () => {
		expect(context.find('Button')).toHaveLength(1)
	});

	test('If Button is rendered with proper type', () => {
	  expect((context.find('Button')).prop('text')).toBeString();
	});
});
