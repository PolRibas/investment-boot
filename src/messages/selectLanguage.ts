import { promptModule } from "@/config";
import { en, es } from "./locales";
import { Messages } from "./types";

export const selectLanguage = async (): Promise<Messages> => {
  const languages = [
    { name: 'English', value: en },
    { name: 'Español', value: es }
  ];

  return await promptModule([
    {
      type: 'list',
      name: 'language',
      message: 'Select your language / Seleccione su idioma:',
      choices: languages
    }
  ]).then((answers) => {
    return answers.language;
  });
}

export class SelectedLocale {
  static locale: Messages;

  static async setLocale() {
    this.locale = await selectLanguage();
  }
}