import {Profile} from './prof/prof';
import { Stats } from './stats/stats';
import user from '../user.json'
import stats from "../data.json";
import friends from '../friends.json';
import transaction from "../transactions";

import { FriendsList } from './friendsList/friendsList';
import { TransactionHistory } from './transactionHistory/transaction';
export const App = () => {
  return (
    <div>
    <Profile users = {user}></Profile>
    <Stats statistic={stats}></Stats>
    <FriendsList friends = {friends}></FriendsList>
    <TransactionHistory transaction = {transaction}></TransactionHistory>
    </div>
  );
};
