import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { wineColor, wineIcon } from 'src/app/helpers';
import { IProduct, IResponse } from 'src/app/interfaces/api';
import { ProductService } from 'src/app/services/api';
import { theme } from 'src/app/styles/theme';
import { IImageSlideshow } from 'src/common/components';
import { unsubscribeAll } from 'src/common/helpers';
<<<<<<< HEAD
=======
import { EventEmitterService } from 'src/common/services';
>>>>>>> parent of b00eff0... Auto-generated commit

@Component({
  selector: 'ev-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private id: string;
  colors = theme;
<<<<<<< HEAD
  images: IImageSlideshow[];
  data: IProduct;
=======
  data: IProduct;
  images: IImageSlideshow[];
>>>>>>> parent of b00eff0... Auto-generated commit

  constructor(
    protected activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
<<<<<<< HEAD
=======
    EventEmitterService.get('error').emit(false);
>>>>>>> parent of b00eff0... Auto-generated commit
    unsubscribeAll(this.subscriptions);
  }

  subscribe(): void {
    const subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.read();
      }
    );
    this.subscriptions.push(subscription);
  }

  read(): void {
<<<<<<< HEAD
    this.service.find(this.id).subscribe((response: IResponse<IProduct>) => {
      this.data = response.data;

      const images = response.data?.bundleProducts.map(
        (product: IProduct) => product.images
      );
      this.images = [response.data?.images, ...images];
    });
=======
    EventEmitterService.get('loading').emit(true);
    this.service.find(this.id).subscribe(
      (response: IResponse<IProduct>) => {
        EventEmitterService.get('loading').emit(false);

        this.data = response.data;
        const images = response.data?.bundleProducts.map(
          (product: IProduct) => product.images
        );
        this.images = [response.data?.images, ...images];
      },
      (error: any) => EventEmitterService.get('error').emit(true)
    );
>>>>>>> parent of b00eff0... Auto-generated commit
  }

  getWineColor(type: string): string {
    return wineColor(type);
  }

  getWineIcon(type: string): string {
    return wineIcon(type);
  }
}
