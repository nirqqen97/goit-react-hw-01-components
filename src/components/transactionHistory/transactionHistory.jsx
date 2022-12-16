import PropTypes from "prop-types";
import { Table, Names, Tr, TrHead,HistoryBody, Td } from "./transaction.styled"
export const TransactionHistory = ({transaction}) =>{
   
return( <Table>
      <TrHead>
        <Tr>
      <Names>Type</Names>
      <Names>Amount</Names>
      <Names>Currency</Names>
      </Tr>
    </TrHead>
    <HistoryBody>
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
  </Table>
)}
TransactionHistory.propTypes ={
  transaction: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
          
      }.isRequired)
  )
}