import React from 'react';

import Rock from '../assets/img/rock.jpg';
import Eastwood from '../assets/img/eastwood.jpg';

function Friends(props) {
  return (
    <div className="card mb-4 hidden-md-down">
      <div className="card-block">
        <h5 className="mb-3">Likes <small>· <a href="#">View All</a></small></h5>
        <ul className="media-list media-list-stream">
          <li className="media mb-2">
            <img className="media-object d-flex align-self-start mr-3" alt="Personal icon" src={Rock} />
            <div className="media-body">
              <strong>Dwanye Johnson</strong> @therock
              <div className="media-body-actions">
                <button className="btn btn-outline-primary btn-sm">
                  <span className="icon icon-add-user"></span> Follow</button>
              </div>
            </div>
          </li>
          <li className="media">
            <a className="media-left" href="#">
              <img className="media-object d-flex align-self-start mr-3" src={Eastwood} alt="presentation" />
            </a>
            <div className="media-body">
              <strong>Clint Eastwood</strong> @Eastwood_
              <div className="media-body-actions">
                <button className="btn btn-outline-primary btn-sm">
                  <span className="icon icon-add-user"></span> Follow</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        With friends like these, who needs more friends?
      </div>
    </div >

  )
}

export default Friends;
