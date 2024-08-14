// src/app/main.ts
import { ChalkLogger } from '@/utils/chalkLogger';
import { SelectedLocale } from '@/messages';
import { checkPortfolio, runBoots, viewPositions } from './functions';
import { promptModule } from '@/config';

async function mainMenu() {
  await SelectedLocale.setLocale();

  const locale = SelectedLocale.locale;

  console.log(ChalkLogger.cyanBold(locale.welcome));

  const questions = [
    {
      type: 'list',
      name: 'action',
      message: ChalkLogger.cyan(locale.selectAction),
      choices: [
        { name: ChalkLogger.white(locale.actions.checkPortfolio), value: 'portfolio' },
        { name: ChalkLogger.white(locale.actions.viewPositions), value: 'positions' },
        { name: ChalkLogger.white(locale.actions.runBoots), value: 'runBoots' },  // Nueva opción
        // { name: ChalkLogger.red(locale.actions.exit), value: 'exit' }
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
    case 'runBoots':  // Nuevo caso para ejecutar los boots
      await runBoots();
      break;
    default:
      console.log(ChalkLogger.red('Invalid option.'));
      process.exit();
  }
}

mainMenu();
