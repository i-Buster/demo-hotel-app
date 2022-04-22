import { h } from 'preact';
import { htmlEntityDecoder } from '../../utility/helper';
import style from './style.css';

const BulletedList = ({ title = '', itemList = [], dataContainsHtml = false }) => (
	<div>
		<div className={style.boardBasis}>
			{title}
		</div>
		<div>
			<ul className={style.benefitList}>
				{itemList.map((item, index) => {
					return (
						<li key={index.toString()} className={style.bulletIcon}>
							<p className={style.bulletText}>{dataContainsHtml ? htmlEntityDecoder(item) : item}</p>
						</li>
					)
				})}
			</ul>

		</div>
	</div>
);

export default BulletedList;
