import { ReplacePipe } from './replace.pipe';
import { MoneyPipe } from './money.pipe';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        MoneyPipe,
        ReplacePipe
    ],
    exports: [
        MoneyPipe,
        ReplacePipe
    ]
})

export class AppPipeModule {}