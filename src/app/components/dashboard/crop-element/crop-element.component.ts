import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import Cropper from 'cropperjs'

@Component({
  selector: 'app-crop-element',
  templateUrl: './crop-element.component.html',
  styleUrls: ['./crop-element.component.scss']
})
export class CropElementComponent implements OnInit, AfterViewInit {
  imageChangedEvent: any = '';
  @ViewChild('image', { static: false })
  public imageEle!: ElementRef;

  croppedImage: any = '';
  imageUrl = 'https://miro.medium.com/max/344/1*GiZnE6GwqOiBLAb6pa702Q.jpeg';
  // imageUrl = 'data:image/jpeg;base64,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';
  imageUrlDest = '';
  cropper!: Cropper;
  isSubmit = false;
  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    let toBlobUrl:any;
    const str: any = "https://media.gettyimages.com/photos/ivan-toney-of-brentford-celebrates-after-scoring-his-teams-first-goal-picture-id1280754572?s=612x612"
    // this.imageEle.nativeElement.src = 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FBMW-2+Series+Gran+Coupe-231020191832.jpg&h=300&w=450&q=100';
    this.imageEle.nativeElement.src = str;
    this.cropper = new Cropper(this.imageEle?.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      viewMode: 3,
      center: true,
      autoCropArea: 0.5,
      ready: () => {
        // this.cropper.setCanvasData({height: this.cropper.getImageData().naturalHeight, width:  this.cropper.getImageData().naturalWidth })

      },
      crop: (event) => {
        // console.log('EVENT Crop', event);
        // console.log("CROPEER", this.cropper.getImageData());
        // console.log("naturalHeight", this.cropper.getImageData().naturalHeight / 2);
        // console.log("naturalWidth", this.cropper.getImageData().naturalWidth / 2);
        
        const data = {
          width: 130,
          height: 130
        }
        this.cropper.setCropBoxData(data)
        const canvas = this.cropper.getCroppedCanvas(data)
        this.imageUrlDest = canvas.toDataURL("image/png")
       canvas.toBlob(blob => {
        toBlobUrl = URL.createObjectURL(blob)
        console.log('toBlobUrl', toBlobUrl);
        })
        
      }
    })
  }

  submitImage(){
    this.isSubmit = true
      console.log('this.imageUrlDest', this.imageUrlDest)
      console.log('this.imageUrlDest', this.imageUrlDest)
  }



   el(id:any){return document.getElementById(id);}


  fileChangeEvent(event: any): void {

      this.imageChangedEvent = event;

  }

  imageCropped(event: ImageCroppedEvent) {

      this.croppedImage = event.base64;

  }

  imageLoaded() {

      /* show cropper */

  }

  cropperReady() {

      /* cropper ready */

  }

  loadImageFailed() {

      /* show message */

  }

}
