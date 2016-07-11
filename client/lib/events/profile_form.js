Template.profileForm.events({
	"submit form":function(e,template){
		e.preventDefault();
		var inputs = template.findAll("input");
		// var user = Meteor.users.findOne({_id:Meteor.userId()});
		Meteor.users.update(
			{_id:Meteor.userId()},
			{ $set:
				{ "profile.name": inputs[0].value,
				  "profile.about": inputs[1].value }
				});
		Session.set("editProfile", false);
	}

});