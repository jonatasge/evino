import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { unsubscribeAll } from 'src/common/helpers';
import { EventEmitterService } from 'src/common/services';

@Component({
  selector: 'ev-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  loading = 0;

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }

  subscribe(): void {
    const event = EventEmitterService.get('loading');
    const subscription = event.subscribe((loading: boolean) =>
      loading ? this.loading++ : this.loading--
    );
    this.subscriptions.push(subscription);
  }
}