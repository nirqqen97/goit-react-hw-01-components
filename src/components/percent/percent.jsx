import PropTypes from "prop-types";
import {randColor} from "../randColor";

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


PercentBlock.prototype ={
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}