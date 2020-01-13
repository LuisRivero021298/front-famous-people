import { Component, OnInit, Input } from '@angular/core';
import { FamousPeople } from '../../models/FamousPeople';
import { ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

export interface Format {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() famousPeople;
  @Input() isEdit:string = 'y';
  @Input() new:boolean = false;
  @Input() format: Format[];

  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: '50',
    uploadAPI:  {
      url: Global.url+'upload-image/',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Upload Image',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
    
  };
  constructor(private _route: ActivatedRoute) { 
  }

  ngOnInit() {
   
  }

  onSubmit() {
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.famousPeople.img = imageData.image;
  }
}