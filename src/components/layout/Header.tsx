import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Bell, Home, LayoutGrid, Box, FileText, Edit3, Image, BookOpen, UserCircle, Settings, LogOut, Code2 } from 'lucide-react';

interface TopNavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  onClick?: () => void;
}

const TopNavItem: React.FC<TopNavItemProps> = ({ href, label, icon: Icon, active, onClick }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "h-full px-3 py-2 rounded-none border-b-2 text-sm font-medium",
        active 
          ? "border-primary text-primary"
          : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50",
        "flex items-center gap-2"
      )}
      onClick={onClick}
      asChild
    >
      <a href={href}>
        <Icon className="h-4 w-4" />
        {label}
      </a>
    </Button>
  );
};

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [activeTopNav, setActiveTopNav] = React.useState<string>('Home');

  const topNavItems = [
    { href: '#', label: 'Home', icon: Home },
    { href: '#', label: 'Interface', icon: LayoutGrid },
    { href: '#', label: 'Components', icon: Box },
    { href: '#', label: 'Pages', icon: FileText },
    { href: '#', label: 'Forms', icon: Edit3 },
    { href: '#', label: 'Gallery', icon: Image },
    { href: '#', label: 'Documentation', icon: BookOpen },
  ] as const; // Ensures labels are treated as string literals

  return (
    <header className={cn(
      "h-[70px] fixed top-0 left-[250px] right-0 z-30",
      "bg-card border-b border-border", // Use bg-card as per context and visual (surface not defined)
      "flex items-center justify-between px-6",
      className
    )}>
      <div className="flex items-center h-full">
        {/* Optional: Search bar. The provided TopHeader.tsx had it commented out. Keeping it for now. */}
        {/* <div className="relative mr-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-9 w-64 bg-background" />
        </div> */}
        <nav className="flex items-center space-x-1 h-full">
          {topNavItems.map((item) => (
            <TopNavItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.label === activeTopNav}
              onClick={() => setActiveTopNav(item.label)}
            />
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="hidden sm:inline-flex items-center gap-2">
          <Code2 className="h-4 w-4" />
          Source code
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=janepearson" alt="Jane Pearson" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Jane Pearson</p>
                <p className="text-xs leading-none text-muted-foreground">
                  Administrator
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
