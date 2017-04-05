import React from 'react';

import BckImg from '../assets/img/iceland.jpg';
import Pic from '../assets/img/km.jpg';

function MiniProfile(props) {
	return (
		<div className="card card-profile mb-4">
			<div className="card-header" style={{"backgroundImage": "url("+BckImg+")"}}></div>
			<div className="card-block text-center">
				<a href="profile/index.html">
					<img className="card-profile-img" alt="presentation" src={Pic}/>
				</a>

				<h5 className="card-title">
					<a className="text-inherit" href="profile/index.html">Kaleb Murphy</a>
				</h5>

				<p className="mb-4">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

				<ul className="card-menu">
					<li className="card-menu-item">
						<a href="#userModal" className="text-inherit" data-toggle="modal">
							Friends
							<h6 className="my-0">1.5</h6>
						</a>
					</li>

					<li className="card-menu-item">
						<a href="#userModal" className="text-inherit" data-toggle="modal">
							Enemies
							<h6 className="my-0">All of them</h6>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MiniProfile;
