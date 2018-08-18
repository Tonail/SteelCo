import React, { Component } from 'react'
import Carousel from '../../components/dashboard/carousel'

class Dashboard extends Component {

render() {
	return(
		<div className="container">
			<div className="dashboard-container">
				<Carousel/>
				
			</div>
		</div>
		)
	} 
}

export default Dashboard