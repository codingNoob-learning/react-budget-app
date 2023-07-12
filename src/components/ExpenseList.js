import React from "react";
import "./ExpenseList.css";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({
  expenses,
  handleDelete,
  handleEdit,
  clearItems,
}) => {
  return (
    <>
      <ul className="list">
        {/* Expense Item */}
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록지우기 <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
// export class ExpenseList extends Component {
//   render() {
//     const expenses = this.props.initialExpenses;

//     return (
//       <>
//         <ul className="list">
//           {/* Expense Item */}
//           {expenses.map((expense) => {
//             return (
//               <ExpenseItem
//                 key={expense.id}
//                 expense={expense}
//                 handleDelete={this.props.handleDelete}
//               />
//             );
//           })}
//         </ul>
//         <button className="btn">
//           목록지우기 <MdDelete className="btn-icon" />
//         </button>
//       </>
//     );
//   }
// }

// export default ExpenseList;
