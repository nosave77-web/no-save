
export interface StrategyResponse {
  dailyProfit: string;
  roadmap: string[];
  bestBusinesses: string[];
  difficulty: 'Fácil' | 'Médio' | 'Hardcore';
}

export interface UserInput {
  hoursPerDay: number;
  currentCapital: number;
  playstyle: 'Solo' | 'Amigos' | 'Misto';
}
