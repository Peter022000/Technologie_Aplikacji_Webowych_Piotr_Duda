import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[formCheck]'
})
export class FormCheckDirective {
  constructor(private el: ElementRef) {}

  @HostListener('submit')
  onSubmit() {
    const form = this.el.nativeElement;
    const inputs = form.querySelectorAll('input, select, textarea');

    let isValid = true;

    inputs.forEach((input: any) => {
      if (input.required && input.value.trim() === '') {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });
  }
}
