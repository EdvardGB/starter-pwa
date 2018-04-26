var React = require('react');
var ReactDOM = require('react-dom');


class Enonic extends React.Component {
  render() {
    return (<div>Enonic loves React!</div>);
    
  }
}

ReactDOM.render(<Enonic />, document.getElementById('app'));
