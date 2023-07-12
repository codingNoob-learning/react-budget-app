import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}원</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit className="edit-btn" onClick={() => handleEdit(expense.id)} />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

// export class ExpenseItem extends Component {
//   render() {
//     return (
//       <li className="item">
//         <div className="info">
//           <span className="expense">{this.props.expense.charge}</span>
//           <span className="amount">{this.props.expense.amount}원</span>
//         </div>
//         <div>
//           <button className="edit-btn">
//             <MdEdit />
//           </button>
//           <button
//             className="clear-btn"
//             onClick={() => this.props.handleDelete(this.props.expense.id)}
//           >
//             <MdDelete />
//           </button>
//         </div>
//       </li>
//     );
//   }
// }

// export default ExpenseItem;
