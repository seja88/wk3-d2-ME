export class ProgressBar {
  constructor(value, gradient, maxValue) {
    this.value = value;
    this.gradient = gradient;
    this.maxValue = maxValue;
    this.element = document.createElement('div');
    this.refreshElement();

    // constructor(value = 0) { you can assign value into the function via paramethers and assign it to something
    //   this.value = value;
    //   this.gradient = gradient;
    //   this.maxValue = maxValue;
    //   this.element = document.createElement('div');
    //   this.refreshElement();
    // }
    //@TODO no.4
    //  make it possible to create progress bar with any default value.
    //  this value should be passed to constructor


    //@TODO no.5
    //  go back to script.js and create more progressBars, see how easy it is to reuse this component
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${this.value / this.maxValue * 100}%" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;

    const plusBtn = this.element.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      this.value = Math.min(this.maxValue, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector('.btn-minus');
    //@TODO no.3
    //  implement logic for minus button. if you decrease the value, make sure, it is not less then 0
    minusBtn.addEventListener('click', () => {
      // this.value = Math.max(0, this.value - this.gradient);
      // this.refreshElement();
      this.value = this.value - this.gradient < 0 ? 0 : this.value - this.gradient; 
      this.refreshElement();
      // this.value = () => {
      //   if ( (this.value - this.gradient) < 0) {
      //     return 0;
      //   } else {
      //     this.value - this.gradient;
      //   }
      // }
      // this.refreshElement();
    });
    
  }
}
