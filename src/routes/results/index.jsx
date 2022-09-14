import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import { API_ENDPOINTS } from '../../utility/constants/api';
import style from './style.css';
import { isHttpSuccess } from '../../utility/helper';
import CustomLoader from '../../components/customLoader';
import { hotelFacilitiesList, priceRangeList, starRatingList } from '../../utility/constants';
import Hotel from './subComponents/hotel';
import { getHotelList } from '../../api/hotel';

const SearchResultsPage = ({ queryLocation, queryDate }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [filteredSearchResults, setfilteredSearchResults] = useState([]);
	const [filters, setFilters] = useState({ hotelFacilities: false, starRatings: false, priceRange: false });
	const [checked, setChecked] = useState([]);
	const [selectedStars, setSelectedStars] = useState([]);
	const [priceRange, setPriceRange] = useState([]);

	useEffect(() => {
		callHotelsApi()
		// setSearchResults(mockResponse?.holidays)
		// setfilteredSearchResults(mockResponse?.holidays)
	}, []);

	useEffect(() => {
		const filteredResult = searchResults?.filter((item) => {
			if (checked?.length === 0 || checked?.every(facility => item?.hotel?.content?.hotelFacilities?.includes(facility))) {
				if (selectedStars?.length === 0 || selectedStars?.some(star => item?.hotel?.content?.starRating?.includes(star))) {
					if (priceRange?.length === 0 || priceRange?.some(price => {
						if (price === 'belowThousand') {
							return item?.pricePerPerson < 1000
						}
						if (price === 'betweenOneAndTwoThousand') {
							return item?.pricePerPerson >= 1000 && item?.pricePerPerson <= 2000
						}
						if (price === 'overTwoThousand') {
							return item?.pricePerPerson > 2000
						}
					})) return true
					return false
				} return false
			} return false
		})
		setfilteredSearchResults(filteredResult)
	}, [checked, searchResults, selectedStars, priceRange])

	const callHotelsApi = async () => {
		try {
			setIsLoading(true);

			const body = {
				bookingType: "holiday",
				path: "holiday",
				location: queryLocation,
				departureDate: queryDate,
				duration: "7",
				gateway: "LHR",
				direct: false,
				partyCompositions: [
					{
						adults: 2,
						childAges: [],
						infants: 0
					}
				]
			}
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': "application/json;charset=utf-8",
					'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
				},
				body: JSON.stringify(body)
			}
			const data = await getHotelList(options)
			setSearchResults(data?.holidays)
			setfilteredSearchResults(data?.holidays)

		} catch (e) {
			console.log('error', e?.message);

		} finally {
			setIsLoading(false);
		}
	}

	const handleFilterAccordian = (filterType) => {
		setFilters((prevState) => ({ ...prevState, [filterType]: !filters[filterType] }))
	}

	const handleCheck = (event) => {
		const isChecked = event.target.checked
		const targetValue = event.target.value

		let updatedList = [...checked];
		if (isChecked) {
			updatedList = [...checked, targetValue];
		} else {
			updatedList.splice(checked.indexOf(targetValue), 1);
		}
		setChecked(updatedList);
	};

	const handleStarCheck = (event) => {
		const isChecked = event.target.checked
		const targetValue = event.target.value

		let updatedList = [...selectedStars];
		if (isChecked) {
			updatedList = [...selectedStars, targetValue];
		} else {
			updatedList.splice(selectedStars.indexOf(targetValue), 1);
		}
		setSelectedStars(updatedList);
	};

	const handlePriceRangeCheck = (event, itemKey) => {
		const isChecked = event.target.checked

		let updatedList = [...priceRange];
		if (isChecked) {
			updatedList = [...priceRange, itemKey];
		} else {
			updatedList.splice(priceRange.indexOf(itemKey), 1);
		}
		setPriceRange(updatedList);
	};

	if (isLoading) {
		return <CustomLoader />
	}

	return (
		<div className={style.mainContainer}>

			<div className={style.filterContainer}>
				<div className={style.filterTitle}>Filter by..</div>
				<div className={style.hotelFacilitiesContainer}>
					<div id="hotelFacilitiesCollapsible" className={style.hotelFacilitiesTitleContainer} onClick={() => handleFilterAccordian('hotelFacilities')}>
						<div className={style.hotelFacilitiesTitle}>Hotel Facilities</div>
						<img src={'/assets/arrow-right.png'} width={33} height={33} className={filters.hotelFacilities ? style.expanded : style.collapsed} />
					</div>
					{filters.hotelFacilities && hotelFacilitiesList.map((item) => (
						<div id="hotelFacilitiesItem" key={item.key}>
							<input value={item.name} type="checkbox" onChange={handleCheck}
							/>
							<span>{item.name}</span>
						</div>
					))}
				</div>

				<div className={style.hotelFacilitiesContainer}>
					<div className={style.hotelFacilitiesTitleContainer} onClick={() => handleFilterAccordian('starRatings')}>
						<div className={style.hotelFacilitiesTitle}>Rating</div>
						<img src={'/assets/arrow-right.png'} width={33} height={33} className={filters.starRatings ? style.expanded : style.collapsed} />
					</div>
					{filters.starRatings && starRatingList.map((item) => (
						<div key={item.key}>
							<input value={item.name} type="checkbox" onChange={handleStarCheck}
							/>
							{[...Array(Number(item.name))].map((item) => (
								<img key={item} src={'/assets/starRating.svg'} width={12} height={12} className={style.starIcon} />
							))}
						</div>
					))}
				</div>

				<div className={style.hotelFacilitiesContainer}>
					<div className={style.hotelFacilitiesTitleContainer} onClick={() => handleFilterAccordian('priceRange')}>
						<div className={style.hotelFacilitiesTitle}>Price</div>
						<img src={'/assets/arrow-right.png'} width={33} height={33} className={filters.priceRange ? style.expanded : style.collapsed} />
					</div>
					{filters.priceRange && priceRangeList.map((item) => (
						<div key={item.key}>
							<input value={item.name} type="checkbox" onChange={(event) => handlePriceRangeCheck(event, item.key)}
							/>
							<span>{item.name}</span>
						</div>
					))}
				</div>

			</div>

			<div className={style.hotelListContainer}>
				<div className={style.totalResultsTitle}>
					{`${filteredSearchResults?.length} holiday${filteredSearchResults?.length !== 1 ? 's' : ''} found`}
				</div>
				<div id="listOfHotels">
					{filteredSearchResults?.map(hotelItem => <Hotel hotelItem={hotelItem} key={hotelItem?.hotel?.id} />
				)}
				</div>
			</div>
		</div>
	);
}

export default SearchResultsPage;
