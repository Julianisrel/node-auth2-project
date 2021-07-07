const express = require("express")
const helmet = require("helmet")
const cookieParser = require('cookie-parser');
const cors = require("cors")
const session = require("express-session")
const usersRouter = require("./users/users-router")



const server = express()
const port = process.env.PORT || 8080




erver.use(express.json());
server.use(helmet());
server.use(cors());
server.use(cookieParser());








server.use(usersRouter)
server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
