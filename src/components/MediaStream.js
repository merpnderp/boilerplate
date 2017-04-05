import React from 'react';

import KM from '../assets/img/km.jpg';

function MediaStream(props) {
	return (
		<ul className="list-group media-list media-list-stream mb-4">

			<li className="media list-group-item p-4">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Message" />
					<div className="input-group-btn">
						<button type="button" className="btn btn-default">
							<span className="icon icon-camera"></span>
						</button>
					</div>
				</div>
			</li>
			<li className="media list-group-item p-4">
				<img className="media-object d-flex align-self-start mr-3"alt="Personal Icon" src={KM} />
				<div className="media-body">
					<div className="media-heading">
						<small className="pull-right text-muted">4 min</small>
						<h6>Kaleb Murphy</h6>
					</div>

					<p>
						If this were real, this is where I'd write interesting and useful thing. Perhaps even post some pictures.
						Aenean lacinia bibendum nulla sed consectetur.Vestibulum id ligula porta felis euismod semper.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Vestibulum id ligula porta felis euismod semper.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					</p>

					<div className="media-body-inline-grid" data-grid="images">
						<div style={{ display: "none" }}>
							<img role="presentation" data-action="zoom" data-width="1050" data-height="700" src="assets/img/unsplash_1.jpg" />
						</div>

						<div style={{ display: "none" }}>
							<img role="presentation" data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_1.jpg" />
						</div>

						<div style={{ display: "none" }}>
							<img role="presentation" data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_13.jpg" />
						</div>

						<div style={{ display: "none" }}>
							<img role="presentation" data-action="zoom" data-width="1048" data-height="700" src="assets/img/unsplash_2.jpg" />
						</div>
					</div>

					<ul className="media-list mb-2">
						<li className="media mb-3">
							<img className="media-object d-flex align-self-start mr-3" alt="Personal Icon" src={KM} />
							<div className="media-body">
								<strong>Kaleb Murphy: </strong>
								This is me replying to my own comments.
								Donec id elit non mi porta gravida at eget metus.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec ullamcorper nulla non metus auctor fringilla.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Sed posuere consectetur est at lobortis.
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ul>

	)
}

export default MediaStream;
