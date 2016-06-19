var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Poolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Person />, document.getElementById('app'));
});
