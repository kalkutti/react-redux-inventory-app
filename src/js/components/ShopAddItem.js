import React from 'react';

class ShopAddItem extends React.Component {

	constructor(props) {
        super(props);
		this.state     = {alert:false}
		this.addItem   = this.addItem.bind(this);
		this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
    	if (this.state.alert != false)
    		this.setState({alert:false});
	}

    validate() {

    	this.setState({alert:false});

    	let name    = this.refs.name.value;
    	if (name.length == 0) {
    		this.refs.name.focus();
    		this.setState({alert:"Please fill the item name"});
    		return false;
    	}

    	let desc    = this.refs.desc.value;
    	if (desc.length == 0) {
    		this.refs.desc.focus();
			this.setState({alert:"Please add an item description"});
    		return false;
    	}

    	let date    = this.refs.date.value;
    	if (date.length == 0) {
    		this.refs.date.focus();
    		// add date validation here...
    		this.setState({alert:"Please add availability date"});
    		return false;
    	}

    	let price    = this.refs.price.value;
    	if (price <= 0) {
    		this.refs.price.focus();
    		this.setState({alert:"Please set a price for your item"});
    		return false;
    	}

    	return true;

    }


    addItem(event) {
    	event.preventDefault();

    	if (this.validate()) {

			var name  = this.refs.name.value;
			var desc  = this.refs.desc.value;
			var date  = this.refs.date.value;
			var price = this.refs.price.value;
			var tax   = this.refs.tax.checked;

			// console.log(name, desc, price, date, tax);
			this.props.addItem( name, desc, price, date, tax );

			// reset
			this.refs.form.reset();

    	}
    }


    render() {

    	var alert = this.state.alert === false ? "" : <div className="alert clearfix fade-in" >{this.state.alert}</div>;

    	return (
    		<div className="left">
    		 	
    			<form ref="form">

    				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    					<div className="form-group">
						    <label>Name</label>
						    <input type="text" className="form-control" id="name" placeholder="Name" ref="name" onChange={this._onChange} />
						  </div>
						  <div className="form-group">
						    <label>Description</label>
						    <textarea className="form-control" id="desc" placeholder="Description" ref="desc" rows="3" onChange={this._onChange} />
						  </div>
    				</div>

    				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

    					<div className="form-group">
    						<label>Available on</label>
						    <input type="date" className="form-control" id="name" placeholder="Date" ref="date" onChange={this._onChange} />
    					</div>

    					<div className="form-group">
    						<div className="checkbox">
							    <label>
							      <input type="checkbox" ref="tax" /> Taxable
							    </label>
							</div>
    					</div>

    					<div className="form-group">
    						<label>Price</label>
    						<div className="input-group"> 
						        <span className="input-group-addon">$</span>
						        <input type="number"  min="0" step="0.01" data-number-to-fixed="2" data-number-stepfactor="100" className="form-control currency" id="price" ref="price" onChange={this._onChange} />
						    </div>
    					</div>

    				</div>
				  
					  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
						  {alert}
						  <button type="submit" className="btn btn-add" onClick={this.addItem}>Add Item
						  	<span className="glyphicon glyphicon-plus pull-right"></span>
						  </button>
					  </div>
				  
				</form>

    		</div>
    	);
    }

}

export default ShopAddItem;