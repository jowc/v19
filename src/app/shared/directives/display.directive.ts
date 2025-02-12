import { Directive, effect, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class MakeVisibleContext{
  public appDisplay = ""
}

@Directive({
  selector: '[appDisplay]',
})
export class DisplayDirective implements OnInit {
  private readonly viewContainerRef = inject(ViewContainerRef)
  private readonly templateRef = inject(TemplateRef<any>)

  readonly text = input("", {alias: 'appDisplay'})
  readonly placeholder = input<TemplateRef<any> | null>(null, {alias: 'appDisplayThen'})

  private context = new MakeVisibleContext()

  constructor() { 
    effect(() => {
      if(this.text()){
        this.context.appDisplay = this.text()
      }
    })
  }

  ngOnInit(): void {
    if(this.text() === "hello"){
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
    } else{
      this.viewContainerRef.clear()
      this.viewContainerRef.createEmbeddedView(this.placeholder() as TemplateRef<any>)
    }
  }

}
