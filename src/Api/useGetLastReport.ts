import { useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '../config';

interface RawReport {
  reporter_name: string;
  report_time: string;
  event_location: string;
  situation: string;
  severity: 'Light' | 'Medium' | 'Severe';
  people_damaged: 0 | 1;
  property_damaged: 0 | 1;
  personal_activity: 'Routine' | 'Vacation' | 'Training';
  team_activity: string;
  event_description: string;
  recommendations: string;
}

export interface Report {
  reporterName: string;
  reportTime: Date;
  location: string;
  situation: string;
  severity: 'Light' | 'Medium' | 'Severe';
  peopleDamaged: boolean;
  propertyDamaged: boolean;
  personalActivity: 'Routine' | 'Vacation' | 'Training';
  teamActivity: string;
  description: string;
  recommendations: string;
}

export const useGetLastReport = () =>
  useQuery<Report>({
    queryKey: ['lastReport'],
    staleTime: 1000 * 60 * 60,
    retry: 2,
    queryFn: () =>
      fetch(`${BACKEND_URL}/last-report`)
        .then((result) => result.json())
        .then(
          (rawReport: RawReport): Report => ({
            reporterName: rawReport.reporter_name,
            reportTime: new Date(rawReport.report_time),
            location: rawReport.event_location,
            peopleDamaged: rawReport.people_damaged === 1,
            propertyDamaged: rawReport.property_damaged === 1,
            personalActivity: rawReport.personal_activity,
            teamActivity: rawReport.team_activity,
            severity: rawReport.severity,
            situation: rawReport.situation,
            description: rawReport.event_description,
            recommendations: rawReport.recommendations,
          })
        ),
  });
