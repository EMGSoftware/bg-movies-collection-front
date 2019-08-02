import { NgModule } from '@angular/core';

import
{
	MatChipsModule,
	MatSelectModule,
	MatTooltipModule,
	MatButtonModule,
	MatIconModule,
	MatCheckboxModule,
	MatCardModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';

@NgModule( {
	imports: [MatChipsModule, MatSelectModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTooltipModule],
	exports: [MatChipsModule, MatSelectModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTooltipModule],
} )

export class SharedMaterialModule { }