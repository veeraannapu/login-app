import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http : HttpClient) { }

  userName = "";
  password = "";
  isSuccesful = false;
  response = null;
  temp = "";
  ngOnInit() {
  }

  onLogin(){
    this.isSuccesful = true;
    //var url = "http://10.0.0.37:8088/test";
    var url = "http://localhost:8080/login?username="+this.userName+"&password="+this.password;
    console.log("making url call :")
    return this.http.get(url,{headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }).
      subscribe( (data) => {
        this.response = data;
        this.temp = this.response.password;
      }
        //  data => {
        //   this.response = JSON.stringify(data);
        //   var jsonVal = JSON.parse(this.response);
        //   this.temp = jsonVal.userName;
        //   console.log("I SEE DATA HERE: ", jsonVal.userName);
        //   }
       )
       
      
  }


}
