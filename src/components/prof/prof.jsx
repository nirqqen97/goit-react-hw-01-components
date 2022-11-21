import {Prof}  from './prof.styled'
import {Discription} from '../discrip/discription'
export const Profile = ({users}) => {
    return <Prof><Discription username={users.username} tag={users.tag} location={users.location} avatar={users.avatar} stats={users.stats} ></Discription></Prof>
   
};


// Profile.propTypes = {
//     users: PropTypes.exact({
//             username: PropTypes.string.isRequired,
//             tag: PropTypes.string.isRequired,
//             location: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired,
//     // я не очень понял что тут не так, подскажите как исправить пж  
//         })
    
// }

    