import { SelectedLocale } from "@/messages";

export async function viewPositions() {
  const locale = SelectedLocale.locale;

  console.log(locale.positionsMessage);
}