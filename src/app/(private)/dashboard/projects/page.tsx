import { GanttChartSquare, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageHeading } from '@/components/ui/typography';

export default function Page() {
  return (
    <main className="px-12 py-8">
      <PageHeading
        title="Projects"
        description="View the current state of your quotes and active projects."
        icon={<GanttChartSquare/>}
        cta={
          <Button variant="default"><Plus className="mr-2 h-4 w-4" /> NEW</Button>
        }
      />
    </main>
  );
}