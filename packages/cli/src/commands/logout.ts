import { Command } from 'commander';
import { getStore } from '../core/store.js';

const program = new Command();

export const logout = program
	.name('logout')
	.description('Create and upload a snapshot of your monorepo')
	.action(async () => {
		const { default: chalk } = await import('chalk');
		const store = await getStore();

		store.clear();
		console.log(chalk.green('✔ Successfully logged out'));
	});
