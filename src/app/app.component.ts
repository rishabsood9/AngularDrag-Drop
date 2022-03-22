import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .content {
        min-height: calc(100vh - 64px);
        display: flex;
      }
      .sidebar {
        max-width: 250px;
      }
      .details {
        flex-grow: 1;
        margin: 20px;
      }
    `,
  ],
})
export class AppComponent {
  components: any[] = ['sample1', 'sample2', 'sample3'];
  title = 'dragndrop';
  onClick() {}
}
