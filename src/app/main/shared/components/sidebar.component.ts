import { Component } from '@angular/core';
import { SidebarItemsComponent } from './sidebar-items.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemsComponent],
  template: `
    <div class="col-span-1 h-full pr-4 md:pr-6">
      <div class="flex flex-col-items-end">
        <div class="space-y-2 lg-w-[230px]">
          <sidebar-items></sidebar-items>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class SidebarComponent {

}
