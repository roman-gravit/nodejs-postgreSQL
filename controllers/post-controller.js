const db = require("../db");

class PostController {

	async CreatePost(req, resp) {
		const { title, content, user_id  } = req.body;
		const post = 
			await db.query(`INSERT INTO post(title, content, user_id) values($1, $2, $3) RETURNING *`, [title, content, user_id]);

		resp.json(post.rows[0]);
	}

	async GetPostsByUser(req, resp) {
		const user_id = req.query.id;
		const posts =
			await db.query(`SELECT * FROM post WHERE user_id=($1)`, [user_id]);
		resp.json(posts.rows);	
	}

	async GetAllPosts(req, resp) {
		const posts = 
			await db.query(`SELECT * FROM post`);

		resp.json(posts.rows[0]);
	}
}

module.exports = new PostController();