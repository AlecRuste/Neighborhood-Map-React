import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class Menu extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			query: '',
			filteredPlaces: [],
			filteredMarkers: []
		};
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			this.setState({
				filteredPlaces: nextProps.places
			});
		}
	}
	
	updateQuery = (query) => {
		this.setState({ query: query });

		let showingLocations;

		let showingMarkers;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');

			showingLocations = this.props.places.filter((place) => 
				match.test(place.venue.name));

			showingMarkers = this.props.markers.filter((marker) => 
				 match.test(marker.name));
				
		} else {
			showingLocations = this.props.places;

			showingMarkers = this.props.markers;

		}

		// NOT WORKING
		//this.props.markerHandler(showingMarkers);

		this.setState({ filteredMarkers: showingMarkers });

		this.setState({ filteredPlaces: showingLocations });
	}
	
	render() {
		return (
			<nav>		
				<div className='sideNav'>
					<div className='locations'>
						<input
							className='search'
							type='filter'
							aria-labelledby="search" 
							placeholder='Filter Locations'
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)} >
						</input>
					</div>
					
					<ol>
						{this.state.filteredPlaces.map((place) => (
							<li key={place.venue.id}>
								{place.venue.name}
							</li>
						))}
					</ol>
				</div>
			</nav>
		);
	}
}

export default Menu;