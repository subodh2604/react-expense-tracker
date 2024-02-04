import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Transaction(props) {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div>
            <li className={sign==='-'?"minus":"plus"}>
                {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span><button className="delete-btn" onClick={()=>{deleteTransaction(props.transaction.id)}}>x</button>
            </li>
        </div>
    )
}
