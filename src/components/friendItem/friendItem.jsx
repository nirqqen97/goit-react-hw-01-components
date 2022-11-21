import PropTypes from "prop-types";
import { LiItem,OnlineCircle,Avatar,Name } from "./friendItem.styled"
export const FriendsItem = ({friends})=>{
  return friends.map(fr=>{
       return <LiItem key={fr.id}>
              <OnlineCircle style={onlineCheck(fr.isOnline)}></OnlineCircle>
              <Avatar src={fr.avatar} alt="User avatar"></Avatar>
              <Name>{fr.name}</Name>
            </LiItem>

    })
}


FriendsItem.propTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

function onlineCheck(online) {
    if (online) {
        const bgStyles = {
            backgroundColor: "green"
        }        
        return bgStyles
    } else {
        const bgStyles = {
            backgroundColor: "red"
        }    
        return bgStyles
    }
}