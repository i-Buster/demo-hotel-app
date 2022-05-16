import { h } from 'preact';
import { shallow } from 'enzyme';
import Hotel from './hotel';
import Button from '../../../components/button';

const mockedResponse = {
	holidays: [
		{
			totalPrice: 6457.73,
			pricePerPerson: 3228.87,
			depositPerPerson: 3228.87,
			webDiscount: 0,
			deposit: 6457.73,
			hotel: {
				id: "H6630",
				name: "O2 Beach Club & Spa by Ocean Hotels",
				boardBasis: "All Inclusive",
				content: {
					name: "O2 Beach Club & Spa by Ocean Hotels",
					virginView: "<p>&#xa0; &#xa0; &#xa0;Now open, Barbados&#x2019; newest luxury All-Inclusive Resort&#xa0; is O2 Beach Club &amp; Spa by Ocean Hotels&#xa0; One of the coolest beach spots on the Island, you can take advantage of the premium All Inclusive offerings before crashing out on your sun lounger, it is perfectly pitched by one of the three glittering resort pools. Elegant and exclusive and set on a 1,000 feet of powder white beach fringing the glistening turquoise waters of the Caribbean Sea. The O2 Beach Club and Spa offers unparalleled comfort and personalised service throughout your stay. Its contemporary rooftop patio with cocktail and tapas bar offers amazing views over Oistins Bay and a choice of six dining options means you are spoilt for choice. You will love the brand-new adults-only Luxury Oceanfront Junior Suites, some of which are swim-up. Suitable also for families with teenagers or groups of friends, upgrade to the Concierge Collection of exquisitely-furnished spacious 1 or 2-bedroom suites with fresh d&#xe9;cor, spacious balconies and inclusive \"Learn to\" experiences such as learn to play steel pan, mix Bajan rum punch or cook a Caribbean dish.&#xa0; &#xa0;&#xa0;</p>",
					telephoneBookableOnly: false,
					vRating: "5",
					hotelDescription: "Opening its doors in September 2021, the new O2 Beach Club &amp; Spa by Ocean Hotels promises one of the coolest beach spots on the Island. Take advantage of the premium All Inclusive offerings before crashing out on your sun lounger that is perfectly pitched by one of the three glittering pools.",
					atAGlance: [
						"New luxury All Inclusive resort",
						"6 dining options and 7 bars including a rooftop bar with views over Oistins Bay",
						"Modern rooms and suites in three collections",
						"Upgrade to the Concierge Collection which include \"Learn To\" experiences"
					],
					location: {
						lat: 13.065146,
						lon: -59.566742
					},
					parentLocation: "Barbados, Caribbean",
					images: [
						{
							RESULTS_CAROUSEL: {
								url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1263712/1263712-1-results_carousel.jpg?version=16"
							},
							MOBILE_MAIN: {
								url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1263712/1263712-1-mobile_main.jpg?version=16"
							},
							IMAGE_DESCRIPTION: ""
						},
						{
							RESULTS_CAROUSEL: {
								url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1263712/1263712-2-results_carousel.jpg?version=16"
							},
							MOBILE_MAIN: {
								url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1263712/1263712-2-mobile_main.jpg?version=16"
							},
							IMAGE_DESCRIPTION: ""
						},

					],
					keyFeatures: [
						{
							description: "Internet Access",
							name: "internet-access"
						},
						{
							description: "Restaurant",
							name: "restaurant"
						},
						{
							description: "Beachfront location",
							name: "beachfront-location"
						},
						{
							description: "Swimming Pool",
							name: "swimming-pool"
						},
						{
							description: "Bar",
							name: "bar"
						},
						{
							description: "Fitness Centre/Gym",
							name: "fitness-centre-gym"
						},
						{
							description: "Evening Entertainment",
							name: "evening-entertainment"
						},
						{
							description: "Spa",
							name: "spa"
						}
					],
					urlName: "o2-beach-club-and-spa-by-ocean-hotels",
					url: "/caribbean/barbados/o2-beach-club-and-spa-by-ocean-hotels",
					parentUrlName: "barbados",
					holidayType: [
						"Beach Holiday"
					],
					boardBasis: [
						"All Inclusive"
					],
					hotelLocation: [
						"Beachfront location"
					],
					accommodationType: [
						"Room"
					],
					hotelFacilities: [
						"Restaurant",
						"Bar",
						"Spa",
						"Evening Entertainment",
						"Fitness Centre/Gym",
						"Internet Access",
						"Swimming Pool",
						"Whirlpool"
					],
					familyKids: [],
					activities: [],
					features: [],
					resortFees: false,
					video: {
						url: "////www.youtube.com/embed/-C0OWQSccjs",
						preview: "////img.youtube.com/vi/-C0OWQSccjs/0.jpg"
					},
					salesMessages: [],
					propertyType: "Hotel",
					hotelEdits: [
						{
							key: "style",
							value: "The Stylish Edit"
						}
					]
				}
			},
			transfer: {
				name: "Seat in Coach",
				transferMode: "Seat in Coach"
			},
			locationWidened: false,
			virginPoints: 12915,
			tierPoints: 240,
			departureDate: "2022-05-20",
			selectedDate: "2022-05-20"
		}
	]
}

describe('<Hotel />', () => {
	let context;
	beforeEach(() => {
		context = shallow(<Hotel hotelItem={mockedResponse.holidays[0]} />);
	});

	test('If alert is shown with proper text', () => {
		const alertMock = jest.spyOn(window,'alert').mockImplementation();

		context.find(Button).props().onClick() 
		expect(alertMock).toBeCalledWith('In development!!!')
	})

	test('If wishlist functionality is rendered', () => {
		const wishlistContext = context.find('.wishlistText')
		expect(wishlistContext.text()).toEqual(`Add to my Wishlist`);

		const wishlistContainer = context.find('.wishlistContainer')
		expect(wishlistContainer.children()).toHaveLength(2);
	})
});
