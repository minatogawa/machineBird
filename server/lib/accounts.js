Accounts.onCreateUser(function(options, user){
	user['profile'] = options.profile;
	return user;
});

Meteor.users.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
});