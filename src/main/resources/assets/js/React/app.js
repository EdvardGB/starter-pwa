var ReactDOM = require('react-dom');
var React = require('react');

class Enonic extends React.Component {
  render() {
    return (<div>Enonic loves React!</div>);
    
  }
}

ReactDOM.render(<Enonic />, document.getElementById('app'));
