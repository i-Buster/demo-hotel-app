import { h } from 'preact';
import Results from '../src/routes/results';
import { shallow } from 'enzyme';

describe('Initial Test of the Hotels Page', () => {
	let context;
	beforeEach(() => {
		context = shallow(<Results />);
	});

	test('If Hotel Facilities filters are not visible when collapsed', () => {
		const hotelFacilitiesItem = context.find('#hotelFacilitiesItem')
		expect(hotelFacilitiesItem.children()).toHaveLength(0);
	})

	test('If Hotel Facilities filters are visible when expanded', () => {
		const collapsibleFacilities = context.find('#hotelFacilitiesCollapsible')
		collapsibleFacilities.simulate('click')

		const hotelFacilitiesItem = context.find('#hotelFacilitiesItem')
		expect(hotelFacilitiesItem.children()).not.toHaveLength(0);
	})

});
