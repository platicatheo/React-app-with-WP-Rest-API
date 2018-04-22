import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {
  state = {
    series: [],

    seriesName: '',
    isFetching: false
  }

  // componentDidMount() {
  //   fetch('http://clean.auvenit.ro/wp-json/wp/v2/posts')
  //     .then(response => response.json())
  //     .then(json => this.setState({
  //       series: json
  //     }))
  // }

  onSeriesInputChange = e => {
  	this.setState({ seriesName: e.target.value, isFetching: true })
    fetch(`http://clean.auvenit.ro/wp-json/wp/v2/posts?search=${e.target.value}`)
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.setState({
        series: json,
        isFetching: false
      }))
  	// console.log(e)
  	// console.log(this.state)
  }

	render() {
		const { series, seriesName, isFetching } = this.state;
		return (
			<div>
        <Intro message="Here you can find all of your most loved series" />
        <div>
	        <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
        </div>
        { !isFetching && series.length === 0 && seriesName.trim() === ''
        	&&
        	<p>Please enter series name into the input</p>
        }
        {
        	!isFetching && series.length === 0 && seriesName.trim() !== ''
        	&&
        	<p>NO SERIES have been found with this name</p>
        }
        {
        	isFetching && <Loader />
        }
        {
        	!isFetching && <SeriesList list={this.state.series} />
        }        
      </div>
		)
	}
}

export default Series;