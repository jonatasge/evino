import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/services/shared';

@Component({
  selector: 'app-body',
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
    this.unsubscribe();
  }

  subscribe(): void {
    const event = EventEmitterService.get('loading');
    const subscription = event.subscribe((loading: boolean) =>
      loading ? this.loading++ : this.loading--
    );
    this.subscriptions.push(subscription);
  }

  unsubscribe(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
