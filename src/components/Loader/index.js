import React from 'react';
import loaderSrc from '../../assets/loader.gif';


const Loader = props => (

	<div>
		<img 
			style={{width:'75px', height: '50px'}}
			src={loaderSrc}
			alt="Loader icon"/>
	</div>

)

export default Loader