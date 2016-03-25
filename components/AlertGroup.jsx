/*
 * <AlertGroup
 *	className=string
 *	alerts = array [{type, text}]
 *
 * >
 */

var React = require("react");
var PropTypes = React.PropTypes;

var Alert = require('./Alert');

var AlertGroup = React.createClass({

	propTypes: {
		alerts: PropTypes.arrayOf(React.PropTypes.shape({
			type: PropTypes.string,
			text: PropTypes.string
		})).isRequired,
		className: PropTypes.string
	},

	render: function() {

		var alerts = this.props.alerts.map(function(alert, i) {
			return (
					<Alert
						key={i}
						type={alert.type}
						text={alert.text}
					/>
			);
		}, this);

		return (
			<div className={["cb-alert-group", this.props.className].join(" ")} >
					{alerts}
			</div>
		);
	}
});

module.exports = AlertGroup;
