import { h } from 'preact';
import { useState } from "preact/hooks";
import style from './style.css';

const Slide = ({ activeIndex, image, itemIndex }) => {
	return (
		<div className={
			itemIndex + 1 === activeIndex ? style.active : style.inactive}
		>
			<img src={image?.RESULTS_CAROUSEL?.url} className={style.carouselImg} />
		</div>
	)
}

const Carousel = ({ imageList = [] }) => {
	const [activeIndex, setActiveIndex] = useState(1);

	const previousImage = () => {
		if (activeIndex <= 1) {
			setActiveIndex(imageList.length);
			return
		}
		setActiveIndex(activeIndex - 1);
	}

	const nextImage = () => {
		if (activeIndex === imageList.length) {
			setActiveIndex(1)
			return
		}
		setActiveIndex(activeIndex + 1)
	}

	return (
		<div>
			{imageList.map((image, index) => <Slide activeIndex={activeIndex} image={image} itemIndex={index} key={index.toString()} />)}
			<div className={style.arrows}>
				<img
					src="/assets/arrow-right.png"
					className={style.leftArrow}
					onClick={previousImage}
					alt="ArrowLeft"
					width="33"
					height="33"
				/>
				<div>{`${activeIndex} of ${imageList?.length}`}</div>
				<img
					src="/assets/arrow-right.png"
					onClick={nextImage}
					className={style.rightArrow}
					alt="ArrowRight"
					width="33"
					height="33"
				/>
			</div>
		</div>
	)
}

export default Carousel