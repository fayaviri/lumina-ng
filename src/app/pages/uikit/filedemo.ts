import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-file-demo',
  imports: [CardModule, FileUploadModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>File</ng-template>
        <p-fileupload mode="basic" chooseLabel="Seleccionar archivo" name="demo[]"></p-fileupload>
      </p-card>
    </section>
  `
})
export class FileDemo {}
