import React, { useState } from "react";
import styled from "styled-components";

const Container=styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 350px;
`
const Balance=styled.div`
    font-size: 18px;
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: space-between;
    align-items: center;

`
const Add=styled.div`
    background-color: skyblue;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
`
const AddTransactionContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 10px;
    margin: 10px 10px;
    border: 1px solid grey;
    width: 100%;
    & input{
        outline: none;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid grey;
    }
`
const Radiobox=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    & input{
        width: unset;
        margin: 10px 10px;
    }
`
const ExpenseContainer=styled.div`
    display: flex;
    flex-direction: row;
    gap:12px;
    margin: 20px;
`
const ExpenseBox=styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 15px 20px;
    width: 130px;
    font-size: 15px;
    
    & span{
        font-weight: bold;
        font-size: 20px;
        color:red;
    }
    
`
const IncomeBox=styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 15px 20px;
    width: 130px;
    font-size: 15px;
    
    & span{
        font-weight: bold;
        font-size: 20px;
        color:green;
    }
    
`

const AddTransactionView=(props)=>{
    const [amount,setAmount]=useState();
    const [desc,setDesc]=useState();
    const [type,setType]=useState("EXPENSE");
    const addTransaction=()=>{
        props.addTransaction({amount:Number(amount),desc,type,id:Date.now()});
        props.isVisibletrans();
    }
   
    

    return(
        <AddTransactionContainer>
            <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
            <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <Radiobox>
                <input type="radio" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
                <label>Expense</label>
                <input type="radio" name="type" value="INCOME" checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
                <label>Income</label>
            </Radiobox>
            <Add onClick={addTransaction}>Add Transaction</Add>
        </AddTransactionContainer>
    )

}

const Overview=(props)=>{
    const [visibletrans,isVisibletrans]=useState(false);
    return(
    <Container>
        <Balance style={{fontWeight:"bold"}}>Balance:${props.income - props.expense}
        <Add onClick={()=>isVisibletrans(!visibletrans)}>
            {visibletrans?"Cancel":"ADD"}
        </Add>
        </Balance>
        {visibletrans && <AddTransactionView isVisibletrans={isVisibletrans} addTransaction={props.addTransaction}/>}
        <ExpenseContainer>
        <ExpenseBox>
            Expense<span>${props.expense}</span>
        </ExpenseBox>
        <IncomeBox>
            Income<span>${props.income}</span>
        </IncomeBox>
        </ExpenseContainer>

    </Container>
    )
}
export default Overview;