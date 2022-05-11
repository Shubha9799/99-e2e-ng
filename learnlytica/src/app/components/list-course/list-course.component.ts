import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})

  export class ListCourseComponent implements OnInit {
    cList: any;
    dList: any;
    eList: any;
    fList: any;
    gList: any;
  userList: any;
 
  
   
  
    constructor(private call: ConfigService, private myUserSrv:UserService) { }
    myTitle:String="THBS"; //custom pipe
 
    ngOnInit(): void {
       //backend call to api/users
       this.myUserSrv.getProfiles().subscribe((result: any) => {
        this.userList = result;
      })
    



  
      this.call.getCourseListCourse().subscribe((value) => {
        this.cList = value
      });
      this.call.getCourseListCourse1().subscribe((value1) => {
        this.dList = value1
      });
      this.call.getCourseListCourse2().subscribe((value2) => {
        this.eList = value2
      });
      this.call.getCourseListCourse3().subscribe((value3) => {
        this.fList = value3
      });
      this.call.getCourseListCourse4().subscribe((value4) => {
        this.gList = value4
      });
  
  
    }
  
  }

