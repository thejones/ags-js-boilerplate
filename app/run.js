/**
 *Not currently using this file. Will include in future versions. 
 */

require({
	// The base path for all packages and modules. If you don't provide this, baseUrl defaults to the directory
	// that contains dojo.js. Since all packages are in the root, we just leave it blank. (If you change this, you
	// will also need to update `app.profile.js`).
	baseUrl: '',

	// A list of packages to register. Strictly speaking, you do not need to register any packages,
	// but you can't require "app" and get app/main.js if you do not register the "app" package (the loader will look
	// for a module at <baseUrl>/app.js instead). Unregistered packages also cannot use the `map` feature, which
	// might be important to you if you need to relocate dependencies. TL;DR, register all your packages all the time:
	// it will make your life easier.
	packages: [
		'jquery',

		// For reference, this is what a more verbose package declaration looks like.
		{ name: 'app', location: 'app', map: {} }
	]
// Require `app`. This loads the main application module, `app/main`, since we registered the `app` package above.
}, [ 'app' ]);