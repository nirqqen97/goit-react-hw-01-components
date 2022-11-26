import { Head } from "components/transactionHead/trHead"
import { Table } from "./transaction.styled"
import {Payment} from "../payments/payment";

export const TransactionHistory = ({transaction}) =>{
   
return( <Table>
      <Head></Head>
      <Payment transaction = {transaction}></Payment>
  </Table>
)}