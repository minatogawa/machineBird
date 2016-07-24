Router.route('/user/:_id', {
	template:'user',
	data: function(){
		var currentUser = this.params._id;
		return Meteor.users.findOne({_id:'currentUser'});
	}
});
Router.route('/', {
	name:'home',
	template:'home',
});

Router.configure({
	layoutTemplate:'main',
});
