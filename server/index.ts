import express, {Request, Response} from 'express';
import path from 'path';

const port = 5000;
const appName = 'yieldx';

(async () => {
  const root = express();
  /**
   * Serve the front-end
   *
   * Leave this code alone
   *
   */
  const client = express.Router();
  const staticRoot = path.join(__dirname, 'build');
  client.use('/', (req, res, next) => {	  client.use('/', express.static(staticRoot));
    res.header('Access-Control-Allow-Origin', 'https://play.fullstory.com');
    if (req.url.includes('/static/css')) {
      res.header('Content-Type', 'text/css');
    } else if (req.url.includes('/static/js')) {
      res.header('Content-Type', 'text/javascript');
    }
    next();
  }, express.static(staticRoot));
  client.get('/*', (_, resp) => {
    resp.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  /**
   * Serve the back-end
   *
   * Application specific logic, such as fetching configuration and initialization belong here
   *
   */
  const server = express.Router();
  root.use(`/${appName}/apis`, server);
  root.use(`/${appName}`, client);
  root.listen(port, () => {
    console.log(`Server started on port ${port}, staticRoot = ${staticRoot}`);
  });

  server.get(`/v1/config`, (req: Request, res: Response) => {
    return res.status(200).json({plaidEnv: process.env.PLAID_ENV});
  });
})();
