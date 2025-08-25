function setProperties(props, product) {

    function setDiscountProps(){//function that adresses everything related to disount, like disocunt badge etc
        if(props.sale < 10){
            product.querySelector(".discount-badge").style.display = "none" 
        }
        else{
            product.querySelector(".price").style.color = "var(--discount-color)"
            product.querySelector(".price>span").style.color = "var(--lighter-text)"
        }
    }
    product.getElementsByClassName("price")[0].innerHTML =
        `${Math.round(props.price * ((100 - props.sale) / 100) *100)/100 + props.currency}
         <span>${Math.round(props.price *100 )/100 + props.currency}</span>`;
    product.getElementsByClassName("description")[0].textContent = props.description;
    product.getElementsByClassName("delivery-time")[0].textContent = props.time;
    product.getElementsByClassName("model-manufacturer")[0].innerHTML = `${props.manufactorer} &middot ${props.model}`;
    setDiscountProps();

    function appendImgs(props) {
        props.images.forEach((imgSrc, i) => {

            let img = document.createElement("img")
            img.src = imgSrc
            if (i != 0) {
                img.style.display = "none";
            }
            product.getElementsByClassName("image-content")[0].getElementsByClassName("card-gallery")[0].
                appendChild(img);

        })
    }

    function appendDots(props) {//imgSrc is needed purely due to callback fn arguments order
        props.images.forEach((imgSrc, i) => {

            let dot = document.createElement("i")
            dot.className = "bi bi-circle-fill"
            if (i == 0) {
                dot.style.color = "var(--main-accent-color)";
            }
            product.getElementsByClassName("image-content")[0].getElementsByClassName("image-selected-dots")[0].
                appendChild(dot);
            //<i class="bi bi-dot"></i>
        })
    }

    appendImgs(props);
    if (props.images.length > 1) {
        appendDots(props);
    }

    const cardGallery = product.getElementsByClassName("image-content")[0].getElementsByClassName("card-gallery")[0]

    function selectDisplayedImageEventListener(cardGallery) {
        const amountOfImages = cardGallery.getElementsByTagName("img").length;
        let cardGalleryLength;
        let cursorToLeftDistance;
        let imgIndex;

        if (amountOfImages > 1) {
            cardGallery.addEventListener("mousemove", (event) => {

                cursorToLeftDistance = event.clientX - cardGallery.getBoundingClientRect().left;
                cardGalleryLength = cardGallery.getBoundingClientRect().right - cardGallery.getBoundingClientRect().left;
                imgIndex = Math.floor(cursorToLeftDistance / (cardGalleryLength / amountOfImages))
                imgIndex = imgIndex < 0 ? 0 : imgIndex
                //console.log(cursorToLeftDistance / (cardGalleryLength / amountOfImages));
                if (cardGallery.getElementsByTagName("img")[imgIndex].style.display == "none") {
                    Array.from(cardGallery.getElementsByTagName("img")).forEach((img, i) => {
                        img.style.display = "none"
                    })
                    cardGallery.getElementsByTagName("img")[imgIndex].style.display = "block";
                }

                let imageSelectedDots = product.getElementsByClassName("image-content")[0].getElementsByClassName("image-selected-dots")[0];
                if (imageSelectedDots.getElementsByTagName("i")[imgIndex].style.color != "var(--main-accent-color)") {
                    Array.from(imageSelectedDots.getElementsByTagName("i")).forEach((dot, i) => {
                        dot.style.color = "var(--lighter-text)"
                    })
                    imageSelectedDots.getElementsByTagName("i")[imgIndex].style.color = "var(--main-accent-color)";
                }
            })
        }
    }

    selectDisplayedImageEventListener(cardGallery)
}

//this looks convoluted