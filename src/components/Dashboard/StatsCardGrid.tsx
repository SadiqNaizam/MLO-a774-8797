import React from 'react';
import { cn } from '@/lib/utils';
import StatCard, { StatCardProps } from './StatCard';

interface StatsCardGridProps {
  className?: string;
}

const statsData: StatCardProps[] = [
  {
    title: 'New Tickets',
    value: '43',
    percentageChange: '+6%',
    changeType: 'positive' as const,
  },
  {
    title: 'Closed Today',
    value: '17',
    percentageChange: '-3%',
    changeType: 'negative' as const,
  },
  {
    title: 'New Replies',
    value: '7',
    percentageChange: '+9%',
    changeType: 'positive' as const,
  },
  {
    title: 'Followers',
    value: '27.3k',
    percentageChange: '+3%',
    changeType: 'positive' as const,
  },
  {
    title: 'Daily earnings',
    value: '$95',
    percentageChange: '-2%',
    changeType: 'negative' as const,
  },
  {
    title: 'Products',
    value: '621',
    percentageChange: '-1%',
    changeType: 'negative' as const,
  },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6', className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          percentageChange={stat.percentageChange}
          changeType={stat.changeType}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
