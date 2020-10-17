import react, { useState } from 'react';
import './editor.scss';

const { __ } = wp.i18n;

/**
 * Needed params: queryType: string, selectPost: function
 */

const SelectCount = props => {
	const [count, setCount] = useState(props.postCount);
	const handleSelect = select => {
		props.setPostCount(select.target.value);
		setCount(select.target.value);
	}
	return (
		<div>
			<label htmlFor="selectionTypeSelector">Max Number of Posts to Display: </label>
			<input type="number" name="postCount" id="postCount" onChange={handleSelect} min="1" max="20" value={count} required></input>
		</div>
	)
}
v
export default SelectCount;