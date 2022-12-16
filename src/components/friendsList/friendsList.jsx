import PropTypes from "prop-types";
import { FriendsItem } from "../FriendItem/FriendItem";
import {FrList} from "./FriendsList.styled";

export const FriendsList =({friends}) =>{
    return <FrList>
        {friends.map(friend =>
         <FriendsItem key={friend.id} friend = {friend}></FriendsItem>
            )}
       
    </FrList>
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}

 