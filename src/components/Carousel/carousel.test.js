import { h } from 'preact';
import { shallow } from 'enzyme';
import Carousel from '.';

const mockedData = [...Array(4)]

test('If after clicking the next button, the current image and total image numbers are displaying correctly', () => {
	const context = shallow(<Carousel imageList={mockedData} />);
	const nextButton = context.find('.rightArrow')
	nextButton.simulate('click')

	const currentAndTotalImages = context.find('#currentAndTotalImages')

	expect(currentAndTotalImages.text()).toEqual(`2 of ${mockedData.length}`);

})

