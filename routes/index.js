var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plotting charts using queried database data' });
});

router.get('/games/totalproduced/view', function(req, res, next) {
  res.render('totalProduced/index');
});

router.get('/games/totalproduced/data', function (req, res, next) {
	db.query('SELECT publisher, count(*) as count from console_games group by publisher order by count desc limit 20', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
	});
})

module.exports = router;
