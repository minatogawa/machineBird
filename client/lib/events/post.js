Template.post.events({
	'submit form': function(e,t){
		e.preventDefault();
		var textarea = t.find("textarea");
		var name = Meteor.user().profile.name;
		Post.publish(textarea.value, name);
		textarea.value = '';
		return false;
	}
})