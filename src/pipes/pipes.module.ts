import { NgModule } from '@angular/core';
import { RestiraStringPipe } from './restira-string/restira-string';
import { OrderByPipe } from './order-by/order-by';
import { LimpaStringPipe } from './limpa-string/limpa-string';
@NgModule({
	declarations: [OrderByPipe,
    LimpaStringPipe],
	imports: [],
	exports: [OrderByPipe,
    LimpaStringPipe]
})
export class PipesModule {}
