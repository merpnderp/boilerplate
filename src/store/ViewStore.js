import { extendObservable, action, autorun } from 'mobx';
import { fromPromise } from 'mobx-utils';
import userStore from './UserStore';


const ViewStore = function () {

	this.init = (_fetch) => {
		this.fetch = _fetch;
		return this;
	};

	extendObservable(this, {
		currentUser: null,
		currentView: null,

		get isAuthenticated() {
			return userStore.currentUser != null;
		},

		//Maps the currentView to a URL
		get currentPath() {
			switch (this.currentView.name) {
				case "home": return "/"
				case "signup": return `/signup`
				case "login": return "/login"
				case "preferences": return "/preferences"
			}
		},

		showSignup: action(function () {
			console.log("showSignup called");
			this.currentView = {
				name: "signup"
			}
		}),
		
		showLogin: action(function () {
			this.currentView = {
				name: "login"
			}
		}),

		showHome: action(function () {
			this.currentView = {
				name: "home"
			}
		}),

		showOverview: action(function () {
			this.currentView = {
				name: "overview",
				documents: fromPromise(this.fetch(`/json/documents.json`))
			}
		}),

		performLogin: action(function (username, password, callback) {
			this.fetch(`/json/${username}-${password}.json`)
				.then(user => {
					this.currentUser = user
					callback(true)
				})
				.catch(err => {
					callback(false)
				})
		})
	})

	//Debug line
	autorun(() => { console.log("currentView"); console.log(this.currentView) });

	// setTimeout(action(() => {
	// 	console.log("Setting to signup page")
	// 	this.currentView = {
	// 		name: "signup"
	// 	}
	// }), 2000)
}

export default new ViewStore();