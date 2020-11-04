import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title }) => {
	return (
		<div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">{title}</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
