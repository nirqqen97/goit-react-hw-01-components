export function onlineCheck(online) {
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