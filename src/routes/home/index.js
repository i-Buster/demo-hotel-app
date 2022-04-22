import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';
import { useState } from "preact/hooks";
import Button from '../../components/button';

const Home = () => {
	const [searchText, setSearchText] = useState('');
	const setText = (e) => {
		setSearchText(e.target.value)
	};

	const searchHotels = () => {
	};

	return (
		<div class={style.home}>
			<div className={style.searchPanel}>
				<form className={style.formStyles} onSubmit={searchHotels} action="javascript:">
					<label>
						<span className={style.destinationText}>Destination: </span>
						<input value={searchText} onInput={setText} className={style.searchBox} />
					</label>
					<Link href="/results">
						<Button text={'Find Holidays'} />
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Home;
