import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.body}>{type}</td>
            <td className={css.body}>{amount}</td>
            <td className={css.body}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
