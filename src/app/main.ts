import { promptModule } from '@/config';
import { Messages, selectLanguage } from '@/messages';

let locale: Messages;

async function checkPortfolio() {
  console.log(locale.portfolioMessage);
  // Lógica para mostrar el portafolio
}

async function viewPositions() {
  console.log(locale.positionsMessage);
  // Lógica para mostrar las posiciones abiertas
}

async function mainMenu() {
  locale = await selectLanguage();

  console.log(locale.welcome);

  const questions = [
    {
      type: 'list',
      name: 'action',
      message: locale.selectAction,
      choices: [
        { name: locale.actions.checkPortfolio, value: 'portfolio' },
        { name: locale.actions.viewPositions, value: 'positions' },
        { name: locale.actions.exit, value: 'exit' }
      ]
    }
  ];

  const answers = await promptModule(questions);

  switch (answers.action) {
    case 'portfolio':
      await checkPortfolio();
      break;
    case 'positions':
      await viewPositions();
      break;
    case 'exit':
      console.log(locale.exitMessage);
      process.exit();
    default:
      console.log('Invalid option.');
      break;
  }
}

mainMenu();
