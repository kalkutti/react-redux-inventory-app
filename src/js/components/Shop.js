import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Shop extends React.Component {
    
    constructor(props) {
        super(props);

		this._getTime = this._getTime.bind(this);
		this._edit    = this._edit.bind(this);
		this._remove  = this._remove.bind(this);

    }

    componentDidMount() {
		this.props.requestData();
	}

    _getTime(timestamp) {

		var date 	 = new Date(timestamp),
			year     = date.getFullYear(),
			month    = date.getMonth()+1,
			day      = date.getDate();

	    if(month.toString().length == 1) {
	        var month = '0'+month;
	    }
	    if(day.toString().length == 1) {
	        var day = '0'+day;
	    }   
	    
	    var dateTime = year+'/'+month+'/'+day;
	    return dateTime;

	}

	_remove(id) {
		this.props.removeItem(id);
	}

	_edit(id) {
		// coming soon...
		alert('Edit feature comming soon >>> ' + id)
		console.log('_edit', id);
	}

    getItems() {

    	var check = <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>;

    	var rows = [];
    	for (var i = 0; i < this.props.shop.length; i++) {
    		var item = this.props.shop[i];
    		var tax = item.tax === 1 ? check : "";
    		rows.push(
    			<tr key={item.name} className="shop-item">
		    		<th scope="row">{i + 1}</th> 
		    		<td className="left">{item.name}</td>
		    		<td className="left">{item.desc}</td>
		    		<td className="center">{this._getTime(item.date)}</td>
		    		<td className="center">{tax}</td>
		    		<td className="center">${item.price}</td>
		    		<td className="center">
		    			<a 
							type      ="button" 
							onClick   ={this._remove.bind(this, item.id)} 
							className ="btn btn-fade">
				            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
				        </a>

				        <a 
							type      ="button" 
							onClick   ={this._edit.bind(this, item.id)} 
							className ="btn btn-fade">
				            <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
				        </a>

		    		</td>		    		
		    	</tr>
    		)
    		this.props.shop[i]
    	};
    	return rows;
    }


    render() {

    	var items = this.getItems();

        return (
	        <div className="shop">
	        	<table className="table table-hover">
	        		<thead>
						<tr> 
						<th>#</th>
						<th className="left">Name</th>
						<th className="left">Description</th>
						<th className="center">Available on</th>
						<th className="center">Taxable</th>
						<th className="center">Price</th>
						<th className="center">Edit</th>
						</tr>
					</thead>
					
					<ReactCSSTransitionGroup 
						transitionName          = "fade" 
						transitionEnterTimeout  = {500} 
						transitionLeaveTimeout  = {300}
						transitionAppear        = {true} 
						transitionAppearTimeout = {500}
						component               = "tbody" >
						  {items}
					</ReactCSSTransitionGroup>
					
				</table>
	        </div>
	    );
    }
}

export default Shop;
