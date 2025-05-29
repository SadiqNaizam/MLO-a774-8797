import React from 'react';
import { cn } from '@/lib/utils';
import { Home, BarChart2, Users, Settings, LifeBuoy, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon: Icon, active, onClick }) => {
  return (
    <Button
      variant={active ? 'secondary' : 'ghost'}
      className={cn(
        "w-full justify-start text-sm font-medium",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
      onClick={onClick}
      asChild
    >
      <a href={href}>
        <Icon className="mr-3 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activePath, setActivePath] = React.useState<string>('Dashboard');

  const sidebarNavItems = [
    { href: '#', label: 'Dashboard', icon: Home },
    { href: '#', label: 'Analytics', icon: BarChart2 },
    { href: '#', label: 'User Management', icon: Users },
    { href: '#', label: 'Security', icon: ShieldCheck },
    { href: '#', label: 'System Settings', icon: Settings },
    { href: '#', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <aside className={cn(
      "w-[250px] h-screen fixed top-0 left-0 z-40",
      "bg-card border-r border-border",
      "flex flex-col",
      className
    )}>
      <div className="h-[70px] flex items-center px-6 border-b border-border">
        <a href="#" className="flex items-center gap-2 focus:outline-none">
          <span className="text-2xl font-bold text-primary">&gt;_</span>
          <span className="text-xl font-semibold text-foreground">tabler</span>
        </a>
      </div>
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        {sidebarNavItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={item.label === activePath}
            onClick={() => setActivePath(item.label)}
          />
        ))}
      </nav>
      <div className="p-4 mt-auto border-t border-border">
        <p className="text-xs text-muted-foreground text-center">Version 0.1.0</p>
      </div>
    </aside>
  );
};

export default SidebarNav;
