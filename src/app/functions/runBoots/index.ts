import { SelectedLocale } from "@/messages";

export async function runBoots() {
  const locale = SelectedLocale.locale;

  console.log(locale.runBootsMessage);
}