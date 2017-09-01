import { NgModule } from '@angular/core';
import { RestiraStringPipe } from './restira-string/restira-string';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [OrderByPipe],
	imports: [],
	exports: [OrderByPipe]
})
export class PipesModule {}
