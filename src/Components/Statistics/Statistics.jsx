import React from 'react';
import PropTypes from 'prop-types';
import stylesSt from './statistics.module.css';
import arrColor from './arrColor';

const Statistics = ({ title, stats }) => {
	return (
		<section className={stylesSt.statistics}>
			<h2 className={stylesSt.title}>{title}</h2>
			<ul className={stylesSt['stat-list']}>
				{stats.map((el) => (
					<li
						className={stylesSt.item}
						style={{
							backgroundColor: arrColor[Math.floor(Math.random() * arrColor.length)]
						}}
						key={el.id}
					>
						<span className="label">{el.label}</span>
						<span className={stylesSt.percentage}>{el.percentage} %</span>
					</li>
				))}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired
};

// Statistics.defaultProps = {
//   title: "Upload stats"
// };

export default Statistics;
