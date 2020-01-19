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
  @Input() format2: Format[];

  public display: Format[];
  profession: Array<any> = [
    'actress', 'actor', 'singer', 'scientific', 
    'athlete','businessman','businesswoman'
  ];
  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: '50',
    uploadAPI:  {
      url: Global.url+'/upload-image/',
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
    if(screen.width < 500){
      this.display = this.format2;
    } else {
      this.display = this.format;
    }
  }

  onSubmit() {
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.famousPeople.img = imageData.image;
  }
}