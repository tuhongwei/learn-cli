import commander from 'commander';
import inquirer from 'inquirer';
import ora frm 'ora';
import Git from '../tools/git';

class Download {
	constructor() {
		this.git = new Git();
		this.commander = commander;
		this.inquirer = inquirer;
		this.getProList = ora('获取项目列表...');
		this.getTagList = ora('获取项目版本...');
		this.download = ora('正在加速为您下载代码...');
	}
	run() {
		this.commander
			.command('download')
			.description('从远程下载代码到本地...')
			.action(() => { this.download(); });
		this.commander.parse(process.argv);
	}
	async download() {
		let getProListLoad;
	}
}