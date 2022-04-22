import { h } from 'preact';
import style from './style.css';
import Note from '../../components/note';
import Button from '../../components/button';
import BulletedList from '../../components/bulletedList';
import Carousel from '../../components/Carousel';

const Hotel = ({ hotelItem }) => {
	const isHotelTypeVilla = hotelItem?.hotel?.content?.propertyType === 'Villa'

	const handleViewHotelDetails = () => {
		alert('In development!!!')
	}
	return (
		<div className={style.hotelContainer}>
			<div className={style.hotelTopContainer}>
				<div className={style.imageContainer}>
					<Carousel imageList={hotelItem?.hotel?.content?.images || []} />
				</div>

				<div className={style.hotelDetailsContainer}>

					<div className={style.midHotelDetailsSection}>
						<div className={style.hotelName}>
							{hotelItem?.hotel?.name}
						</div>
						<div className={style.hotelParentLocation}>
							{hotelItem?.hotel?.content?.parentLocation}
						</div>
						<div className={style.ratingsContainer}>
							<div>
								{isHotelTypeVilla
									?
									<div className={style.villa}>Villa</div>
									:
									<div>
										<img src={hotelItem?.hotel?.tripAdvisor?.ratingImageUrl} width={100} className={style.tripAdvisorImage} />
										<div className={style.tripAdvisorCount}>
											{`Based on ${hotelItem?.hotel?.tripAdvisor?.numReviews} reviews`}
										</div>
									</div>
								}
							</div>

						</div>
						<BulletedList title={hotelItem?.hotel?.boardBasis} itemList={hotelItem?.hotel?.content?.atAGlance} dataContainsHtml />
					</div>

					<div className={style.hotelActionSection}>
						<div className={style.amountsContainer}>
							<div>
								<div className={style.individualAmount}>
									{`£${Math.round(hotelItem?.pricePerPerson)}`}
									<span className={style.currencyType}>pp</span>
								</div>
								<div className={style.totalAmountContainer}>
									{`Total for 2 guests`}
									<span className={style.totalAmountStyles}>{` £${Math.round(hotelItem?.totalPrice)}`}</span>
								</div>
							</div>
							<div>
								<img
									src="/assets/direct-debit-payment.jpg"
									className={style.directDebitStyles}
									alt="DirectDebit"
									width="68"
									height="22"
								/>
								<div className={style.paymentAmountStyles}>{`from £${hotelItem?.directDebitSchedule?.[0]?.paymentAmount}`}</div>
							</div>
						</div>
						<div className={style.inclusions}>
							{`Includes: Economy Classic flights, 1 ${isHotelTypeVilla ? 'villa' : 'room'}. ATOL protected.`}
						</div>
						<Note text={`Secure now for £${hotelItem?.depositPerPerson}pp`} customStyles={style.noteStyles} />
						<Button text={'View Details'} customStyles={style.viewDetailsButton} onClick={handleViewHotelDetails} />
						<div className={style.wishlistContainer}>
							<img
								src="/assets/wishlist.svg"
								className={style.wishlistIcon}
								alt="Wishlist"
								width="12"
								height="12"
							/>
							<span className={style.wishlistText}>
								Add to my Wishlist
							</span>
						</div>
						<div className={style.virginPointsText}>
							Earn from <span className={style.virginPointsHighlight}>{hotelItem?.virginPoints}</span> extra Virgin Points and <span className={style.virginPointsHighlight}>{hotelItem?.tierPoints}</span> Tier Points
						</div>
					</div>
				</div>
			</div>
			{/* <div className={style.flightDetailsContainer}>Bottom</div> */}
		</div>
	)
}

export default Hotel;
