import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {

  constructor() {}

  @Input() public imageUrls: string[] = [];

  private readonly cssAnimation = 'transform 0.3s linear';
  private readonly cssAnimationNone = 'none';

  public sliderIndex = this.imageUrls.length > 1 ? 1 : 0;
  private slideAnimation = this.cssAnimationNone;

  public ngOnInit(): void {
    this.sliderIndex = this.imageUrls.length > 1 ? 1 : 0;
    if (this.imageUrls.length > 1) { this.slideAnimation =  this.cssAnimation; }
  }

  /**
   * Returns a string with a css translateX function to move the slider.
   */
  public get getSliderPosition(): string {
    const imageCount = this.imageUrls.length > 1 ? this.imageUrls.length + 2 : 1;
    return `translateX(-${(100 / imageCount) * this.sliderIndex}%)`;
  }

  /**
   * Returns a string with a css transition function to avoid weird animations.
   */
  public get getSliderTransition(): string {
    return this.slideAnimation;
  }
  /**
   * Returns a string with a css width % to calculate the width.
   */
  public get getSliderWidth(): string {
    const imageCount = this.imageUrls.length > 1 ? this.imageUrls.length + 2 : 1;
    return (imageCount * 100) + '%';
  }

  /**
   * Changes the index an position of the slider.
   *
   * @param newIndex New index to change to.
   */
  public toImage(newIndex: number): void {
    this.sliderIndex = newIndex;
  }

  /**
   * Send the slider index to the next image.
   */
  public nextImage(): void {
    if (this.imageUrls.length > 1) {
      if (this.sliderIndex >= this.imageUrls.length + 1) { return; }
      if (this.sliderIndex === this.imageUrls.length + 1) { this.sliderIndex = 0; }
      else { this.sliderIndex++; }
    }
  }

  /**
   * Send the slider index to the previous image.
   */
  public previousImage(): void {
    if (this.imageUrls.length > 1) {
      if (this.sliderIndex <= 0) { return; }
      if (this.sliderIndex === 0) { this.sliderIndex = this.imageUrls.length + 1; }
      else { this.sliderIndex--; }
    }
  }

  /**
   * Removes animation in last and first slides.
   */
  public handleTransitionEnd(): void {
    if (this.imageUrls.length > 1) {
      if (this.sliderIndex === 0) {
        this.slideAnimation = this.cssAnimationNone;
        this.sliderIndex = this.imageUrls.length;
        setTimeout(() => this.slideAnimation = this.cssAnimation, 0);
      }
      else if (this.sliderIndex === this.imageUrls.length + 1) {
        this.slideAnimation = this.cssAnimationNone;
        this.sliderIndex = 1;
        setTimeout(() => this.slideAnimation = this.cssAnimation, 0);
      }
    }
  }

}
