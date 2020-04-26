import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import stylesFriends from './stylesFriends.module.css';

const FriendsList = ({ friends }) => {
	return (
		<section className={stylesFriends.friendsListSec}>
			<FriendListItem friends={friends} />
		</section>
	);
};

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default FriendsList;
