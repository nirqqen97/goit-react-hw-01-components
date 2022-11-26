import PropTypes from "prop-types";
import { FriendsItem } from "components/friendItem/friendItem";
import {FrList} from "./friendsList.styled";
export const FriendsList =({friends}) =>{
    return <FrList>
        {friends.map(friends =>
         <FriendsItem key={friends.id} friends = {friends}></FriendsItem>
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

