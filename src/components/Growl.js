import React from 'react';

function Growl(props) {
	return (
		<div className="alert alert-warning alert-dismissible hidden-md-down" role="alert">
			<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times; </span></button>
			<a className="alert-link" href="profile/index.html">Visit your profile!</a> Check your self, you aren't looking too good.
		</div>
	)
}

export default Growl;