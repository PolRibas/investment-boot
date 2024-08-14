// src/messages/messages.interface.ts
export interface Messages {
  welcome: string;
  selectAction: string;
  actions: {
    checkPortfolio: string;
    viewPositions: string;
    exit: string;
  };
  portfolioMessage: string;
  positionsMessage: string;
  exitMessage: string;
}
