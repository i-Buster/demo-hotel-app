import { h } from 'preact';
import { shallow } from 'enzyme';
import BulletedList from '.';

const mockedBulletList = [...Array(3)]

test('Whether Bullet items are rendering properly', () => {
	const context = shallow(<BulletedList title={'Bed and Breakfast'} itemList={mockedBulletList} />);

	const ulContext = context.find('.benefitList')
	expect(ulContext.children()).toHaveLength(3);
})

