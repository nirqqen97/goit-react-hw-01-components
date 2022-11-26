import PropTypes from "prop-types";
import {Prof}  from './prof.styled'
import {Discription} from '../discrip/discription'
export const Profile = ({username,tag,location,avatar,stats}) => {
    return <Prof>
        <Discription 
            username={username} 
            tag={tag} 
            location={location} 
            avatar={avatar} 
            stats={stats} >
                </Discription>
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
})
}