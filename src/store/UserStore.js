import { extendObservable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import { getCurrentUser } from '../fetch';


const UserStore = function () {
	this.init = function (_fetch) {
		this.fetch = _fetch;
		return this;
	}
	extendObservable(this, {
		currentUser: null
	})
	this.currentUser = fromPromise(getCurrentUser())
};

export default new UserStore();