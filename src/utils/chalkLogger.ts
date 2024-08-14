// src/utils/chalkLogger.ts
import chalk, { Chalk } from 'chalk';

export class ChalkLogger {
  public static bold(text: string): string {
    return chalk.bold(text);
  }

  public static italic(text: string): string {
    return chalk.italic(text);
  }

  public static underline(text: string): string {
    return chalk.underline(text);
  }

  public static strikethrough(text: string): string {
    return chalk.strikethrough(text);
  }

  // Métodos para colores básicos
  public static red(text: string): string {
    return chalk.red(text);
  }

  public static green(text: string): string {
    return chalk.green(text);
  }

  public static blue(text: string): string {
    return chalk.blue(text);
  }

  public static yellow(text: string): string {
    return chalk.yellow(text);
  }

  public static magenta(text: string): string {
    return chalk.magenta(text);
  }

  public static cyan(text: string): string {
    return chalk.cyan(text);
  }

  public static white(text: string): string {
    return chalk.white(text);
  }

  public static gray(text: string): string {
    return chalk.gray(text);
  }

  public static black(text: string): string {
    return chalk.black(text);
  }

  public static redBold(text: string): string {
    return chalk.red.bold(text);
  }

  public static greenBold(text: string): string {
    return chalk.green.bold(text);
  }

  public static blueBold(text: string): string {
    return chalk.blue.bold(text);
  }

  public static yellowBold(text: string): string {
    return chalk.yellow.bold(text);
  }

  public static magentaBold(text: string): string {
    return chalk.magenta.bold(text);
  }

  public static cyanBold(text: string): string {
    return chalk.cyan.bold(text);
  }

  public static redItalic(text: string): string {
    return chalk.red.italic(text);
  }

  public static greenItalic(text: string): string {
    return chalk.green.italic(text);
  }

  public static blueItalic(text: string): string {
    return chalk.blue.italic(text);
  }

  public static yellowItalic(text: string): string {
    return chalk.yellow.italic(text);
  }

  public static magentaItalic(text: string): string {
    return chalk.magenta.italic(text);
  }

  public static cyanItalic(text: string): string {
    return chalk.cyan.italic(text);
  }

  public static custom(text: string, styles: Chalk): string {
    return styles(text);
  }

  public static multiColorBold(text: string): string {
    return chalk.red.bold(text) + chalk.green.bold(text) + chalk.blue.bold(text);
  }

  public static reset(text: string): string {
    return chalk.reset(text);
  }
}
