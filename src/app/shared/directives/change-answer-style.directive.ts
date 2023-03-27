import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[changeAnswerStyle]',
})
export class ChangeAnswerStyleDirective {
  @Input('changeAnswerStyle') isCorrect: boolean;

  @HostListener('click') onClick() {
    this.border();
    this.color('#1e1e1e');
    
    if (this.isCorrect) {
      this.bgColor('#b4fab4');
    } else {
      this.bgColor('#f56e6e');
    }
  }

  @HostBinding('style.backgroundColor') bgColor(color: string) {
    return this.rend.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostBinding('style.color') color(color: string) {
    return this.rend.setStyle(this.el.nativeElement, 'color', color);
  }

  @HostBinding('style.border') border() {
    return this.rend.setStyle(
      this.el.nativeElement,
      'border',
      '1px solid #5D0885'
    );
  }

  constructor(private el: ElementRef, private rend: Renderer2) {}
}
