import { h } from 'preact';
import style from './style.css';

const Note = ({ text = '', customStyles = '' }) => (
	<div className={`${style.container} ${customStyles}`}>
		{text}
	</div>
);

export default Note;
