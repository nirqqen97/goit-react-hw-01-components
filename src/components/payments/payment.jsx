import { HistoryBody, Td, Tr } from "./payment.styled"



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