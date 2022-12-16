import PropTypes from "prop-types";
import {Prof,Disc, User, Tag, Location, Avatar,SubList,SubItem,Label,Quantity}  from './prof.styled'
export const Profile = ({username,tag,location,avatar,stats}) => {
    return <Prof>
        <Disc> 
           <Avatar src={avatar} alt='User avatar'/>
    <User>{username}</User>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
    <SubList>
    <SubItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </SubItem>
    <SubItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </SubItem>
    <SubItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </SubItem>
  </SubList>
    </Disc>
      </Prof> 
};
Profile.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}.isRequired)
}