$(document).ready(function () {
    $('input[name="buildingType"]').click(function () {
        console.log('hide-and-show')
        if ($(this).attr("value") == "residential") {
            
            
            $(".BuildNumber").show()
            $(".commercial").hide()
            $(".corporate").hide()
            $(".hybrid").hide()
            $(".residential").show();
            
            
            
            
        }
        if ($(this).attr("value") == "commercial") {
            $(".residential").hide();
            $(".BuildNumber").show()
            $(".corporate").hide()
            $(".hybrid").hide()
            $(".commercial").show()
            
        }
        if ($(this).attr("value") == "corporate") {
            $(".residential").hide();
            $(".BuildNumber").show()
            $(".commercial").hide()
            $(".hybrid").hide()
            $(".corporate").show()
            
        }
        if ($(this).attr("value")== "hybrid") {
            $(".residential").hide();
            $(".BuildNumber").show()
            $(".commercial").hide()
            $(".corporate").hide()
            $(".hybrid").show()
           
        }
        
        
    });
});

function calculateCommercial() {
	

  
	var nmbElevator = document.getElementById('Number-Of-Elevator').value;
  

    let totalResultat=nmbElevator
  
    document.getElementById('elevator-amount').value = Math.round(totalResultat);

    



}


function calculateResidential(){
    
    var residentialOne =document.getElementById("residentialOne").value;
    var residentialTwo =document.getElementById("residentialTwo").value;

    let residentialResultat=residentialOne/residentialTwo;
    let totalResultat=Math.ceil(residentialResultat/6);

    let columnNbr=Math.ceil(residentialTwo/20);

    

    
    
    
    

    var tryIt = residentialTwo
    console.log("floors is: ", tryIt)
    if(tryIt > 20){
        document.getElementById("elevator-amount").value=Math.ceil(totalResultat)*Math.ceil(columnNbr);
        console.log("residential")

        
    } else if(tryIt<=20){
        document.getElementById("elevator-amount").value=Math.ceil(totalResultat);
    }

    
   
}


function calculateCorporate(){
    console.log(calculateCorporate)
    
    var corporateMine=document.getElementById("corporateMine").value;
    var corporateYou=document.getElementById("corporateYou").value;
    console.log("corporateYou")
    var corporateHim=document.getElementById("corporateHim").value;
    console.log("corporateHim")
    var corporateHer=document.getElementById("corporateHer").value;
    var corporateUs=document.getElementById("corporateUs").value;
    console.log("corporate us")

    let sumOfFloor=(+corporateYou)+(+corporateHim);
    console.log("corporateYou+corporateHim")
    let totalOccupants=corporateUs*sumOfFloor;
    console.log("corporateUs*sumofFloor")
    let numberOfElevators=Math.ceil(totalOccupants/1000);
    console.log("totaloccupants/1000")
    let numberOfElevatorColumn=Math.ceil(sumOfFloor/20);
    console.log("sumofFloor/20")
    let averageNumberOfElevatorsPerColumn=Math.ceil(numberOfElevators/numberOfElevatorColumn);
    console.log("numberofelevators/numberofelevatorcolumn")
    let totalResult=Math.ceil(averageNumberOfElevatorsPerColumn*numberOfElevatorColumn);
    console.log("averageNumberofelevatorspercolumn*numberofelevatorcolumn")

    document.getElementById("elevator-amount").value=Math.ceil(averageNumberOfElevatorsPerColumn*numberOfElevatorColumn);
    console.log("elevatoramount")

    
}

function calculateHybrid(){
    var hybridMy=document.getElementById("hybridMy").value;
    var hybridHis=document.getElementById("hybridHis").value;
    var hybridIts=document.getElementById("hybridIts").value;
    var hybridWe=document.getElementById("hybridWe").value;
    var hybridYour=document.getElementById("hybridYour").value;
    var hybridThere=document.getElementById("hybridThere").value;

    let sumOfFloors=(+hybridHis)+(+hybridIts);
    let totalOccupants=hybridYour*sumOfFloors;
    let numberOfElevators=Math.ceil(totalOccupants/1000);
    let numberOfElevatorsColumn=Math.ceil(sumOfFloors/20);
    let averageNumberOfElevatorsPerColumn=Math.ceil(numberOfElevators/numberOfElevatorsColumn);
    let totalResult=Math.ceil(averageNumberOfElevatorsPerColumn*numberOfElevatorsColumn);


    document.getElementById("elevator-amount").value=Math.ceil(totalResult);

    
}


function formatNumber(number) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(number)
}

function price(){
    console.log("test")
    var elevatorUnitPrice=document.getElementById("elevator-unit-price").value;
    var installationFees=document.getElementById("installation-fees").value;
    var finalPrice=document.getElementById("final-price").value;
    var elevatorAmount=document.getElementById("elevator-amount").value;
    var elevatorTotalPrice=document.getElementById("elevator-total-price").value;

    

    let standardPrice = 7565;
    let premiumPrice = 12345;
    let exceliumPrice = 15400;



    


    

     
    var test = $("input[name=colorRadio]:checked").val();

    console.log("test is: ", test)

    if (test == "standard") {
        document.getElementById("elevator-unit-price").value=formatNumber(standardPrice);
        document.getElementById("elevator-total-price").value=formatNumber(standardPrice*elevatorAmount);
        document.getElementById("installation-fees").value=formatNumber((standardPrice*elevatorAmount)/10);
        document.getElementById("final-price").value=formatNumber((standardPrice*elevatorAmount)+(standardPrice*elevatorAmount)/10);
        console.log("standard")
    } else if (test == "premium") {
        document.getElementById("elevator-unit-price").value=formatNumber(premiumPrice);
        document.getElementById("elevator-total-price").value=formatNumber(premiumPrice*elevatorAmount);
        document.getElementById("installation-fees").value=formatNumber((premiumPrice*elevatorAmount)*0.13);
        document.getElementById("final-price").value=formatNumber((premiumPrice*elevatorAmount)+(premiumPrice*elevatorAmount)*0.13);
        console.log("premium")
    } else {
        document.getElementById("elevator-unit-price").value=formatNumber(exceliumPrice);
        document.getElementById("elevator-total-price").value=formatNumber(exceliumPrice*elevatorAmount);
        document.getElementById("installation-fees").value=formatNumber((exceliumPrice*elevatorAmount)*0.16);
        
        document.getElementById("final-price").value=formatNumber((exceliumPrice*elevatorAmount)+(exceliumPrice*elevatorAmount)*0.16);
        
        console.log("excelium")
    }
    
    
    

    
}


