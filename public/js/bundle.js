(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reciveData = exports.requestData = exports.onRemoveItem = exports.removeItem = exports.onAddItem = exports.addItem = exports.RECIVE_DATA = exports.REMOVE_ITEM = exports.ADD_ITEM = exports.SET_USER = exports.API_URL = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = "http://localhost:3000/api";
var SET_USER = exports.SET_USER = "SET_USER";
var ADD_ITEM = exports.ADD_ITEM = "ADD_ITEM";
var REMOVE_ITEM = exports.REMOVE_ITEM = "REMOVE_ITEM";
var RECIVE_DATA = exports.RECIVE_DATA = "RECIVE_DATA";

//-----------------------------------------------//

var addItem = exports.addItem = function addItem(name, desc, price, date, tax) {
	return function (dispatch) {

		_axios2.default.post(API_URL + '/shop/add', { name: name, desc: desc, price: price, date: date, tax: tax }).then(function (response) {
			// console.log(response);
			if (response.data.id != -1) dispatch(onAddItem(response.data.id, name, desc, price, date, tax));
		}).catch(function (error) {
			console.log(error);
		});
	};
};

var onAddItem = exports.onAddItem = function onAddItem(id, name, desc, price, date, tax) {
	return {
		type: ADD_ITEM,
		id: id,
		name: name,
		desc: desc,
		price: price,
		date: date,
		tax: tax
	};
};

var removeItem = exports.removeItem = function removeItem(id) {
	return function (dispatch) {

		_axios2.default.post(API_URL + '/shop/remove', { id: id }).then(function (response) {
			// console.log(response);
			if (response.data.id != -1) dispatch(onRemoveItem(response.data.id));
		}).catch(function (error) {
			console.log(error);
		});
	};
};

var onRemoveItem = exports.onRemoveItem = function onRemoveItem(id) {
	return {
		type: REMOVE_ITEM,
		id: id
	};
};

//-----------------------------------------------//

var requestData = exports.requestData = function requestData() {
	return function (dispatch) {

		_axios2.default.get(API_URL + '/shop').then(function (response) {
			// console.log(response);
			dispatch(reciveData(response.data));
		}).catch(function (error) {
			console.log(error);
		});
	};
};

var reciveData = exports.reciveData = function reciveData(data) {
	return {
		type: RECIVE_DATA,
		data: data
	};
};

},{"axios":"axios"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define the provider/router


//components
var provider = _react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_App2.default, null)
);

// store


// Provider
// react


function init() {
  (0, _reactDom.render)(provider, document.getElementById('exp'));
}

// not really needed but...
// make sure we get to see the preloader as well.
// setTimeout(function() { init(); }, 3000);
init();

var mooo = 'eheh';

},{"./components/App":3,"./store":9,"react":"react","react-dom":"react-dom","react-redux":"react-redux"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionCreators = require('../actions/actionCreators');

var actionCreators = _interopRequireWildcard(_actionCreators);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	return {
		shop: state.shop
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
}

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);
exports.default = App;

},{"../actions/actionCreators":1,"./Main":4,"react-redux":"react-redux","redux":"redux"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Shop = require('./Shop');

var _Shop2 = _interopRequireDefault(_Shop);

var _ShopAddItem = require('./ShopAddItem');

var _ShopAddItem2 = _interopRequireDefault(_ShopAddItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	_createClass(Main, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'col-xs-12 col-sm-9 col-md-9 col-lg-8 col-centered' },
				_react2.default.createElement(
					'h3',
					{ className: 'left' },
					'Your Shop Inventory'
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_Shop2.default, this.props),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_ShopAddItem2.default, this.props)
			);
		}
	}]);

	return Main;
}(_react2.default.Component);

;

exports.default = Main;

},{"./Shop":5,"./ShopAddItem":6,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var _ReactCSSTransitionGroup2 = _interopRequireDefault(_ReactCSSTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shop = function (_React$Component) {
	_inherits(Shop, _React$Component);

	function Shop(props) {
		_classCallCheck(this, Shop);

		var _this = _possibleConstructorReturn(this, (Shop.__proto__ || Object.getPrototypeOf(Shop)).call(this, props));

		_this._getTime = _this._getTime.bind(_this);
		_this._edit = _this._edit.bind(_this);
		_this._remove = _this._remove.bind(_this);

		return _this;
	}

	_createClass(Shop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.requestData();
		}
	}, {
		key: '_getTime',
		value: function _getTime(timestamp) {

			var date = new Date(timestamp),
			    year = date.getFullYear(),
			    month = date.getMonth() + 1,
			    day = date.getDate();

			if (month.toString().length == 1) {
				var month = '0' + month;
			}
			if (day.toString().length == 1) {
				var day = '0' + day;
			}

			var dateTime = year + '/' + month + '/' + day;
			return dateTime;
		}
	}, {
		key: '_remove',
		value: function _remove(id) {
			this.props.removeItem(id);
		}
	}, {
		key: '_edit',
		value: function _edit(id) {
			// coming soon...
			alert('Edit feature comming soon >>> ' + id);
			console.log('_edit', id);
		}
	}, {
		key: 'getItems',
		value: function getItems() {

			var check = _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok', 'aria-hidden': 'true' });

			var rows = [];
			for (var i = 0; i < this.props.shop.length; i++) {
				var item = this.props.shop[i];
				var tax = item.tax === 1 ? check : "";
				rows.push(_react2.default.createElement(
					'tr',
					{ key: item.name, className: 'shop-item' },
					_react2.default.createElement(
						'th',
						{ scope: 'row' },
						i + 1
					),
					_react2.default.createElement(
						'td',
						{ className: 'left' },
						item.name
					),
					_react2.default.createElement(
						'td',
						{ className: 'left' },
						item.desc
					),
					_react2.default.createElement(
						'td',
						{ className: 'center' },
						this._getTime(item.date)
					),
					_react2.default.createElement(
						'td',
						{ className: 'center' },
						tax
					),
					_react2.default.createElement(
						'td',
						{ className: 'center' },
						'$',
						item.price
					),
					_react2.default.createElement(
						'td',
						{ className: 'center' },
						_react2.default.createElement(
							'a',
							{
								type: 'button',
								onClick: this._remove.bind(this, item.id),
								className: 'btn btn-fade' },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-trash', 'aria-hidden': 'true' })
						),
						_react2.default.createElement(
							'a',
							{
								type: 'button',
								onClick: this._edit.bind(this, item.id),
								className: 'btn btn-fade' },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-wrench', 'aria-hidden': 'true' })
						)
					)
				));
				this.props.shop[i];
			};
			return rows;
		}
	}, {
		key: 'render',
		value: function render() {

			var items = this.getItems();

			return _react2.default.createElement(
				'div',
				{ className: 'shop' },
				_react2.default.createElement(
					'table',
					{ className: 'table table-hover' },
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'th',
								null,
								'#'
							),
							_react2.default.createElement(
								'th',
								{ className: 'left' },
								'Name'
							),
							_react2.default.createElement(
								'th',
								{ className: 'left' },
								'Description'
							),
							_react2.default.createElement(
								'th',
								{ className: 'center' },
								'Available on'
							),
							_react2.default.createElement(
								'th',
								{ className: 'center' },
								'Taxable'
							),
							_react2.default.createElement(
								'th',
								{ className: 'center' },
								'Price'
							),
							_react2.default.createElement(
								'th',
								{ className: 'center' },
								'Edit'
							)
						)
					),
					_react2.default.createElement(
						_ReactCSSTransitionGroup2.default,
						{
							transitionName: 'fade',
							transitionEnterTimeout: 500,
							transitionLeaveTimeout: 300,
							transitionAppear: true,
							transitionAppearTimeout: 500,
							component: 'tbody' },
						items
					)
				)
			);
		}
	}]);

	return Shop;
}(_react2.default.Component);

exports.default = Shop;

},{"react":"react","react/lib/ReactCSSTransitionGroup":"react/lib/ReactCSSTransitionGroup"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopAddItem = function (_React$Component) {
  _inherits(ShopAddItem, _React$Component);

  function ShopAddItem(props) {
    _classCallCheck(this, ShopAddItem);

    var _this = _possibleConstructorReturn(this, (ShopAddItem.__proto__ || Object.getPrototypeOf(ShopAddItem)).call(this, props));

    _this.state = { alert: false };
    _this.addItem = _this.addItem.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(ShopAddItem, [{
    key: "_onChange",
    value: function _onChange(event) {
      if (this.state.alert != false) this.setState({ alert: false });
    }
  }, {
    key: "validate",
    value: function validate() {

      this.setState({ alert: false });

      var name = this.refs.name.value;
      if (name.length == 0) {
        this.refs.name.focus();
        this.setState({ alert: "Please fill the item name" });
        return false;
      }

      var desc = this.refs.desc.value;
      if (desc.length == 0) {
        this.refs.desc.focus();
        this.setState({ alert: "Please add an item description" });
        return false;
      }

      var date = this.refs.date.value;
      if (date.length == 0) {
        this.refs.date.focus();
        // add date validation here...
        this.setState({ alert: "Please add availability date" });
        return false;
      }

      var price = this.refs.price.value;
      if (price <= 0) {
        this.refs.price.focus();
        this.setState({ alert: "Please set a price for your item" });
        return false;
      }

      return true;
    }
  }, {
    key: "addItem",
    value: function addItem(event) {
      event.preventDefault();

      if (this.validate()) {

        var name = this.refs.name.value;
        var desc = this.refs.desc.value;
        var date = this.refs.date.value;
        var price = this.refs.price.value;
        var tax = this.refs.tax.checked;

        // console.log(name, desc, price, date, tax);
        this.props.addItem(name, desc, price, date, tax);

        // reset
        this.refs.form.reset();
      }
    }
  }, {
    key: "render",
    value: function render() {

      var alert = this.state.alert === false ? "" : _react2.default.createElement(
        "div",
        { className: "alert clearfix fade-in" },
        this.state.alert
      );

      return _react2.default.createElement(
        "div",
        { className: "left" },
        _react2.default.createElement(
          "form",
          { ref: "form" },
          _react2.default.createElement(
            "div",
            { className: "col-xs-12 col-sm-6 col-md-6 col-lg-6" },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Name"
              ),
              _react2.default.createElement("input", { type: "text", className: "form-control", id: "name", placeholder: "Name", ref: "name", onChange: this._onChange })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Description"
              ),
              _react2.default.createElement("textarea", { className: "form-control", id: "desc", placeholder: "Description", ref: "desc", rows: "3", onChange: this._onChange })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-xs-12 col-sm-6 col-md-6 col-lg-6" },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Available on"
              ),
              _react2.default.createElement("input", { type: "date", className: "form-control", id: "name", placeholder: "Date", ref: "date", onChange: this._onChange })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "div",
                { className: "checkbox" },
                _react2.default.createElement(
                  "label",
                  null,
                  _react2.default.createElement("input", { type: "checkbox", ref: "tax" }),
                  " Taxable"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "input-group" },
                _react2.default.createElement(
                  "span",
                  { className: "input-group-addon" },
                  "$"
                ),
                _react2.default.createElement("input", { type: "number", min: "0", step: "0.01", "data-number-to-fixed": "2", "data-number-stepfactor": "100", className: "form-control currency", id: "price", ref: "price", onChange: this._onChange })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
            alert,
            _react2.default.createElement(
              "button",
              { type: "submit", className: "btn btn-add", onClick: this.addItem },
              "Add Item",
              _react2.default.createElement("span", { className: "glyphicon glyphicon-plus pull-right" })
            )
          )
        )
      );
    }
  }]);

  return ShopAddItem;
}(_react2.default.Component);

exports.default = ShopAddItem;

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _shop = require('./shop');

var _shop2 = _interopRequireDefault(_shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	shop: _shop2.default
});

// combine all your reducers into one root reducer
exports.default = rootReducer;

},{"./shop":8,"redux":"redux"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actionCreators = require("../actions/actionCreators");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var shop = function shop() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	var action = arguments[1];

	switch (action.type) {

		case _actionCreators.RECIVE_DATA:
			return action.data;

		case _actionCreators.ADD_ITEM:
			var item = {
				name: action.name,
				desc: action.desc,
				price: action.price,
				date: action.date,
				tax: action.tax,
				id: action.id
			};
			state = state.concat([item]);
			return state;

		case _actionCreators.REMOVE_ITEM:
			var found = state.findIndex(function (item) {
				return item.id === action.id;
			});
			if (found > -1) {
				return [].concat(_toConsumableArray(state.slice(0, found)), _toConsumableArray(state.slice(found + 1)));
			}
			return state;

		default:
			return state;
	}
	return state;
};

exports.default = shop;

},{"../actions/actionCreators":1}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load external data if needed
// import messages from "./data/data.js";
var user = false;

// defualt data goes here..


// get the global reducer
var defaultState = {
	shop: []
};

var middleware = [_reduxThunk2.default];

// create the store
var store = (0, _redux.createStore)(_index2.default, defaultState, _redux.applyMiddleware.apply(undefined, middleware));

// auto refresh our module.
if (module.hot) {
	module.hot.accept('./reducers', function () {
		var nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

exports.default = store;

},{"./reducers/index":7,"react-router-redux":"react-router-redux","redux":"redux","redux-thunk":"redux-thunk"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWN0aW9ucy9hY3Rpb25DcmVhdG9ycy5qcyIsInNyYy9qcy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9NYWluLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvU2hvcC5qcyIsInNyYy9qcy9jb21wb25lbnRzL1Nob3BBZGRJdGVtLmpzIiwic3JjL2pzL3JlZHVjZXJzL2luZGV4LmpzIiwic3JjL2pzL3JlZHVjZXJzL3Nob3AuanMiLCJzcmMvanMvc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVPLElBQU0sNEJBQWMsMkJBQXBCO0FBQ0EsSUFBTSw4QkFBYyxVQUFwQjtBQUNBLElBQU0sOEJBQWMsVUFBcEI7QUFDQSxJQUFNLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTSxvQ0FBYyxhQUFwQjs7QUFFUDs7QUFFTyxJQUFNLDRCQUFVLFNBQVYsT0FBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQixHQUExQjtBQUFBLFFBQWtDLG9CQUFZOztBQUVwRSxrQkFBTSxJQUFOLENBQVksVUFBVSxXQUF0QixFQUFtQyxFQUFFLFVBQUYsRUFBUSxVQUFSLEVBQWMsWUFBZCxFQUFxQixVQUFyQixFQUEyQixRQUEzQixFQUFuQyxFQUNFLElBREYsQ0FDTyxVQUFVLFFBQVYsRUFBb0I7QUFDekI7QUFDQSxPQUFJLFNBQVMsSUFBVCxDQUFjLEVBQWQsSUFBb0IsQ0FBQyxDQUF6QixFQUNDLFNBQVMsVUFBVSxTQUFTLElBQVQsQ0FBYyxFQUF4QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3QyxLQUF4QyxFQUErQyxJQUEvQyxFQUFxRCxHQUFyRCxDQUFUO0FBQ0QsR0FMRixFQU1FLEtBTkYsQ0FNUSxVQUFVLEtBQVYsRUFBaUI7QUFDdkIsV0FB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QUFDQSxDQWhDRDs7a0JBa0NlLEk7Ozs7Ozs7OztBQ3BDZjs7QUFDQTs7QUFDQTs7OztBQUdBOzs7Ozs7QUFFQTtBQUNBO0FBQ0EsSUFBTSxPQUFPLEtBQWI7O0FBRUE7OztBQVBBO0FBUUEsSUFBTSxlQUFlO0FBQ3BCLE9BQU87QUFEYSxDQUFyQjs7QUFJQSxJQUFNLGFBQWEsc0JBQW5COztBQUVBO0FBQ0EsSUFBTSxRQUFRLHlDQUViLFlBRmEsRUFHYix3Q0FBbUIsVUFBbkIsQ0FIYSxDQUFkOztBQU1BO0FBQ0EsSUFBSSxPQUFPLEdBQVgsRUFBZ0I7QUFDZixRQUFPLEdBQVAsQ0FBVyxNQUFYLENBQWtCLFlBQWxCLEVBQWdDLFlBQU07QUFDckMsTUFBTSxrQkFBa0IsUUFBUSxrQkFBUixFQUE0QixPQUFwRDtBQUNBLFFBQU0sY0FBTixDQUFxQixlQUFyQjtBQUNBLEVBSEQ7QUFJQTs7a0JBRWMsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgQVBJX1VSTCAgICAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIjtcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiAgICA9IFwiU0VUX1VTRVJcIjtcbmV4cG9ydCBjb25zdCBBRERfSVRFTSAgICA9IFwiQUREX0lURU1cIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9IFwiUkVNT1ZFX0lURU1cIjtcbmV4cG9ydCBjb25zdCBSRUNJVkVfREFUQSA9IFwiUkVDSVZFX0RBVEFcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKG5hbWUsIGRlc2MsIHByaWNlLCBkYXRlLCB0YXgpID0+IGRpc3BhdGNoID0+IHtcblxuXHRheGlvcy5wb3N0KCBBUElfVVJMICsgJy9zaG9wL2FkZCcsIHsgbmFtZSwgZGVzYywgcHJpY2UsIGRhdGUsIHRheCB9KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEuaWQgIT0gLTEpXG5cdFx0XHRcdGRpc3BhdGNoKG9uQWRkSXRlbShyZXNwb25zZS5kYXRhLmlkLCBuYW1lLCBkZXNjLCBwcmljZSwgZGF0ZSwgdGF4KSlcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9KTtcblxufVxuXG5leHBvcnQgY29uc3Qgb25BZGRJdGVtID0gKGlkLCBuYW1lLCBkZXNjLCBwcmljZSwgZGF0ZSwgdGF4KSA9PiAoe1xuXHR0eXBlOiBBRERfSVRFTSxcblx0aWQsXG5cdG5hbWUsXG5cdGRlc2MsXG5cdHByaWNlLFxuXHRkYXRlLFxuXHR0YXhcbn0pXG5cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XG5cblx0YXhpb3MucG9zdCggQVBJX1VSTCArICcvc2hvcC9yZW1vdmUnLCB7IGlkIH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5pZCAhPSAtMSlcblx0XHRcdFx0ZGlzcGF0Y2gob25SZW1vdmVJdGVtKHJlc3BvbnNlLmRhdGEuaWQpKVxuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH0pO1xuXG59XG5cbmV4cG9ydCBjb25zdCBvblJlbW92ZUl0ZW0gPSAoaWQpID0+ICh7XG5cdHR5cGU6IFJFTU9WRV9JVEVNLFxuXHRpZFxufSlcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0RGF0YSA9ICgpID0+IGRpc3BhdGNoID0+IHtcblxuXHRheGlvcy5nZXQoIEFQSV9VUkwgKyAnL3Nob3AnKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0ZGlzcGF0Y2gocmVjaXZlRGF0YShyZXNwb25zZS5kYXRhKSlcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9KTtcblxufVxuXG5leHBvcnQgY29uc3QgcmVjaXZlRGF0YSA9IChkYXRhKSA9PiAoe1xuXHR0eXBlOiBSRUNJVkVfREFUQSxcblx0ZGF0YVxufSkiLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIFByb3ZpZGVyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy9jb21wb25lbnRzXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5cbi8vIHN0b3JlXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcblxuLy8gZGVmaW5lIHRoZSBwcm92aWRlci9yb3V0ZXJcbmNvbnN0IHByb3ZpZGVyID0gKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8QXBwIC8+XG5cdDwvUHJvdmlkZXI+XG4pO1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcmVuZGVyKCBcbiAgICBcdHByb3ZpZGVyLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwJylcbiAgICApO1xufVxuXG4vLyBub3QgcmVhbGx5IG5lZWRlZCBidXQuLi5cbi8vIG1ha2Ugc3VyZSB3ZSBnZXQgdG8gc2VlIHRoZSBwcmVsb2FkZXIgYXMgd2VsbC5cbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGluaXQoKTsgfSwgMzAwMCk7XG5pbml0KCk7XG5cblxudmFyIG1vb28gPSAnZWhlaCc7IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbkNyZWF0b3JzXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHNob3A6IHN0YXRlLnNob3Bcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xufVxuXG5jb25zdCBBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2hvcCBmcm9tICcuL1Nob3AnO1xuaW1wb3J0IFNob3BBZGRJdGVtIGZyb20gJy4vU2hvcEFkZEl0ZW0nO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTkgY29sLW1kLTkgY29sLWxnLTggY29sLWNlbnRlcmVkXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsZWZ0XCI+WW91ciBTaG9wIEludmVudG9yeTwvaDM+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8U2hvcCB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxTaG9wQWRkSXRlbSB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC9saWIvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAnO1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLl9nZXRUaW1lID0gdGhpcy5fZ2V0VGltZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX2VkaXQgICAgPSB0aGlzLl9lZGl0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5fcmVtb3ZlICA9IHRoaXMuX3JlbW92ZS5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5yZXF1ZXN0RGF0YSgpO1xuXHR9XG5cbiAgICBfZ2V0VGltZSh0aW1lc3RhbXApIHtcblxuXHRcdHZhciBkYXRlIFx0ID0gbmV3IERhdGUodGltZXN0YW1wKSxcblx0XHRcdHllYXIgICAgID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuXHRcdFx0bW9udGggICAgPSBkYXRlLmdldE1vbnRoKCkrMSxcblx0XHRcdGRheSAgICAgID0gZGF0ZS5nZXREYXRlKCk7XG5cblx0ICAgIGlmKG1vbnRoLnRvU3RyaW5nKCkubGVuZ3RoID09IDEpIHtcblx0ICAgICAgICB2YXIgbW9udGggPSAnMCcrbW9udGg7XG5cdCAgICB9XG5cdCAgICBpZihkYXkudG9TdHJpbmcoKS5sZW5ndGggPT0gMSkge1xuXHQgICAgICAgIHZhciBkYXkgPSAnMCcrZGF5O1xuXHQgICAgfSAgIFxuXHQgICAgXG5cdCAgICB2YXIgZGF0ZVRpbWUgPSB5ZWFyKycvJyttb250aCsnLycrZGF5O1xuXHQgICAgcmV0dXJuIGRhdGVUaW1lO1xuXG5cdH1cblxuXHRfcmVtb3ZlKGlkKSB7XG5cdFx0dGhpcy5wcm9wcy5yZW1vdmVJdGVtKGlkKTtcblx0fVxuXG5cdF9lZGl0KGlkKSB7XG5cdFx0Ly8gY29taW5nIHNvb24uLi5cblx0XHRhbGVydCgnRWRpdCBmZWF0dXJlIGNvbW1pbmcgc29vbiA+Pj4gJyArIGlkKVxuXHRcdGNvbnNvbGUubG9nKCdfZWRpdCcsIGlkKTtcblx0fVxuXG4gICAgZ2V0SXRlbXMoKSB7XG5cbiAgICBcdHZhciBjaGVjayA9IDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+O1xuXG4gICAgXHR2YXIgcm93cyA9IFtdO1xuICAgIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3AubGVuZ3RoOyBpKyspIHtcbiAgICBcdFx0dmFyIGl0ZW0gPSB0aGlzLnByb3BzLnNob3BbaV07XG4gICAgXHRcdHZhciB0YXggPSBpdGVtLnRheCA9PT0gMSA/IGNoZWNrIDogXCJcIjtcbiAgICBcdFx0cm93cy5wdXNoKFxuICAgIFx0XHRcdDx0ciBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwic2hvcC1pdGVtXCI+XG5cdFx0ICAgIFx0XHQ8dGggc2NvcGU9XCJyb3dcIj57aSArIDF9PC90aD4gXG5cdFx0ICAgIFx0XHQ8dGQgY2xhc3NOYW1lPVwibGVmdFwiPntpdGVtLm5hbWV9PC90ZD5cblx0XHQgICAgXHRcdDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+e2l0ZW0uZGVzY308L3RkPlxuXHRcdCAgICBcdFx0PHRkIGNsYXNzTmFtZT1cImNlbnRlclwiPnt0aGlzLl9nZXRUaW1lKGl0ZW0uZGF0ZSl9PC90ZD5cblx0XHQgICAgXHRcdDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJcIj57dGF4fTwvdGQ+XG5cdFx0ICAgIFx0XHQ8dGQgY2xhc3NOYW1lPVwiY2VudGVyXCI+JHtpdGVtLnByaWNlfTwvdGQ+XG5cdFx0ICAgIFx0XHQ8dGQgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG5cdFx0ICAgIFx0XHRcdDxhIFxuXHRcdFx0XHRcdFx0XHR0eXBlICAgICAgPVwiYnV0dG9uXCIgXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2sgICA9e3RoaXMuX3JlbW92ZS5iaW5kKHRoaXMsIGl0ZW0uaWQpfSBcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID1cImJ0biBidG4tZmFkZVwiPlxuXHRcdFx0XHQgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuXHRcdFx0XHQgICAgICAgIDwvYT5cblxuXHRcdFx0XHQgICAgICAgIDxhIFxuXHRcdFx0XHRcdFx0XHR0eXBlICAgICAgPVwiYnV0dG9uXCIgXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2sgICA9e3RoaXMuX2VkaXQuYmluZCh0aGlzLCBpdGVtLmlkKX0gXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9XCJidG4gYnRuLWZhZGVcIj5cblx0XHRcdFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi13cmVuY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG5cdFx0XHRcdCAgICAgICAgPC9hPlxuXG5cdFx0ICAgIFx0XHQ8L3RkPlx0XHQgICAgXHRcdFxuXHRcdCAgICBcdDwvdHI+XG4gICAgXHRcdClcbiAgICBcdFx0dGhpcy5wcm9wcy5zaG9wW2ldXG4gICAgXHR9O1xuICAgIFx0cmV0dXJuIHJvd3M7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICBcdHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcblxuICAgICAgICByZXR1cm4gKFxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcFwiPlxuXHQgICAgICAgIFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG5cdCAgICAgICAgXHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj4gXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwibGVmdFwiPk5hbWU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImxlZnRcIj5EZXNjcmlwdGlvbjwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiY2VudGVyXCI+QXZhaWxhYmxlIG9uPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJjZW50ZXJcIj5UYXhhYmxlPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJjZW50ZXJcIj5QcmljZTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiY2VudGVyXCI+RWRpdDwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbk5hbWUgICAgICAgICAgPSBcImZhZGVcIiBcblx0XHRcdFx0XHRcdHRyYW5zaXRpb25FbnRlclRpbWVvdXQgID0gezUwMH0gXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uTGVhdmVUaW1lb3V0ICA9IHszMDB9XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uQXBwZWFyICAgICAgICA9IHt0cnVlfSBcblx0XHRcdFx0XHRcdHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0ID0gezUwMH1cblx0XHRcdFx0XHRcdGNvbXBvbmVudCAgICAgICAgICAgICAgID0gXCJ0Ym9keVwiID5cblx0XHRcdFx0XHRcdCAge2l0ZW1zfVxuXHRcdFx0XHRcdDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvdGFibGU+XG5cdCAgICAgICAgPC9kaXY+XG5cdCAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNob3BBZGRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSAgICAgPSB7YWxlcnQ6ZmFsc2V9XG5cdFx0dGhpcy5hZGRJdGVtICAgPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlKGV2ZW50KSB7XG4gICAgXHRpZiAodGhpcy5zdGF0ZS5hbGVydCAhPSBmYWxzZSlcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7YWxlcnQ6ZmFsc2V9KTtcblx0fVxuXG4gICAgdmFsaWRhdGUoKSB7XG5cbiAgICBcdHRoaXMuc2V0U3RhdGUoe2FsZXJ0OmZhbHNlfSk7XG5cbiAgICBcdGxldCBuYW1lICAgID0gdGhpcy5yZWZzLm5hbWUudmFsdWU7XG4gICAgXHRpZiAobmFtZS5sZW5ndGggPT0gMCkge1xuICAgIFx0XHR0aGlzLnJlZnMubmFtZS5mb2N1cygpO1xuICAgIFx0XHR0aGlzLnNldFN0YXRlKHthbGVydDpcIlBsZWFzZSBmaWxsIHRoZSBpdGVtIG5hbWVcIn0pO1xuICAgIFx0XHRyZXR1cm4gZmFsc2U7XG4gICAgXHR9XG5cbiAgICBcdGxldCBkZXNjICAgID0gdGhpcy5yZWZzLmRlc2MudmFsdWU7XG4gICAgXHRpZiAoZGVzYy5sZW5ndGggPT0gMCkge1xuICAgIFx0XHR0aGlzLnJlZnMuZGVzYy5mb2N1cygpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YWxlcnQ6XCJQbGVhc2UgYWRkIGFuIGl0ZW0gZGVzY3JpcHRpb25cIn0pO1xuICAgIFx0XHRyZXR1cm4gZmFsc2U7XG4gICAgXHR9XG5cbiAgICBcdGxldCBkYXRlICAgID0gdGhpcy5yZWZzLmRhdGUudmFsdWU7XG4gICAgXHRpZiAoZGF0ZS5sZW5ndGggPT0gMCkge1xuICAgIFx0XHR0aGlzLnJlZnMuZGF0ZS5mb2N1cygpO1xuICAgIFx0XHQvLyBhZGQgZGF0ZSB2YWxpZGF0aW9uIGhlcmUuLi5cbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7YWxlcnQ6XCJQbGVhc2UgYWRkIGF2YWlsYWJpbGl0eSBkYXRlXCJ9KTtcbiAgICBcdFx0cmV0dXJuIGZhbHNlO1xuICAgIFx0fVxuXG4gICAgXHRsZXQgcHJpY2UgICAgPSB0aGlzLnJlZnMucHJpY2UudmFsdWU7XG4gICAgXHRpZiAocHJpY2UgPD0gMCkge1xuICAgIFx0XHR0aGlzLnJlZnMucHJpY2UuZm9jdXMoKTtcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7YWxlcnQ6XCJQbGVhc2Ugc2V0IGEgcHJpY2UgZm9yIHlvdXIgaXRlbVwifSk7XG4gICAgXHRcdHJldHVybiBmYWxzZTtcbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIHRydWU7XG5cbiAgICB9XG5cblxuICAgIGFkZEl0ZW0oZXZlbnQpIHtcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBcdGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcblxuXHRcdFx0dmFyIG5hbWUgID0gdGhpcy5yZWZzLm5hbWUudmFsdWU7XG5cdFx0XHR2YXIgZGVzYyAgPSB0aGlzLnJlZnMuZGVzYy52YWx1ZTtcblx0XHRcdHZhciBkYXRlICA9IHRoaXMucmVmcy5kYXRlLnZhbHVlO1xuXHRcdFx0dmFyIHByaWNlID0gdGhpcy5yZWZzLnByaWNlLnZhbHVlO1xuXHRcdFx0dmFyIHRheCAgID0gdGhpcy5yZWZzLnRheC5jaGVja2VkO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhuYW1lLCBkZXNjLCBwcmljZSwgZGF0ZSwgdGF4KTtcblx0XHRcdHRoaXMucHJvcHMuYWRkSXRlbSggbmFtZSwgZGVzYywgcHJpY2UsIGRhdGUsIHRheCApO1xuXG5cdFx0XHQvLyByZXNldFxuXHRcdFx0dGhpcy5yZWZzLmZvcm0ucmVzZXQoKTtcblxuICAgIFx0fVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgXHR2YXIgYWxlcnQgPSB0aGlzLnN0YXRlLmFsZXJ0ID09PSBmYWxzZSA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGNsZWFyZml4IGZhZGUtaW5cIiA+e3RoaXMuc3RhdGUuYWxlcnR9PC9kaXY+O1xuXG4gICAgXHRyZXR1cm4gKFxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICBcdFx0IFx0XG4gICAgXHRcdFx0PGZvcm0gcmVmPVwiZm9ybVwiPlxuXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNlwiPlxuICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdCAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgcmVmPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0ICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZGVzY1wiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiByZWY9XCJkZXNjXCIgcm93cz1cIjNcIiBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHQgIDwvZGl2PlxuICAgIFx0XHRcdFx0PC9kaXY+XG5cbiAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy02XCI+XG5cbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgXHRcdFx0XHRcdFx0PGxhYmVsPkF2YWlsYWJsZSBvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJEYXRlXCIgcmVmPVwiZGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZX0gLz5cbiAgICBcdFx0XHRcdFx0PC9kaXY+XG5cbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxhYmVsPlxuXHRcdFx0XHRcdFx0XHQgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPVwidGF4XCIgLz4gVGF4YWJsZVxuXHRcdFx0XHRcdFx0XHQgICAgPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgXHRcdFx0XHRcdDwvZGl2PlxuXG4gICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgIFx0XHRcdFx0XHRcdDxsYWJlbD5QcmljZTwvbGFiZWw+XG4gICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPiBcblx0XHRcdFx0XHRcdCAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj4kPC9zcGFuPlxuXHRcdFx0XHRcdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICBtaW49XCIwXCIgc3RlcD1cIjAuMDFcIiBkYXRhLW51bWJlci10by1maXhlZD1cIjJcIiBkYXRhLW51bWJlci1zdGVwZmFjdG9yPVwiMTAwXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGN1cnJlbmN5XCIgaWQ9XCJwcmljZVwiIHJlZj1cInByaWNlXCIgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdFx0ICAgIDwvZGl2PlxuICAgIFx0XHRcdFx0XHQ8L2Rpdj5cblxuICAgIFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCAgXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlwiID5cblx0XHRcdFx0XHRcdCAge2FsZXJ0fVxuXHRcdFx0XHRcdFx0ICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbX0+QWRkIEl0ZW1cblx0XHRcdFx0XHRcdCAgXHQ8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMgcHVsbC1yaWdodFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdCAgPC9idXR0b24+XG5cdFx0XHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0ICBcblx0XHRcdFx0PC9mb3JtPlxuXG4gICAgXHRcdDwvZGl2PlxuICAgIFx0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcEFkZEl0ZW07IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjb21iaW5lIGFsbCB5b3VyIHJlZHVjZXJzIGludG8gb25lIHJvb3QgcmVkdWNlclxuaW1wb3J0IHNob3AgZnJvbSAnLi9zaG9wJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRzaG9wXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHsgQUREX0lURU0sIFJFTU9WRV9JVEVNLCBSRUNJVkVfREFUQSB9IGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbkNyZWF0b3JzXCI7XG5cbmNvbnN0IHNob3AgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXG5cdFx0Y2FzZSBSRUNJVkVfREFUQTpcblx0XHRcdHJldHVybiBhY3Rpb24uZGF0YTtcblxuXHRcdGNhc2UgQUREX0lURU06XG5cdFx0XHR2YXIgaXRlbSA9IHtcblx0XHRcdFx0bmFtZSA6IGFjdGlvbi5uYW1lLFxuXHRcdFx0XHRkZXNjIDogYWN0aW9uLmRlc2MsXG5cdFx0XHRcdHByaWNlIDogYWN0aW9uLnByaWNlLFxuXHRcdFx0XHRkYXRlIDogYWN0aW9uLmRhdGUsXG5cdFx0XHRcdHRheCA6IGFjdGlvbi50YXgsXG5cdFx0XHRcdGlkOiBhY3Rpb24uaWRcdFxuXHRcdFx0fTtcblx0XHRcdHN0YXRlID0gc3RhdGUuY29uY2F0KFtpdGVtXSk7XG5cdFx0ICAgIHJldHVybiBzdGF0ZTtcblx0XHRcblx0XHRjYXNlIFJFTU9WRV9JVEVNOlxuXHRcdFx0bGV0IGZvdW5kID0gc3RhdGUuZmluZEluZGV4KCAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkICk7XG5cdFx0XHRpZiAoZm91bmQgPiAtMSkge1xuXHRcdFx0IFx0cmV0dXJuIFtcblx0XHRcdCBcdFx0Li4uc3RhdGUuc2xpY2UoMCwgZm91bmQpLFxuXHRcdFx0XHRcdC4uLnN0YXRlLnNsaWNlKGZvdW5kICsgMSlcblx0XHRcdCBcdF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XG5cdFx0ZGVmYXVsdCA6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG9wOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vLyBnZXQgdGhlIGdsb2JhbCByZWR1Y2VyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbi8vIGxvYWQgZXh0ZXJuYWwgZGF0YSBpZiBuZWVkZWRcbi8vIGltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9kYXRhL2RhdGEuanNcIjtcbmNvbnN0IHVzZXIgPSBmYWxzZTtcblxuLy8gZGVmdWFsdCBkYXRhIGdvZXMgaGVyZS4uXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG5cdHNob3AgOiBbXVxufTtcblxuY29uc3QgbWlkZGxld2FyZSA9IFsgdGh1bmsgXVxuXG4vLyBjcmVhdGUgdGhlIHN0b3JlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuXHRyb290UmVkdWNlciwgXG5cdGRlZmF1bHRTdGF0ZSwgXG5cdGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxuKTtcblxuLy8gYXV0byByZWZyZXNoIG91ciBtb2R1bGUuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2VycycsICgpID0+IHtcblx0XHRjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2luZGV4JykuZGVmYXVsdDtcblx0XHRzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXX0=
