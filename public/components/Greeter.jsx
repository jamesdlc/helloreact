var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');


var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default message'
    }; // props get defined, either defaults to ones passed in or react and default message
  },
  getInitialState: function () {
    return{
      name: this.props.name,
      message: this.props.message
    }; //state sets its name state to the props value
  },
  handleNewData:  function (updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name; //fetches value of name
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
}); //uppercase G naming convention for react components

module.exports = Greeter;
