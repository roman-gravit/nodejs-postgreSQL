const db = require("../db");

class UserController {

	async CreateUser(req, resp) {
		const { name, surname  } = req.body;
		const person = 
			await db.query(`INSERT INTO person(name, surname) values($1, $2) RETURNING *`, [name, surname]);

		resp.json(person.rows[0]);
	}

	async GetUsers(req, resp) {
		const persons = await db.query(`SELECT * FROM person`);
		resp.json(persons.rows);	
	}

	async GetUserById(req, resp) {
		const user_id = req.params.id;
		const person = 
			await db.query(`SELECT * FROM person WHERE id=($1)`, [user_id]);

		resp.json(person.rows[0]);
	}

	async UpdateUser(req, resp) {
		const { id, name, surname  } = req.body;
		const person = 
			await db.query(`UPDATE person set name=$1, surname=$2 where id=$3 RETURNING *`, [name, surname, id]);

		resp.json(person.rows[0]);
	}

	async DeleteUser(req, resp) {
		const user_id = req.params.id;
		const person = 
			await db.query(`DELETE FROM person WHERE id=($1)`, [user_id]);

		resp.json(person.rows[0]);		
	}

}

module.exports = new UserController();