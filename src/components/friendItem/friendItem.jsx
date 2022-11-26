import PropTypes from "prop-types";
import {onlineCheck} from "../onlineCheck";

import { LiItem,OnlineCircle,Avatar,Name } from "./friendItem.styled"
export const FriendsItem = ({friends})=>{
  return <LiItem>
  <OnlineCircle style={onlineCheck(friends.isOnline)}></OnlineCircle>
  <Avatar src={friends.avatar} alt="User avatar"></Avatar>
  <Name>{friends.name}</Name>
</LiItem>   
}
FriendsItem.propTypes ={
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
}


