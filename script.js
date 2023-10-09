
    //  const search = document.getElementById("search").value.toUpperCase();
    //  const productDetails = document.getElementById("product-details");
    //   const productItems = document.querySelectorAll(".products");
    //   const productName = document.getElementsByTagName('h2');
    // //  submitBtn = document.getElementById("submit");




     const toSearch = () =>{
        const search = document.getElementById("search").value.toUpperCase();
        const productDetails = document.getElementById("product-details");
         const productItems = document.querySelectorAll(".products");
         const productName = productDetails.getElementsByTagName('h2');

         for (var i = 0; i < productName.length; i++){
            let align = productItems[i].getElementsByTagName("h2")[0];
               console.log(i);
               if (align) {
                  let txtValue = align.textContent || align.innerHTML;
                   console.log(txtValue);
                   if(txtValue.toUpperCase().indexOf(search) > -1){
                       console.log(search);
                      productItems[i].style.display = "";
                      console.log(productName[i])
                   }else{
                      productItems[i].style.display = "none";
                   }
               }
         }
     }
