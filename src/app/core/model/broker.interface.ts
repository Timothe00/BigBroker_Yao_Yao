export interface Broker {
  title: string;
  subtitle: string;
  level: string;
  cours: Cours[];
  price_month: number;
  price_year: number;
  }
  
  interface Cours {
    title: string;
    percentage: number;
  }
  