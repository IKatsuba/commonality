const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { getRootDirectory } = require('@commonalityco/data-project');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const startApplication = () => {
  return app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port);

    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });
};

if (!process.env.COMMONALITY_ROOT_DIRECTORY) {
  if (dev) {
    getRootDirectory(process.cwd()).then((rootDir) => {
      process.env.COMMONALITY_ROOT_DIRECTORY = rootDir;
      startApplication();
    });
  } else {
    throw new Error('A rootDirectory was not provided');
  }
} else {
  startApplication();
}