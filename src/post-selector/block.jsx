import react, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';

const { __ } = wp.i18n;

/**
 * Needed params: queryType: string, selectPost: function
 */

const PostSelect = props => {
	const [ posts, setPosts ] = useState([]);
	const [ next, setNext ] = useState(false);
	const [ postSelect, setPostSelect ] = useState(props.queryType == 'posts' || props.queryType == 'pages');
	useEffect(() => {
		const requestConfig = {
			path: `/wp/v2/${props.queryType}`
		}
		apiFetch(requestConfig).then( postsData => {
			console.log(postsData);
			if( props.queryType == 'taxonomies' ){
				postsData = Object.keys(postsData).map( tax => postsData[tax] );
			}
			setPosts([...postsData])
		});
	},[props.queryType]);

	const jumpForward = (e, link) => {
		if(!link) return;
		e.stopPropagation();
		const nextPath = link.split('v2/')[1];
		handleSelect(false, nextPath);
	}

	const handleSelect = (select, nextPath = false) => {
		if(nextPath){
			props.setQueryType(nextPath);
		}else{
			console.log(select.target);
		}
	}

	return (
		<div>
			<h3>{ props.queryType }</h3>
			<hr></hr>
			<select onChange={handleSelect} multiple={!( !postSelect && props.selectType == 'individual' )}>
			{ 
			props.queryType == 'taxonomies'
			? posts.length && posts.map( taxonomy => <option value={taxonomy.slug} onClick={ taxonomy._links['wp:items'] ? e => jumpForward(e, taxonomy._links['wp:items'][0].href) : () => null } key={taxonomy.slug} >{taxonomy.name}</option> )
			: posts.length && posts.map( post => <option value={post.slug} onClick={ post._links['wp:post_type'] ? e => jumpForward(e, post._links['wp:post_type'][0].href) : () => null } key={post.id} >{post.title ? post.title.rendered : post.slug}</option> ) 
			}
			</select>
		</div>
	)
}

export default PostSelect;