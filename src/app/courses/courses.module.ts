import { AppPipeModule } from './../shared/pipe/app.pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CourseInfoComponent,
        CoursesListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            //objeto de rotas
            {
                path: 'courses', component: CoursesListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
        ]),
    ]
})

export class CoursesModule {}