import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import DevelopmentActivity from '../components/Dashboard/DevelopmentActivity';
import ChartCard from '../components/Dashboard/ChartCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileText } from 'lucide-react';

// TypeScript interfaces for chart data
interface ChartDataPoint {
  name: string;
  value: number;
  fill: string;
}

// Data for Chart Cards
// Ensured varied data points for realistic, complex charts and distinct HSL colors.
const trafficSourceData: ChartDataPoint[] = [
  { name: 'Organic Search', value: 12345, fill: 'hsl(var(--primary))' },      // Blue
  { name: 'Direct', value: 9876, fill: 'hsl(var(--ds-accent-green))' }, // Green
  { name: 'Referral', value: 6789, fill: 'hsl(45, 95%, 55%)' },        // Vibrant Yellow
  { name: 'Social Media', value: 4567, fill: 'hsl(0, 75%, 60%)' },     // Red-ish / Coral
  { name: 'Email', value: 2345, fill: 'hsl(265, 80%, 65%)' },       // Vibrant Purple
  { name: 'Other', value: 1050, fill: 'hsl(210, 15%, 75%)' },        // Medium Gray
];

const userDemographicsData: ChartDataPoint[] = [
  { name: '18-24', value: 2500, fill: 'hsl(211, 100%, 60%)' },       // Bright Blue
  { name: '25-34', value: 4800, fill: 'hsl(135, 61%, 50%)' },       // Bright Green
  { name: '35-44', value: 3200, fill: 'hsl(45, 100%, 50%)' },      // Gold/Yellow
  { name: '45-54', value: 1800, fill: 'hsl(260, 85%, 60%)' },       // Purple
  { name: '55+', value: 950, fill: 'hsl(350, 70%, 55%)' },        // Pink/Red
  { name: 'Unknown', value: 300, fill: 'hsl(210, 17%, 80%)' },      // Light-Medium Gray
];

const newFeedbackData: ChartDataPoint[] = [
    { name: 'Positive', value: 78, fill: 'hsl(var(--ds-accent-green))' },
    { name: 'Neutral', value: 15, fill: 'hsl(210, 20%, 85%)' }, // Lighter gray for neutral
    { name: 'Negative', value: 7, fill: 'hsl(var(--destructive))' },
];

const todayProfitData: ChartDataPoint[] = [
    { name: 'Online Sales', value: 1250, fill: 'hsl(var(--primary))' },
    { name: 'In-Store', value: 850, fill: 'hsl(180, 50%, 50%)' },   // Teal color
    { name: 'Consulting', value: 400, fill: 'hsl(30, 90%, 60%)' },    // Orange color
    { name: 'Other', value: 150, fill: 'hsl(210, 15%, 70%)' },      // Darker Muted Gray
];

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Dashboard</h1>

        <StatsCardGrid />

        <Alert className="bg-primary/10 border-primary/30 text-primary">
          <FileText className="h-5 w-5" /> {/* Icon should inherit text-primary from Alert's className */} 
          <AlertTitle className="font-semibold">
            Information & Updates
          </AlertTitle>
          <AlertDescription>
            Read our documentation with code samples. Discover the latest features and enhancements.
          </AlertDescription>
        </Alert>
        
        {/* This grid aims to match the visual: DevelopmentActivity (2/3 width), Chart stack (1/3 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DevelopmentActivity className="lg:col-span-2" />
          
          <div className="space-y-6 lg:col-span-1">
            <ChartCard
              title="Chart title" // Matches generic title from image
              description="Monthly unique visitors by source"
              data={trafficSourceData}
              chartType="donut"
            />
            <ChartCard
              title="Chart title" // Matches generic title from image
              description="Age distribution of active users"
              data={userDemographicsData}
              chartType="pie"
            />
          </div>
        </div>

        {/* This grid places the bottom two cards side-by-side, each taking half width on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard
            title="New feedback"
            description="Recent user sentiment analysis"
            data={newFeedbackData}
            chartType="pie" 
          />
           <ChartCard
            title="Today profit"
            description="Revenue breakdown by category"
            data={todayProfitData}
            chartType="donut"
          />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
