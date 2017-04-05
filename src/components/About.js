import React from 'react';

function About(props) {
	return (
		<div className="card visible-md-block visible-lg-block mb-4">
			<div className="card-block">
				<h5 className="mb-3">About <small>· <a href="#">Edit</a></small></h5>
				<ul className="list-unstyled list-spaced">
					<li><span className="text-muted icon icon-calendar mr-3"></span>Went to <a href="#">School of soft knocks</a></li>
					<li><span className="text-muted icon icon-users mr-3"></span>Became friends with <a href="#">Obama</a></li>
					<li><span className="text-muted icon icon-github mr-3"></span>Worked at <a href="#">Givehub</a></li>
					<li><span className="text-muted icon icon-home mr-3"></span>Lives in <a href="#">A house</a></li>
					<li><span className="text-muted icon icon-location-pin mr-3"></span>From <a href="#">Earth</a></li>
				</ul>
			</div>
		</div>
	)
}

export default About;