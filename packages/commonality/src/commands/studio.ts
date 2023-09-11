import { Command } from 'commander';
import getPort from 'get-port';
import openUrl from 'open';
import { validateProjectStructure } from '../utils/validate-project-structure.js';
import { getRootDirectory } from '@commonalityco/data-project';
import chalk from 'chalk';
import waitOn from 'wait-on';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { execa } from 'execa';
import killPort from 'kill-port';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const command = new Command();

export const studio = command
  .name('studio')
  .description('Open Commonality Studio')
  .option('--debug')
  .action(async (options: { debug?: boolean }) => {
    await validateProjectStructure({
      directory: process.cwd(),
      command,
    });

    process.on('SIGINT', async function () {
      try {
        await killPort(8888);
      } finally {
        process.exit();
      }
    });

    const port = await getPort({ port: 8888 });
    const rootDirectory = await getRootDirectory();
    const url = `http://127.0.0.1:${port}`;
    const isDebug = Boolean(options.debug);

    try {
      const pathToStudio = path.resolve(__dirname, './studio');
      const studioExists = await fs.exists(pathToStudio);

      if (!studioExists) {
        command.error('Commonality Studio was not found');
        return;
      }

      console.log(`📦 Starting Commonality Studio...\n`);

      execa('node', ['server.js'], {
        stdout: isDebug ? 'inherit' : 'ignore',
        stderr: isDebug ? 'inherit' : 'ignore',
        cwd: pathToStudio,
        env: {
          NODE_ENV: 'production',
          PORT: port?.toString(),
          COMMONALITY_ROOT_DIRECTORY: rootDirectory,
        },
      });

      await waitOn({ resources: [url] });

      console.log(
        `Viewable at: ${chalk.blue.bold(url)} ${chalk.dim(
          '(press ctrl-c to quit)',
        )}`,
      );

      await openUrl(url);
    } catch (error) {
      if (isDebug) {
        console.log(error);
      }

      console.log(chalk.red('Failed to start Commonality Studio'));
    }
  });