import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any) {
    // console.log(target, name, descriptor)
    //store the original function in a variable
    const original = descriptor.value
    // do some manipulation with descriptor
    

    descriptor.value = function(...args: any) {
        console.log("Arguments ", args, " were passed in this function")
        const result = original(args)
    }
    //return the descriptor
    return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  constructor() {
    console.log("This statement was generated by the constructor", this.aSimpleMethod(5))
  }

  @log
  aSimpleMethod(a: any) {
    return a*a
  }
}
