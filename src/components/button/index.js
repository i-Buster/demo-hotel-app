import { h } from 'preact';
import style from './style.css';

const Button = ({ text = '', customStyles = '', onClick = () => {} }) => (
	<button className={`${style.buttonStyles} ${customStyles}`} type="submit" onClick={onClick}>
		{text}
	</button>
);

export default Button;
