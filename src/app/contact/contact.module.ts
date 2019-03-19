import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';
import { ContactService } from './contact.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ContactUsComponent],
    declarations: [ContactUsComponent],
    providers: [ContactService]
})
export class ContactModule {

}
