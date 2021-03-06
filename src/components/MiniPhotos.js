import React from 'react';

function MiniPhotos(props) {
	return (
		<div className="panel panel-default visible-md-block visible-lg-block">
			<div className="panel-body">
				<h5 className="m-t-0">Photos <small>· <a href="#">Edit</a></small></h5>
				<div data-grid="images" data-target-height="150">
					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_5.jpg"/>
					</div>
					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_6.jpg"/>
					</div>

					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_7.jpg"/>
					</div>

					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_8.jpg"/>
					</div>

					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_9.jpg"/>
					</div>
					<div>
						<img role="presentation" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_10.jpg"/>
					</div>
				</div>
			</div>
		</div>

	)
}


export default MiniPhotos;