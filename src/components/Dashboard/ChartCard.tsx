import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ChartCardProps {
  title: string;
  description?: string;
  data: { name: string; value: number; fill: string }[];
  className?: string;
  chartType?: 'pie' | 'donut';
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  data,
  className,
  chartType = 'donut' as const,
}) => {
  // Ensure distinct colors for chart segments if not provided in data
  const defaultColors = [
    'hsl(var(--primary))',        // Blue
    'hsl(var(--ds-accent-green))', // Green
    'hsl(var(--secondary))',       // Lighter Gray/Blue
    'hsl(var(--muted))',           // Muted Gray
    'hsl(var(--accent))',          // Accent color
  ];

  const chartData = data.map((entry, index) => ({
    ...entry,
    fill: entry.fill || defaultColors[index % defaultColors.length],
  }));

  return (
    <Card className={cn("shadow-sm flex flex-col", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center p-0 pb-4">
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  // Only show label if percent is significant
                  if ((percent * 100) < 5) return null;
                  return (
                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12px" fontWeight="bold">
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
                outerRadius={chartType === 'donut' ? 100 : 110}
                innerRadius={chartType === 'donut' ? 60 : 0}
                dataKey="value"
                stroke="hsl(var(--card))" // Border color for segments, matches card background for seamless look
                strokeWidth={2}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Legend 
                iconSize={10}
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
