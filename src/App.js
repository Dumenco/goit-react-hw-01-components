import React from 'react';

import UserProfiles from './Components/UserProfiles/UserProfiles';
import user from './dataBase/user.json';

import Statistics from './Components/Statistics/Statistics';
import statisticalData from './dataBase/statistical-data.json';

import FriendsList from './Components/FriendsList/FriendsList'
import friends from './dataBase/friends.json';

import TransactionHistory from './Components/Transaction/Transaction'
import transactions from './dataBase/transactions.json'

function App() {
  return (
    <>
       <UserProfiles name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />,
       <Statistics title="Upload stats" stats={statisticalData}/>,
       <FriendsList friends={friends} />,
       <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
