import Express, {
	Application,
	Request,
	Response,
	RequestHandler,
	NextFunction
} from "express";
import { UserRouter, PropertyRouter } from "./routes";
import bodyParser from "body-parser";


const App: Application = Express();

const port: Number = 8081;

App.use(bodyParser.json());

// FIXME: RequestHandler returns void
function rootHandler(req: Request, res: Response, next: NextFunction) {
	let response: Object = {
		message: "Hello World"
	};

	res.json(response);
}

App.use("/user", UserRouter);
App.use("/property", PropertyRouter);


	App.listen(port, () => {
		let message: String = `I'm listening @${port}`;

		console.info(message);
	});

