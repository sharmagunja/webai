
export enum Sign {
  ARIES = 'मेष',
  TAURUS = 'वृषभ',
  GEMINI = 'मिथुन',
  CANCER = 'कर्क',
  LEO = 'सिंह',
  VIRGO = 'कन्या',
  LIBRA = 'तुला',
  SCORPIO = 'वृश्चिक',
  SAGITTARIUS = 'धनु',
  CAPRICORN = 'मकर',
  AQUARIUS = 'कुंभ',
  PISCES = 'मीन'
}

export interface UserProfile {
  name: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
  rashi?: Sign;
  lagna?: string;
}

export interface Horoscope {
  prediction: string;
  love: string;
  career: string;
  wellness: string;
  luckyNumber: string;
  luckyColor: string;
  intensity: number;
}

export interface NatalChart {
  sun: string;
  moon: string;
  rising: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  summary: string;
  combinations: {
    planets: string;
    description: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}