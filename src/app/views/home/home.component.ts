import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Formacao } from '../../core/model/formacao';
import { formacoes } from '../../core/model/formacaoArray'
import { Experiencia } from '../../core/model/experiencia';
import { experiencias } from '../../core/model/experienciaArray'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formacoes: Formacao[] = [];
  experiencias: Experiencia[] = [];
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {

      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

    this.formacoes = formacoes;
    this.experiencias = experiencias.reverse();
    
  }

}
