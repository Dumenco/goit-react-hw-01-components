import PropTypes from 'prop-types';
import stylesFriends from './stylesFriends.module.css';
import React from 'react';

const FriendListItem = ({ friends }) => {
	return (
		<ul className={stylesFriends.friendList}>
			{friends.map((friend) => (
				<li key={friend.id} className={stylesFriends.friendItem}>
					<span className={friend.isOnline ? stylesFriends.green : stylesFriends.red} />
					<img className={stylesFriends.avatar} src={friend.avatar} alt={friend.name} width="48" />
					<p className={stylesFriends.name}>{friend.name}</p>
				</li>
			))}
		</ul>
	);
};

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired
		})
	).isRequired
};

export default FriendListItem;
