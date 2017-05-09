import { Router } from 'director';
import { autorun } from 'mobx';

export function startRouter(store) {

	// update state currentView on url change
	const router = new Router({
		"" : ()=>store.showHome(),
		"signup": () => store.showSignup(),
		"login": () => store.showLogin(),
		"preferences": () => store.showPreferences(),
		"test": () => store.showDocuments()
		// "/document/:documentId": (id) => store.showDocument(id),
	}).configure({
		notfound: () => store.showHome(),
		html5history: true
	}).init()

	// update url on state changes
	autorun(() => {
		const path = store.currentPath
		if (path !== window.location.pathname)
			window.history.pushState(null, null, path)
	})

}