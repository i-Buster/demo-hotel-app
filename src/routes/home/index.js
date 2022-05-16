import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';
import { useState } from "preact/hooks";
import Button from '../../components/button';
import { isHttpSuccess } from '../../utility/helper';
import { API_ENDPOINTS } from '../../utility/constants/api';
import { getDestinationSuggestions } from '../../api/hotel';

const locationIcon = '/assets/location.png'

const Home = () => {
	const [searchText, setSearchText] = useState('');
	const [selectedCity, setSelectedCity] = useState({});
	const [cityList, setCityList] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');

	const formattedDate = selectedDate?.split("-").reverse().join("-");

	const setText = (e) => {
		setSelectedCity(null)
		const targetValue = e.target.value;
		setSearchText(targetValue)

		if (targetValue?.length > 1) {
			callCityApi()
		}
		else setCityList([])
	};

	//TODO: Debounce
	const callCityApi = async () => {
		try {
			const data = await getDestinationSuggestions(searchText)
			setCityList(data?.cityList)
		} catch (e) {
			console.log('error', e.message);
		} finally {
		}
	}

	const searchHotels = () => {
	};

	const handleCitySelection = (selectedCity) => {
		setSearchText(selectedCity.value)
		setSelectedCity(selectedCity)
	}

	const handleDateChange = (event) => {
		const targetValue = event.target.value;
		setSelectedDate(targetValue)
	}

	return (
		<div class={style.home}>
			<div className={style.searchPanel}>
				<form className={style.formStyles} onSubmit={searchHotels} action="javascript:">
					<div className={style.destinationContainer}>
						<label className={style.destinationText}>Destination: </label>
						<div className={style.searchDropdown}>
							<input value={searchText} onInput={setText} className={style.searchBox} placeholder='Search Destination' />
							{cityList?.length > 0 && !selectedCity ?
								<ul className={style.listContainer}>
									<div className={style.destinationSuggestionsTitle}>
										Best Match
									</div>
									{cityList?.map((item) => (
										<div key={item.key} className={style.searchItem} onClick={() => handleCitySelection(item)}>
											<img src={locationIcon} width={20} height={20} className={style.locationIcon} />
											<li value={item.key}>
												{item.value}
											</li>
										</div>
									))}
								</ul>
								:
								null}
						</div>
					</div>
					<div className={style.destinationContainer}>
						<label className={style.destinationText} for="departure">Departure:</label>
						<input className={style.datePicker} type="date" id="departure" name="departure" value={selectedDate} onChange={handleDateChange} min={new Date().toLocaleDateString("sv")} />
					</div>
					<Link href={`/results/${selectedCity?.key}?queryDate=${formattedDate}`}>
						<Button text={'Find Holidays'} isDisabled={!selectedCity?.key || !selectedDate} />
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Home;
