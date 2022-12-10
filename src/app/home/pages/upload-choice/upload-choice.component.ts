import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-choice',
  templateUrl: './upload-choice.component.html',
  styleUrls: ['./upload-choice.component.scss']
})
export class UploadChoiceComponent implements OnInit {
  selectedTab = 'upload';
  selectedSize = '12x12 Inch';
  file!: File;
  constructor() { }

  ngOnInit(): void {
  }

  onTabChangeClick(tab: string) {
    this.selectedTab = tab;
  }

  onUploadClick() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      // you can use this method to get file and perform respective operations
      if (input.files) {
        let files = Array.from(input.files)[0];
        this.file = files;
        let image = document.createElement('img');
        image.src = URL.createObjectURL(files);
        let fileSize = +((files.size / 1024) / 1024).toFixed(4);
        if (fileSize <= 25) {
          console.log(files);
          const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
          if (canvas) {
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            ctx.drawImage(image, 0, 0);
          }
        }
      }
    };
    input.click();

  }

}
