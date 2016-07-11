Accounts.ui.config({
	extraSignupFields:[{
		fieldName:'name',
		fieldLabel:'Nome',
	}],
	requestPermissions:{
		facebook:['email', 'user_about_me'],
		google:['email', 'profile']
	},

	// requestPermissions:{
	// 	google:['email']
	// }
})

// google:['email', 'user_about_me']