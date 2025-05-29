import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string | number;
  percentageChange: string;
  changeType: 'positive' | 'negative';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentageChange, changeType, className }) => {
  const isPositive = changeType === 'positive';
  const Icon = isPositive ? ArrowUp : ArrowDown;
  const textColor = isPositive ? 'text-ds-accent-green' : 'text-destructive';

  return (
    <Card className={cn("shadow-sm hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">{title}</span>
          <div className={cn("flex items-center text-xs font-semibold", textColor)}>
            <span>{percentageChange}</span>
            <Icon className="ml-1 h-3 w-3" />
          </div>
        </div>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
