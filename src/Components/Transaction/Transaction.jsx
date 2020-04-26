import React from 'react';
import PropTypes from 'prop-types';
import transactionHistory from './transactinHistori.module.css';

const TransactionHistory = ({ items }) => {
	return (
		<table className={transactionHistory.transaction}>
			<thead>
				<tr>
					<th className={transactionHistory.th_1}>Type</th>
					<th className={transactionHistory.th_1}>Amount</th>
					<th className={transactionHistory.th_1}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item) => (
					<tr className={transactionHistory.tr} key={item.id}>
						<th className={transactionHistory.th_2}>{item.type}</th>
						<th className={transactionHistory.th_2}>{item.amount}</th>
						<th className={transactionHistory.th_2}>{item.currency}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			amount: PropTypes.string,
			currency: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired
};
export default TransactionHistory;
