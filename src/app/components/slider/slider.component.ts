import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { sliderData } from 'src/app/api/data-slider';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  slider: Slide[] = sliderData;

  currentSlide: Slide = this.slider[0]

  currentIndex: number = 0

  indexObservable: Observable<number> = interval(6000)
  indexObservableSub: Subscription | undefined
  constructor() { }

  ngOnInit(): void {
    this.indexObservableSub = this.indexObservable.subscribe({
      next: (value: number) =>{
        this.handleChangeImage(1)
      }
    })

  }
  ngOnDestroy(): void {
      this.indexObservableSub?.unsubscribe()
  }
handleChangeImage(i: number){
  let newIndex;
  if(i === -1){ 
    /*console.log("precédent : ", i);*/
    newIndex = this.currentIndex -1
    if(newIndex >= 0){
      this.currentIndex = newIndex
    }else{
      this.currentIndex = this.slider.length -1
    }
  }
  else{
    newIndex = this.currentIndex + 1
    }
  if(newIndex > (this.slider.length -1)){
    this.currentIndex = 0
  }else{
    this.currentIndex = newIndex
  }
  }

}