function getPixelsFromTranslateX(translateString) {
   const match = translateString.match(/translateX\((-?\d+)px\)/);

   if (match && match[1]) {
      return parseInt(match[1], 10);
   }

   return null;
}

function canScrollLeftAfterScroll(element, scrollAmount) {
   element.scrollBy({//to set the value
      left: 0,
      behavior: "instant"
   })
   //if the images have not been scrolled, the value will be 0, it wont matter anyway

   console.log(canScrollLeftAfterScroll.name + " has been called")
   let canScrollLeft = true; // value to return in the end
   let originalScrollLeft = element.scrollLeft;
   if (originalScrollLeft || originalScrollLeft === 0) {
      console.log(canScrollLeftAfterScroll.name + " proceeded 1")
      element.scrollBy({
         left: scrollAmount,
         behavior: "instant"
      })

      let currScrollLeft = element.scrollLeft;

      element.scrollBy({
         left: 175,//min width
         behavior: "instant"
      })
      console.log("Difference: " + (currScrollLeft - element.scrollLeft))
      if (-(currScrollLeft - element.scrollLeft) >= 170) {
         element.scrollBy({
            left: -175,
            behavior: "instant"
         })
         canScrollLeft = true
      }
      else {
         canScrollLeft = false
      }

      element.scrollBy({
         left: originalScrollLeft - element.scrollLeft,
         behavior: "instant"
      })
   }
   return canScrollLeft;
}

function scrollImages(btn, direction, productItemsTable1) {
   //let productItemsTable1 = document.getElementById("productItemsTable1")
   let scrollAmount = productItemsTable1.getBoundingClientRect().width + 16 //including gap between rows
   //(productItemsTable1.scrollLeft % (productItemsTable1.getBoundingClientRect().width))
   let scrollData;
   switch (direction) {
      case "right": {
         scrollData = {
            left: -scrollAmount,
            behavior: "smooth"
         }

         productItemsTable1.parentElement.querySelectorAll("#mainPageCdp>div>button")[1].style.display = "block";
         break
      }
      case "left": {
         scrollData = {
            left: scrollAmount,
            behavior: "smooth"
         }
         if (!canScrollLeftAfterScroll(productItemsTable1, scrollAmount)) {
            btn.style.display = "none"
         }
         break
      }
   }
   productItemsTable1.scrollBy(scrollData)
}

//=------------------------------

// let productItemsTable1 = document.getElementById("productItemsTable1")
// let zero;
// let position;
// let start;
// function firstFrame(timestamp) {
//    zero = timestamp;
//    position = 0;
//    if (productItemsTable1.style.transform == '') {
//       productItemsTable1.style.transform = `translateX(${0}px)`;
//       start = 0;
//    }
//    else{
//       start = getPixelsFromTranslateX(productItemsTable1.style.transform);
//    }
//    move(timestamp)
// }
// function move(timestamp) {
//    //console.log(position)
//    productItemsTable1.style.transform = `translateX(${start - position}px)`;
//    position += 1;
//    if (position <= 100) {
//       requestAnimationFrame(move)
//    }
// }

// requestAnimationFrame(firstFrame);

//code that ended up being unused, but i might use it later