conn = new Mongo();
db = conn.getDB("schedule-api");

db.acts.find().snapshot().forEach( function (act) {
	act.tags = act.tags.split(',');
	act.start = new Date(act.start);
	act.end = new Date(act.end);
	db.acts.save(act);
});