 ## reconciliation

 comparing the browser dom with the react's own virtual dom , if any changes are m,ade so that when a change is made we 
 dont need to reload or refresh the whole page like in javascript, We can compare two trees , one tree of browser DOM and other tree of the react's
 virtual DOM and then compare them to see what componenets have changed and react only changes that part of the website , it doesnot reload the whole
 website page , thats reconceilioation.

  ## Fibre concepr

  Fibre is a react property which means lfour things we can do:

  1. We can reuse the already made components in our pages
  2. We can abort work s we dont need
  3. We can pause the work and come back to it late
  4. We can put some work in high pririty queue than others

  Thats basically it.