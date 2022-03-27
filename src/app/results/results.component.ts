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
      formData.append("echo_video", this.echo_video)
      this.api.getResult(formData).subscribe({
        next: (data: any)=>{
          console.log(data)
        },
        error: (err: Error)=>{console.log(err)},
        complete: ()=>{console.log("Complete")}
      })
    }
  }

}
