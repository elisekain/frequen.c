 var React = require('react');
 var Link = require('react-router').Link;
 var PropTypes = React.PropTypes;

 var Header = React.createClass({

     render: function() {
         return (
             <div className="header">
                 <Link to={`/#`}><img src="./images/frequenc_logo.jpg" alt="Frequen.c Logo" /></Link>
                 <ul>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/podcasts`}>Podcasts</Link></li>
                 </ul>
             </div>
         );
     }

 });

 module.exports = Header;
