import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() configs:any;
  @Input() imgid:any;
  imgUrl:any;
  courseTitle = 'Git as Devops tool';
  currentDate = new Date();

  courseDetails = {
    title:'Git for beginner',
    price: 1499
  }

 
//http service
constructor(private myConfig:ConfigService) 
{

 }

  ngOnInit(): void {
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
    console.log('I am in child component');
    console.log(this.configs);
    //return type--observable
   // this.myConfig.getCourseConfig().subscribe(
     // (data)=>{
       // console.log(data)
     // }
    //);
  }

}
