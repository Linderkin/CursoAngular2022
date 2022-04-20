import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiprimeraApp';
  public ArregloTarjetas: Tarjeta[]=[]

  ngOnInit(): void {
    this.ArregloTarjetas =[
    {titulo: 'Video 1', subtitulo:'Subtitulo Video 1', image:"https://www.tonica.la/__export/1609266224428/sites/debate/img/2020/12/29/kimetsu-no-yaiba-portada.jpg_1902800913.jpg"},
    {titulo: 'Video 2', subtitulo:'Subtitulo Video 2', image:"https://www.frikimasters.es/blog/wp-content/uploads/2021/03/demon_slayer.jpg"},
    {titulo: 'Video 3', subtitulo:'Subtitulo Video 3', image:"https://i.blogs.es/e8f8ff/kimetsu-no-yaiba/840_560.jpg"},
  ]
  }
}
