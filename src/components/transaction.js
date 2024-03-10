import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 22px;
    font-size: 20px;
    width: 100%;
    gap: 10px;
    font-weight:bold;
    /* & input{
        padding: 10px 10px;
        border-radius: 12px;
        background: lightgrey;
        border: none;
        outline: none;
        width: 350px;

    } */
`
const Cell=styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 12px;
    width: 330px;
    font-size:15px;
    border-radius: 3px;
    align-items: center;
    font-weight: normal;
    justify-content: space-between;
    border: 1px solid grey;
    border-right: 4px solid ${(props)=>(props.isExpense ? "red" : "green")};

`
const TransactionCell=(props)=>{

    return(
        <Cell isExpense={props.payload?.type==="EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>${props.payload.amount}</span>
        </Cell>
    )
}

const Transaction=(props)=>{
    return(
    <Container>Transactions
        {/* <input placeholder="Search"/> */}
        {props.transaction?.length ? props.transaction.map((
            (payload)=>(<TransactionCell payload={payload}/>)

        )) : ""}
    </Container>
    )
}
export default Transaction;