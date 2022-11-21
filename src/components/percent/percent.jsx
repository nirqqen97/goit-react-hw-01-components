import PropTypes from "prop-types";
import { BlockList,BlockItem,LabelName,LabelPercent, } from "./percent.styled"
export const PercentBlock = ({statistic})=>{
    return(

    <BlockList>
    {statistic.map(stat =>{
        const bgStyles = {
            backgroundColor: `${randColor()}`
        }
        return <BlockItem key={stat.id}  style={bgStyles}>
        <LabelName>{stat.label}</LabelName>
        <LabelPercent>%{stat.percentage}</LabelPercent>
      </BlockItem>
         
    })}
        </BlockList>)};

const randColor = () =>  {
    const color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    return color;

}
PercentBlock.prototype ={
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}