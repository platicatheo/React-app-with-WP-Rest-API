import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
	state = {
		show: null,
		show_img: null
	}

	componentDidMount() {
		const {id} = this.props.match.params;
    fetch(`http://clean.auvenit.ro/wp-json/wp/v2/posts/${id}?_embed`)
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.setState({
        show: json
      }))
	}

	render() {
		// console.log(this.props);
		const {show} = this.state;
		return (
			<div>
				{ show === null &&  <Loader /> }
				{ show !== null && 
					<div>
						<p>Show title -- {show.title.rendered}</p>
						Show Content -- {show.content.rendered}
						<p>Show Date -- {show.date} </p>
						{ show._embedded['wp:featuredmedia'] &&
							<img alt="Show" src={show._embedded['wp:featuredmedia']['0'].source_url} />
						}
					</div>
				}
			</div>
		)
	}

}

export default SingleSeries;