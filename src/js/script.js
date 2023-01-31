import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new instance of ProgressBar.
//    Explore ProgressBar class, but the constructor does not need any parameter.
//    Take a body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:
let bar = new ProgressBar(0,1,10)
document.body.appendChild(bar.element)
let bar2 = new ProgressBar(0,2,20)
document.body.appendChild(bar2.element)
let bar3 = new ProgressBar(0,5,50)
document.body.appendChild(bar3.element)
let bar4 = new ProgressBar(0,10,100)
document.body.appendChild(bar4.element)


// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
