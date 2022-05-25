import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.page.html',
  styleUrls: ['./inserir.page.scss'],
})
export class InserirPage implements OnInit {
  
  url = 'http://localhost/aplicativo/insert.php';

  constructor(private http: HttpClient) { }

  nome: any;
  email: any;

  ngOnInit() {
  }

  cadastrar(){

      
    this.http.get(`${this.url}?nome=${this.nome}&email=${this.email}`).subscribe(data => {
      console.log(data);
    });
  }

}
