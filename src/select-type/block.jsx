import react, { useState } from 'react';
import './editor.scss';

const { __ } = wp.i18n;

/**
 * Needed params: queryType: string, selectPost: function
 */

const SelectType = props => {
	const handleSelect = select => {
		props.setSelectionType(select.target.value);
	}
	return (
		<div>
			<label htmlFor="selectionTypeSelector">Selection Type: </label>
			<select name="queryType" id="selectionTypeSelector" onChange={handleSelect}>
				<option disabled selected>Choose a Selection Type</option>
				<option name="group" value="group">Group</option>
				<option name="Individual" value="Individual">Individual</option>
			</select>
		</div>
	)
}

export default SelectType;