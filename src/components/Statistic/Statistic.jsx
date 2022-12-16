import PropTypes from "prop-types";
import {randColor} from "../randColor";
import {StatSection,BlockList,BlockItem,LabelName,LabelPercent,Title} from "./Statistic.styled";
export const Statistic = ({stats,title}) =>{
    return (<StatSection>
        {title && (<Title>{title}</Title>)}
     <BlockList>
    {stats.map(stat =>{
        const bgStyles = {
            backgroundColor: `${randColor()}`
        }
        return <BlockItem key={stat.id}  style={bgStyles}>
        <LabelName>{stat.label}</LabelName>
        <LabelPercent>%{stat.percentage}</LabelPercent>
      </BlockItem>
         
    })}
        </BlockList>
        </StatSection>)
}

Statistic.propTypes ={ 
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label:PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired,
        }.isRequired)
    )
}








