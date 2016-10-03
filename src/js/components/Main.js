import React from 'react';

import Shop from './Shop';
import ShopAddItem from './ShopAddItem';

class Main extends React.Component { 
	render() {
		return (
			<div className="col-xs-12 col-sm-9 col-md-9 col-lg-8 col-centered">
				<h3 className="left">Your Shop Inventory</h3>
				<hr />
				<Shop {...this.props} />
				<hr />
				<ShopAddItem {...this.props} />
			</div>
		);
	}
};

export default Main;