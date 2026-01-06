import type { Report } from './Api/useGetLastReport';

export const statisticTranslations: { [key: string]: string } = {
  VISIT: 'כניסה',
  REPORT_GENERATED: 'דוח נוצר',
  REPORT_COPIED: 'דוח הועתק',
  REPORT_SENT_ON_WHATSAPP: 'דוח נשלח בוואטסאפ',
  SET_DARK_MODE: 'שונה למצב חושך',
  SET_LIGHT_MODE: 'שונה למצב אור',
};

export const reportTranslations: Record<keyof Report, string> = {
  reporterName: 'שם המדווח/ת',
  reportTime: 'זמן הדוח',
  location: 'מיקום',
  situation: 'מאפיין תחומי',
  severity: 'חומרת פגיעה',
  peopleDamaged: 'יש נפגעים',
  propertyDamaged: 'יש נזק',
  personalActivity: 'מאפיין פעילות הפרט',
  teamActivity: 'מאפיין פעילות היחידה',
  description: 'תיאור האירוע',
  recommendations: 'המלצות ראשוניות',
};

export const reportValueTranslations: Record<string, string> = {
  Severe: 'קשה',
  Medium: 'בינוני',
  Light: 'קל',
  Vacation: 'חופשה',
  Training: 'אימון',
  Routine: 'שגרה',
};
