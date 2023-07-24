'use client';
  
import { GanttChartSquare, LayoutGrid, LogOut, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/util';
  
export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState<boolean>(false);
  
  const links = (
    <ul className="grid w-full gap-1.5">
      <li>
        <Link href="/dashboard">
          <Button variant="link"
            className={cn('w-full justify-start p-2 text-rose-950', {
              'bg-rose-50': pathname === '/dashboard',
            })}
          >
            <LayoutGrid className="mr-2 h-4 w-4" /> Dashboard
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/projects">
          <Button variant="link"
            className={cn('w-full justify-start p-2 text-rose-950', {
              'bg-rose-50': pathname === '/dashboard/projects',
            })}
          >
            <GanttChartSquare className="mr-2 h-4 w-4" /> Projects
          </Button>
        </Link>
      </li>
      <li className="block w-full sm:hidden">
        <Button
          variant="link"
          className="flex w-full items-center justify-start p-2 text-left"
        >
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </li>
    </ul>
  );
  
  return (
    <nav className="fixed z-10 w-full min-w-fit bg-rose-100 p-2 text-rose-950 sm:relative sm:w-auto">
      <div className="hidden h-full flex-col justify-between sm:flex">
        <div>
          <div className="mb-2 w-auto p-2 text-4xl font-extrabold tracking-tight sm:w-44 lg:text-5xl">H</div>
          <div className="mt-2">{links}</div>
        </div>
        <div className="m-4 text-center">
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </div>
      </div>
      {mobileMenuVisible && <div className="flex bg-rose-50 p-2 sm:hidden">{links}</div>}
      <div className="flex justify-between sm:hidden">
        <div
          className="cursor-pointer p-4"
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
}

  