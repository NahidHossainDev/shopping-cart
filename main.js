
         function valueToNumber(id){
            let inputValue = document.getElementById(id).value;
            return inputValue = parseInt(inputValue);
         }
         function stringToNumber(id){
            let inputValue = document.getElementById(id).innerText;
            return inputValue = parseInt(inputValue);
         }
            numberOfPhone = valueToNumber("countPhn");
            numOfCase = valueToNumber("numOfCase")

         function totalPriceCalculation (numberOfPhone,price,priceId,cntId){
               let totalPrice = price * numberOfPhone;
               //update value
               document.getElementById(priceId).innerText = totalPrice;
               document.getElementById(cntId).value = numberOfPhone;
               return totalPrice;
         }

         function subTotalCalculation(totalCasePrice,addPrice){
               let subTotal = totalCasePrice + addPrice;
               document.getElementById("subtotal").innerText = subTotal;
               return subTotal;
         }
         
         function finalTotalCalculation(subTotal){
               let tax = (subTotal/100)*4
               document.getElementById("tax").innerText = tax;
               let finalTotal = tax + subTotal;
               document.getElementById("total").innerText = finalTotal;  
         }
         // Plus btn Listener:
         document.getElementById("plusBtn").addEventListener("click",function(){
               numberOfPhone++;
               let totalPhnPrice = totalPriceCalculation(numberOfPhone,1219,"phnPrice","countPhn");  
               casePrice = stringToNumber("casePrice");
               subTotal = subTotalCalculation(totalPhnPrice,casePrice);
               finalTotalCalculation(subTotal);   
         });
        
         // Minus Btn Listener:
         document.getElementById("minusBtn").addEventListener("click",function(){
            if(numberOfPhone>0){
                numberOfPhone--;
                let totalPhnPrice = totalPriceCalculation(numberOfPhone,1219,"phnPrice","countPhn"); 
                casePrice = stringToNumber("casePrice");
                subTotal = subTotalCalculation(totalPhnPrice,casePrice);
                finalTotalCalculation(subTotal)
            }       
         });

          // Case Plus btn Listener:
          document.getElementById("case-plus-btn").addEventListener("click",function(){
               numOfCase++;
               let totalCasePrice = totalPriceCalculation(numOfCase,59,"casePrice","numOfCase"); 
               phnPrice = stringToNumber("phnPrice");
               subTotal = subTotalCalculation(totalCasePrice,phnPrice);
               finalTotalCalculation(subTotal);
         });
          // Case Minus Btn Listener:
          document.getElementById("case-minus-btn").addEventListener("click",function(){
            if(numOfCase>0){
                numOfCase--;
                let totalCasePrice = totalPriceCalculation(numOfCase,59,"casePrice","numOfCase");
                phnPrice = stringToNumber("phnPrice");
                subTotal = subTotalCalculation(totalCasePrice,phnPrice);
                finalTotalCalculation(subTotal); 
            }         
         });