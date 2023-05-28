import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpaceSystem } from 'src/SpaceSystem';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit{

  id!: number;
  System!:SpaceSystem; 

  private querySubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
  ){
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.id = queryParam['id'];
      }
  );
    console.log(this.id)
  }

  deleteSystem(id: number){
    this.http.deleteSystem(id).subscribe({error: (err) => console.log(err)});
    this.router.navigate(['home'])
  
  }

  updateSystem(){
    this.http.changeSystem(this.System).subscribe({
      error: err => console.log(err)
    });
  }

  ngOnInit(): void {
    this.http.getSystem(this.id).subscribe({
      next: (data: any) => this.System = data,
      error: (err) => console.log(err)
    })
  }
}
