import { Component, OnInit } from '@angular/core';
import { RxDynamicFormBuilder,DynamicFormBuildConfig,DynamicFormConfiguration } from "@rxweb/reactive-dynamic-forms"
import { ReactiveFormConfig } from "@rxweb/reactive-form-validators"
import { StateModel } from "./models/state.model"
import { SameAsAddressModel } from "./models/same-as-address.model"
import { SERVER_DATA } from "./server-data-json"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    serverData:any[] = SERVER_DATA;

    dynamicForm:DynamicFormBuildConfig;
    uiBindings:string[] = ["firstName","country","state","permanentAddress","sameAsPermanent","correspondenceAddress"];
    dynamicFormConfiguration:DynamicFormConfiguration;
    constructor(private dynamicFormBuilder:RxDynamicFormBuilder){}

    
    ngOnInit(){
      ReactiveFormConfig.set({
        validationMessage:{
          required:'This Field is required'
        }
      })
      this.dynamicFormConfiguration = {
        controlConfigModels:[{modelName:"state",model:StateModel},{modelName:"sameAsAddress",model:SameAsAddressModel}]
      }
        this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData,this.dynamicFormConfiguration)
    }
}
