import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss']
}) export class TemplatePageComponent implements OnInit {

  @Input() public titre :string = 'Mon titre par défaut';
  @Output() public actionRetour = new EventEmitter<void>();

 @Input() public afficherbutton = true

  constructor() {
    console.info('On Constructor');
  }

  ngOnInit(): void {
    console.info('On Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('On changes',this.titre, changes);
  }

  ngOnDestroy(): void {
    console.info('On Destroy');
  }

  retour() {
    this.actionRetour.emit();
  }
}
