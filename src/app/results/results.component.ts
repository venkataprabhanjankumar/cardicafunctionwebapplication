import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  echo_video: File | null = null;

  result : string = ''
  isdisplay : boolean = false

  handleFile(event: any){
    this.echo_video = event.target.files[0]
  }

  handleSubmit(event: Event){
    event.preventDefault()
    console.log(this.echo_video)
    if (this.echo_video) {
      const fileName = this.echo_video.name;
      console.log(fileName)
      const formData = new FormData();
      formData.append("echovideo", this.echo_video)
      this.api.getResult(formData).subscribe({
        next: (data: any)=>{
          console.log(data)
          if(data.status == 'ok'){
            this.result = 'Predicted Ejection Fraction : '+data.ejection_fraction
          }
          else{
            this.result = "Error Occurred"
          }
        },
        error: (err: Error)=>{console.log(err)},
        complete: ()=>{console.log("Complete");this.isdisplay = true}
      })
    }
  }

}
