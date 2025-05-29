import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MoreHorizontal, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lineChartData = [
  { name: 'Jan', Purchases: 2000 },
  { name: 'Feb', Purchases: 1800 },
  { name: 'Mar', Purchases: 2200 },
  { name: 'Apr', Purchases: 3000 },
  { name: 'May', Purchases: 2500 },
  { name: 'Jun', Purchases: 3200 },
  { name: 'Jul', Purchases: 4500 },
  { name: 'Aug', Purchases: 3800 },
  { name: 'Sep', Purchases: 4200 },
  { name: 'Oct', Purchases: 3500 },
  { name: 'Nov', Purchases: 5000 },
  { name: 'Dec', Purchases: 4800 },
];

interface Activity {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    initials: string;
  };
  commit: string;
  date: string;
}

const activityData: Activity[] = [
  {
    id: '1',
    user: { name: 'Ronald Bradley', avatarUrl: 'https://i.pravatar.cc/150?u=ronald', initials: 'RB' },
    commit: 'Initial commit - Project setup and basic structure',
    date: 'May 6, 2018',
  },
  {
    id: '2',
    user: { name: 'Russell Gibson', initials: 'RG' }, // No avatar URL, fallback to initials
    commit: 'Main structure - Added core layout components',
    date: 'April 22, 2018',
  },
  {
    id: '3',
    user: { name: 'Beverly Armstrong', avatarUrl: 'https://i.pravatar.cc/150?u=beverly', initials: 'BA' },
    commit: 'Left sidebar adjustments - Improved navigation UX',
    date: 'April 15, 2018',
  },
  {
    id: '4',
    user: { name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=alice', initials: 'AJ' },
    commit: 'Implemented user authentication flow',
    date: 'April 10, 2018',
  },
];

interface DevelopmentActivityProps {
  className?: string;
}

const DevelopmentActivity: React.FC<DevelopmentActivityProps> = ({ className }) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader>
        <CardTitle>Development Activity</CardTitle>
        <CardDescription>Track recent commits and project progress.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '14px' }} />
              <Line type="monotone" dataKey="Purchases" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">User</TableHead>
              <TableHead>Commit</TableHead>
              <TableHead className="w-[150px] text-right">Date</TableHead>
              <TableHead className="w-[50px] text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityData.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={activity.user.avatarUrl} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm text-foreground">{activity.user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground truncate max-w-xs">{activity.commit}</TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">{activity.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DevelopmentActivity;
