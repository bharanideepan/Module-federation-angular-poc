import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  appendUrl(): void {
    // console.log(this.route.parent)
    // this.router.navigateByUrl(
    //   this.router.createUrlTree(['second'],
    //     {
    //       relativeTo: this.route.parent,
    //       // skipLocationChange: true
    //     }
    //   )
    // );
    this.router.navigate(['/second'], { skipLocationChange: true });
  }
  
}
