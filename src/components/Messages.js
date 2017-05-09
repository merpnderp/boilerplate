import React from 'react';

function Messages(props) {
	return (
		<div className="modal fade" id="msgModal" tabindex="-1" role="dialog" aria-labelledby="msgModal" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times; </button>
						<button type="button" className="btn btn-sm btn-primary pull-right app-new-msg js-newMsg">New message</button>
						<h4 className="modal-title">Messages</h4>
					</div>

					<div className="modal-body p-a-0 js-modalBody">
						<div className="modal-body-scroller">
							<div className="media-list media-list-users list-group js-msgGroup">
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-fat.jpg"/>
										</span>
										<div className="media-body">
											<strong>Jacob Thornton</strong> and <strong>1 other</strong>
											<div className="media-body-secondary">
												Aenean eu leo quam.Pellentesque ornare sem lacinia quam &hellip;
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-mdo.png"/>
										</span>
										<div className="media-body">
											<strong>Mark Otto</strong> and <strong>3 others</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-dhg.png"/>
										</span>
										<div className="media-body">
											<strong>Dave Gamache</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-fat.jpg"/>
										</span>
										<div className="media-body">
											<strong>Jacob Thornton</strong> and <strong>1 other</strong>
											<div className="media-body-secondary">
												Aenean eu leo quam.Pellentesque ornare sem lacinia quam &hellip;
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-mdo.png"/>
										</span>
										<div className="media-body">
											<strong>Mark Otto</strong> and <strong>3 others</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-dhg.png"/>
										</span>
										<div className="media-body">
											<strong>Dave Gamache</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-fat.jpg"/>
										</span>
										<div className="media-body">
											<strong>Jacob Thornton</strong> and <strong>1 other</strong>
											<div className="media-body-secondary">
												Aenean eu leo quam.Pellentesque ornare sem lacinia quam &hellip;
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-mdo.png"/>
										</span>
										<div className="media-body">
											<strong>Mark Otto</strong> and <strong>3 others</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
								<a href="#" className="list-group-item">
									<div className="media">
										<span className="media-left">
											<img className="img-circle media-object" src="assets/img/avatar-dhg.png"/>
										</span>
										<div className="media-body">
											<strong>Dave Gamache</strong>
											<div className="media-body-secondary">
												Brunch sustainable placeat vegan bicycle rights yeah…
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="hide m-a js-conversation">
								<ul className="media-list media-list-conversation">
									<li className="media media-current-user m-b-md">
										<div className="media-body">
											<div className="media-body-text">
												Aenean eu leo quam.Pellentesque ornare sem lacinia quam venenatis vestibulum.Nulla vitae elit libero, a pharetra augue.Maecenas sed diam eget risus varius blandit sit amet non magna.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Sed posuere consectetur est at lobortis.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Dave Gamache</a> at 4: 20PM
												</small>
											</div>
										</div>
										<a className="media-right" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-dhg.png"/>
										</a>
									</li>

									<li className="media m-b-md">
										<a className="media-left" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-fat.jpg"/>
										</a>
										<div className="media-body">
											<div className="media-body-text">
												Cras justo odio, dapibus ac facilisis in, egestas eget quam.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
											</div>
											<div className="media-body-text">
												Vestibulum id ligula porta felis euismod semper.Aenean lacinia bibendum nulla sed consectetur.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Nullam quis risus eget urna mollis ornare vel eu leo.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
											</div>
											<div className="media-body-text">
												Cras mattis consectetur purus sit amet fermentum.Donec sed odio dui.Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Nulla vitae elit libero, a pharetra augue.Donec id elit non mi porta gravida at eget metus.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Fat</a> at 4: 28PM
												</small>
											</div>
										</div>
									</li>

									<li className="media m-b-md">
										<a className="media-left" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-mdo.png"/>
										</a>
										<div className="media-body">
											<div className="media-body-text">
												Etiam porta sem malesuada magna mollis euismod.Donec id elit non mi porta gravida at eget metus.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Etiam porta sem malesuada magna mollis euismod.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Aenean lacinia bibendum nulla sed consectetur.
											</div>
											<div className="media-body-text">
												Curabitur blandit tempus porttitor.Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Mark Otto</a> at 4: 20PM
												</small>
											</div>
										</div>
									</li>

									<li className="media media-current-user m-b-md">
										<div className="media-body">
											<div className="media-body-text">
												Aenean eu leo quam.Pellentesque ornare sem lacinia quam venenatis vestibulum.Nulla vitae elit libero, a pharetra augue.Maecenas sed diam eget risus varius blandit sit amet non magna.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Sed posuere consectetur est at lobortis.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Dave Gamache</a> at 4: 20PM
												</small>
											</div>
										</div>
										<a className="media-right" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-dhg.png"/>
										</a>
									</li>

									<li className="media m-b-md">
										<a className="media-left" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-fat.jpg"/>
										</a>
										<div className="media-body">
											<div className="media-body-text">
												Cras justo odio, dapibus ac facilisis in, egestas eget quam.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
											</div>
											<div className="media-body-text">
												Vestibulum id ligula porta felis euismod semper.Aenean lacinia bibendum nulla sed consectetur.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Nullam quis risus eget urna mollis ornare vel eu leo.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
											</div>
											<div className="media-body-text">
												Cras mattis consectetur purus sit amet fermentum.Donec sed odio dui.Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Nulla vitae elit libero, a pharetra augue.Donec id elit non mi porta gravida at eget metus.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Fat</a> at 4: 28PM
												</small>
											</div>
										</div>
									</li>

									<li className="media m-b">
										<a className="media-left" href="#">
											<img className="img-circle media-object" src="assets/img/avatar-mdo.png"/>
										</a>
										<div className="media-body">
											<div className="media-body-text">
												Etiam porta sem malesuada magna mollis euismod.Donec id elit non mi porta gravida at eget metus.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Etiam porta sem malesuada magna mollis euismod.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Aenean lacinia bibendum nulla sed consectetur.
											</div>
											<div className="media-body-text">
												Curabitur blandit tempus porttitor.Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
											</div>
											<div className="media-footer">
												<small className="text-muted">
													<a href="#">Mark Otto</a> at 4: 20PM
												</small>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Messages;