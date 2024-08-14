import * as inquirer from 'inquirer';
import { config } from '@/config';

console.log('Test Key:', config.test_key);

const promptModule = inquirer.createPromptModule();

async function runProgramA() {
  console.log('Running Program A...');
}

async function runProgramB() {
  console.log('Running Program B...');
}

async function runProgramC() {
  console.log('Running Program C...');
}

async function runProgramD() {
  console.log('Running Program D...');
}

async function mainMenu() {
  const answers = await promptModule([{
    type: 'list',
    name: 'program',
    message: 'Which program would you like to run?',
    choices: [
      'Program A',
      'Program B',
      'Program C',
      'Program D'
    ]
  }]);

  switch (answers.program) {
    case 'Program A':
      await runProgramA();
      break;
    case 'Program B':
      await runProgramB();
      break;
    case 'Program C':
      await runProgramC();
      break;
    case 'Program D':
      await runProgramD();
      break;
    default:
      console.log('No valid program selected.');
      break;
  }
}

mainMenu();
