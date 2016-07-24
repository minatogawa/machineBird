Friendship = new Mongo.Collection('friendships');

Friendship.follow = function(friendId){
	this.insert({
		userId:this.userId,
		friendId:friendId
	});
};

Friendship.unfollow = function(friendId){
	this.remove({
		userId:this.userId,
		friendId: friendId,
	});
};

Friendship.isFollowing = function(friendId){
	return this.findOne({
		userId:this.userId,
		friendId:friendId,
	});
};