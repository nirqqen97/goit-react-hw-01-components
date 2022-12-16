import {Profile} from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
// import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from './transactionHistory/transactionHistory';
import user from '../data/user'
import stats from "../data/data";
// import friends from '../data/friends';
import transaction from "../data/transactions";
export const App = () => {
  return (
    <div>
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistic stats ={stats}/>
    {/* <FriendsList friends = {friends}/> */}
    <TransactionHistory transaction = {transaction}/>
    </div>
  );
};
