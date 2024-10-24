import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AItemList } from '../../interfaces/item-key-list';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  private _selectItemDefualt : string = ''
  private _labelCaption : string = '';

  @Input({alias:'labelCaption',required:true})
  set labelCaption(clValue : string){
    this._labelCaption = clValue;
  }

  @Input({alias:'selectItemDefualt',required:true})
   set selectItemDefualt(clValue : string){
    this._selectItemDefualt = clValue;
   }

   get labelCaption() :string{
    return this._labelCaption;
   }

   get selectItemDefualt() :string{
    return this._selectItemDefualt;
   }

  listItem : AItemList = [];


}
