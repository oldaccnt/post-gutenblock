import react, { useState } from 'react';
import './editor.scss';

const { __ } = wp.i18n;

const SearchType = props => {
	const handleSelect = select => {
		props.selectQueryType(select.target.value)
	}
	return (
		<div>
			<label htmlFor="queryTypeSelector">Query Type: </label>
			<select name="queryType" id="queryTypeSelector" onChange={handleSelect}>
				<option disabled selected>Select a Query Type</option>
				<option name="posts" value="posts" selected={props.queryType == 'posts'}>Posts</option>
				<option name="pages" value="pages" selected={props.queryType == 'posts'}>Pages</option>
				<option name="categories" value="categories" selected={props.queryType == 'posts'}>Categories</option>
				<option name="taxonomies" value="taxonomies" selected={props.queryType == 'posts'}>Taxonomies</option>
			</select>
		</div>
	)
}

export default SearchType;