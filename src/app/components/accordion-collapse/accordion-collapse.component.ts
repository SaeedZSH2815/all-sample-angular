import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-accordion-collapse',
  standalone: true,
  imports: [],
  templateUrl: './accordion-collapse.component.html',
  styleUrl: './accordion-collapse.component.scss'
})
export class AccordionCollapseComponent implements AfterContentInit ,AfterViewInit {

  @ViewChild('btn') btn? : ElementRef;
  @ViewChild('body') body? : ElementRef;

  @Input({alias:'headerId'})
   headerId : string = 'defualtHeaderId';

  @Input({alias:'bodyId'})
  bodyId   : string = 'defualtBodyId';

  @Input({alias:'headerTitle'})
  headerTitle : string = 'Defualt Header Title';

  @Input({alias:'bodyText'})
  bodyText   : string = 'Defualt Body Text';

  @Input({alias:'isActive'})
  isActive   : boolean = false;


  @Input('widgets') extComponents?: Component;


  constructor(private _renderer2 : Renderer2){


  }
  ngAfterContentInit(): void {
    //Step 2
    //console.log("ngAfterContentInit");
     //console.log(document.getElementById('header_2'));
  }

  ngAfterViewInit(): void {
    //Step 3
    //console.log("ngAfterViewInit");

    this.btn?.nativeElement.setAttribute('data-accordion-target','#'+this.bodyId);
    this.btn?.nativeElement.setAttribute('aria-controls',this.bodyId);

    if(this.body?.nativeElement)
     this.body?.nativeElement.setAttribute('aria-controls',this.bodyId);
    else
     this._renderer2.setAttribute(this.body?.nativeElement,'aria-controls',this.bodyId);

    initFlowbite();

  }



}
