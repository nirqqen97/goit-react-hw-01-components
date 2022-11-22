import { HistoryBody, Td, Tr } from "./payment.styled"
import PropTypes from "prop-types";
export const Payment = ({transaction})=>{
return <HistoryBody>
    {transaction.map(tr =>{
        return(
            <Tr key={tr.id}>
            <Td>{tr.type}:</Td>
            <Td>{tr.amount}</Td>
            <Td>{tr.currency}</Td>
            </Tr>
        )
    })}
</HistoryBody> 
}

Payment.propTypes ={
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            
        })
    )
}

