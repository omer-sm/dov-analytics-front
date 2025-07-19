import AnalyticsTab from "./Components/AnalyticsTab";

export const tabs = [
  {
    label: 'כניסות',
    value: 1,
    element: <AnalyticsTab statistic="VISIT" title="כניסות" />,
  },
  {
    label: 'דוחות שנוצרו',
    value: 2,
    element: <AnalyticsTab statistic="REPORT_GENERATED" title="דוחות שנוצרו" />,
  },
  {
    label: 'דוחות שנשלחו',
    value: 3,
    element: <AnalyticsTab statistic="REPORT_SENT_ON_WHATSAPP" title="דוחות שנשלחו בווצאפ" />,
  },
  {
    label: 'דוחות שהועתקו',
    value: 4,
    element: <AnalyticsTab statistic="REPORT_COPIED" title="דוחות שהועתקו" />,
  },
  {
    label: 'מצב חושך',
    value: 5,
    element: <AnalyticsTab statistic="SET_DARK_MODE" title="שינויים למצב חושך" />,
  },
  {
    label: 'מצב אור',
    value: 6,
    element: <AnalyticsTab statistic="SET_LIGHT_MODE" title="שינויים למצב אור" />,
  }
]