// const CronJob = require('../lib/cron.js').CronJob;

// console.log('Before job instantiation');
// const job = new CronJob('*/5 * * * * *', function() {
// 	const d = new Date();
// 	console.log('First:', d);
// });

// const job2 = new CronJob('*/8 * * * * *', function() {
// 	const d = new Date();
// 	console.log('Second:', d);
// });
// console.log('After job instantiation');
// job.start();
// job2.start();

//what do I need to run a job
//goals - user_id, name, day of week, time of day
//

const CronJob = require('../lib/cron.js').CronJob;

let isRunning = false;
console.log('Before job instantiation');
const job = new CronJob({
	cronTime: '* * * * * *',
	onTick: function() {
		const d = new Date();
		console.log('Check every second:', d, ', isRunning: ', isRunning);

		if (!isRunning) {
			isRunning = true;

			setTimeout(function() {
				console.log('Long running onTick complete:', new Date());
				isRunning = false;
			}, 3000);
			console.log('setTimeout triggered:', new Date());
		}
	}
});
console.log('After job instantiation');
job.start();