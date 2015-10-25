var express = require('express');
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var ReactApp = React.createFactory(require("../public/javascripts/components/UserLogin"));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var reactHtml = ReactDOMServer.renderToString(ReactApp({}));
	res.render('index', { title: 'Express' , reactOutput: reactHtml});
});

module.exports = router;
