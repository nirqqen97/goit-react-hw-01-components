import { FriendsItem } from "components/friendItem/friendItem";
import {FrList} from "./friendsList.styled";


export const FriendsList =({friends}) =>{
    return <FrList>
        <FriendsItem friends = {friends}></FriendsItem>
    </FrList>
}