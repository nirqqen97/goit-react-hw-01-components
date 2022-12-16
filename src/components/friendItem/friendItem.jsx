import PropTypes from "prop-types";
import {onlineCheck} from "../onlineCheck";

import { LiItem,OnlineCircle,Avatar,Name } from "./FriendItem.styled"
export const FriendsItem = ({friend})=>{
  return <LiItem>
  <OnlineCircle style={onlineCheck(friend.isOnline)}></OnlineCircle>
  <Avatar src={friend.avatar} alt="User avatar"></Avatar>
  <Name>{friend.name}</Name>
</LiItem>   
}
FriendsItem.propTypes ={
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
}


