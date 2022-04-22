import { h } from 'preact';
import style from './style.css';

const CustomLoader = () => {
	return (
		<div className={style.container}>
		  <div className={style.spinner} />
		</div>
	  );
	};

export default CustomLoader;
