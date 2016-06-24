Template.post.events({
	'submit form': function(e,t){
		e.preventDefault();
		var textarea = t.find("textarea");
		Post.publish(textarea.value);
		textarea.value = '';
		return false;
	}
})