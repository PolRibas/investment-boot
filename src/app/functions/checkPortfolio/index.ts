import { SelectedLocale } from "@/messages";

export async function checkPortfolio() {
  const locale = SelectedLocale.locale;

  console.log(locale.portfolioMessage);
}