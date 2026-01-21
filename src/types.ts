export enum Tab {
  LEDGER = 'LEDGER',
  CALCULATOR = 'CALCULATOR'
}

export enum AppMode {
  RESEARCHER = 'RESEARCHER',
  LABORATORY = 'LABORATORY'
}

export interface LogEntry {
  id: string;
  date: string;
  time: string;
  compound: string;
  dose: string;
  units?: number;
  site: string;
  notes?: string;
  goal?: string;
  vitality?: number;
  weight?: { value: number; unit: string };
}