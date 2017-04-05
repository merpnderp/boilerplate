import React from 'react';

import Iceland from '../assets/img/instagram_2.jpg';

function Advertisement(props) {
	return (
		<div className="card mb-4 hidden-md-down">
			<div className="card-block">
				<h5 className="mb-3">Sponsored</h5>
				<div data-grid="images" data-target-height="150">
					<img style={{height: '100%', width:"95%", display: "block", margin: "0 auto"}} className="media-object" role="presentation"
						data-width="640" data-height="640" data-action="zoom" src={Iceland}/>
				</div>
				<p><strong>It might be time to visit Iceland.</strong> Iceland is so chill, and everything looks cool here.Also, we heard the people are pretty nice.What are you waiting for?</p>
				<button className="btn btn-outline-primary btn-sm">Buy a ticket</button>
			</div>
		</div>
	)
}

export default Advertisement;