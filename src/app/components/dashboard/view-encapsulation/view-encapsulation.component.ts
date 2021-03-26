import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // async selectFile(e) {
  //   console.log("===", e.target.files);
  //   this.files = e.target.files;
  //   this.urls ='';
  //   for (let i = 0; i < this.files.length; i++) {
  //     let reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const obj = {
  //         url: e.target.result,
  //         imageName: this.files[i].name,
  //       }
  //       if (this.files[i].type == 'image/png' || this.files[i].type == 'image/jpeg' || this.files[i].type == 'image/jpg') {
  //         obj['type'] = 'image'
  //       } else {
  //         let type = this.files[i].name.split('.');
  //         obj['type'] = type[type.length - 1]
  //         console.log("type", type);
  //       }
  //       console.log("OBJ", encode(obj.url));
  //       this.showImage = obj.url;
  //       this.showImageName = obj.imageName;
  //       this.urls = encode(obj.url)
        
  //     }
  //     await reader.readAsDataURL(this.files[i]);
  //   }
  // }

}
