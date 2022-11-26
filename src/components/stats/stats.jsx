import PropTypes from "prop-types";
import { PercentBlock } from "components/percent/percent";
import {StatSection} from "./stats.styled";
export const Stats = ({statistic}) =>{
    return (<StatSection>
    <PercentBlock statistic={statistic}></PercentBlock>
        </StatSection>)
}

Stats.propTypes ={ 
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label:PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired,
        })
    )
}








