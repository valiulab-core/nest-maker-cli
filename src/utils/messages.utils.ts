import chalk from 'chalk';

export class MessagesUtils {
	public static error(msg: string): void {
		console.log(chalk.red(`[ERROR] ${msg}`));
	}
}
