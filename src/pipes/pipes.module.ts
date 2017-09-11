import { NgModule } from '@angular/core';
import { RestiraStringPipe } from './restira-string/restira-string';
import { OrderByPipe } from './order-by/order-by';
import { LimpaStringPipe } from './limpa-string/limpa-string';
import { FilenamePipe } from './filename/filename';
@NgModule({
	declarations: [OrderByPipe,
    LimpaStringPipe,
    FilenamePipe,
    FilenamePipe],
	imports: [],
	exports: [OrderByPipe,
    LimpaStringPipe,
    FilenamePipe,
    FilenamePipe]
})
export class PipesModule {}
