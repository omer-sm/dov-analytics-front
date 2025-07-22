import AnalyticsTab from "./Components/AnalyticsTab";
import OverviewTab from "./Components/OverviewTab";

export const tabs = [
  {
    label: 'מבט על',
    element: <OverviewTab />,
  },
  {
    label: 'כניסות',
    element: <AnalyticsTab statistic="VISIT" title="כניסות" />,
  },
  {
    label: 'דוחות שנוצרו',
    element: <AnalyticsTab statistic="REPORT_GENERATED" title="דוחות שנוצרו" />,
  },
  {
    label: 'דוחות שנשלחו',
    element: <AnalyticsTab statistic="REPORT_SENT_ON_WHATSAPP" title="דוחות שנשלחו בווצאפ" />,
  },
  {
    label: 'דוחות שהועתקו',
    element: <AnalyticsTab statistic="REPORT_COPIED" title="דוחות שהועתקו" />,
  },
  {
    label: 'מצב חושך',
    element: <AnalyticsTab statistic="SET_DARK_MODE" title="שינויים למצב חושך" />,
  },
  {
    label: 'מצב אור',
    element: <AnalyticsTab statistic="SET_LIGHT_MODE" title="שינויים למצב אור" />,
  }
]