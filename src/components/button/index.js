import { h } from 'preact';
import style from './style.css';

const Button = ({ text = '', customStyles = '', onClick = () => {}, isDisabled = false }) => (
	<button className={`${style.buttonStyles} ${customStyles}`} type="submit" onClick={onClick} disabled={isDisabled} >
		{text}
	</button>
);

export default Button;
