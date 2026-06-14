import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../service/node.service';

@Component({
  selector: 'app-tree-demo',
  imports: [CardModule, TreeModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Tree</ng-template>
        <p-tree [value]="nodes"></p-tree>
      </p-card>
    </section>
  `
})
export class TreeDemo implements OnInit {
  nodes: TreeNode[] = [];

  constructor(private nodeService: NodeService) {}

  ngOnInit(): void {
    this.nodes = this.nodeService.getTreeNodes();
  }
}
