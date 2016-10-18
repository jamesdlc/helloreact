var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
             <input type="text" ref="name" placeholder="Enter Name" />
          </div>
          <div>
            <textarea ref="message" placeholder="Enter Message"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

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

var firstName = 'James';
var pMsg = "What's going down?!";

ReactDOM.render(
  <Greeter name={firstName} msg={pMsg} />,
  document.getElementById('app')
);
