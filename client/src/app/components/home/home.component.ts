import { Component, OnInit } from '@angular/core';
import { SpaceObject } from 'src/SpaceObject';
import { SpaceSystem } from 'src/SpaceSystem';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpService,
  ){}

  addNewSystem(){
    let a = new SpaceSystem('galactica', 100, new SpaceObject('asfaf', 'asdfasfd', 123, 2113, 213213))
  
    this.systems.push(a);
    this.http.addSystem(a).subscribe({
      error: (err) => console.log(err),
    });
  }
    public systems!: SpaceSystem[]

    ngOnInit(): void {
      this.http.getAllSystems().subscribe({
        next: (data: any) => {this.systems = data; console.log(data[1]['id'] + ' '  + this.systems[1].id); console.log(data)},
        error: (err) => console.log(err)
      }
      )
    }
    deleteSystem(id: number){
      this.http.deleteSystem(id).subscribe({error: (err) => console.log(err)});
      for(let i = 0; i < this.systems.length; i++){
        if(this.systems[i].id == id) id = i
      }
      this.systems.splice(id,1)
    }
}
