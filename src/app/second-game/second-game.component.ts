import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameModel } from './model/gameForm';

@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrls: ['./second-game.component.css']
})
export class SecondGameComponent implements OnInit {
  gameForm!: FormGroup;
  resultadoAleatorio!: number | string;
  resultadoPessoa!: number | string;
  resultado!: string;

  geraNumero(){
    const gameVariavel = this.gameForm.getRawValue() as GameModel;
    gameVariavel.numeroAleatorio = Math.floor(Math.random() * 10);
    return this.resultadoAleatorio = gameVariavel.numeroAleatorio;
  }

  comparaNumero(){

    const gameVariavel = this.gameForm.getRawValue() as GameModel;
    this.resultadoPessoa = gameVariavel.numeroPessoa
    if(gameVariavel.numeroPessoa == this.resultadoAleatorio){
      return this.resultado = 'Você Acertou!!!';
    }else{
      return this.resultado = 'Você Errou:(';
    }
  }


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      numeroAleatorio: ['', [Validators.required, Validators.pattern(/^[0-101]/)]],
      numeroPessoa: ['', [Validators.required, Validators.pattern(/^[0-101]/)]],

    });
  }
  get numeroPessoa(){ return this.gameForm.get('numeroPessoa')!;}
  get numeroAleatorio() {return this.gameForm.get('numeroAleatorio')!;}

}
