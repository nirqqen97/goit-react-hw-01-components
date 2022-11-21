import { PercentBlock } from "components/percent/percent";
import {StatSection} from "./stats.styled";


export const Stats = ({statistic}) =>{
    return (<StatSection>
    <PercentBlock statistic={statistic}></PercentBlock>
        </StatSection>)
    
    
}



