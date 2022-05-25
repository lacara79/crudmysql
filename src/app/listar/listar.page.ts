import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  
  url = 'http://localhost/aplicativo/select.php';
  lista: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.http.get(this.url).subscribe((resp) => {
      this.lista = resp;
      console.log(this.lista);
    })
  }
}
