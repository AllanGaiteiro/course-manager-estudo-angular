import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        NavbarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    exports: [
        NavbarComponent,
        Error404Component,
    ]
})

export class CoreModule {

}