import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Overview from "./overview";
import Transaction from "./transaction";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

const HomeComponent=()=>{
    const [transaction,isTransaction]=useState([]);
    const [expense,updateExpence]=useState(0);
    const [income,updateIncome]=useState(0);
   
    const calculateBalance=()=>{
        let exp=0;
        let inc=0;
        transaction.map((payload)=>
            payload.type==="EXPENSE"
            ?(exp=exp+payload.amount)
            :(inc=inc+payload.amount)
            
        );
        updateExpence(exp);
        updateIncome(inc);
    };
    useEffect(()=> calculateBalance(),[transaction]);

    const addTransaction=(payload)=>{
        const transactionArray=[...transaction];
        transactionArray.push(payload);
        isTransaction(transactionArray);

    };
    return(
    <Container>
        <Overview addTransaction={addTransaction} expense={expense}  income={income}/>
        <Transaction transaction={transaction}/>
    
    </Container>
    )
}
export default HomeComponent;