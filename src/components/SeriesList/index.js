import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesListItem = ({ series }) => (
	<li>
		<Link to={`/series/${series.id}`}>
			{series.title.rendered}
		</Link>
	</li>
)

class SeriesList extends React.Component {

	render() {
		return (
			<div>
				<ul className="series-list">
					{this.props.list.map( series =>(
						<SeriesListItem series={series} key={series.id}/>	
					))}
				</ul>
			</div>
		)
	}
}

export default SeriesList;