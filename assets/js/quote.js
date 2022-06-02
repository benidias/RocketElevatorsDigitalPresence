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

    let ResidentialResultat=residentialOne/residentialTwo;
    let totalResultat=ResidentialResultat/6

    

    
    
    
    document.getElementById("elevator-amount").value=Math.ceil(totalResultat);

    var tryIt = residentialTwo
    console.log("floors is: ", tryIt)
    if(tryIt > 20){
        document.getElementById("elevator-amount").value=Math.ceil(ResidentialResultat/20)+Math.ceil(totalResultat);

        
    }

    
   
}


function calculateCorporate(){
    
    var corporateMine=document.getElementById("corporateMine").value;
    var corporateYou=document.getElementById("corporateYou").value;
    var corporateHim=document.getElementById("corporateHim").value;
    var corporateHer=document.getElementById("corporateHer").value;
    var corporateUs=document.getElementById("corporateUs").value;

    let sumOfFloor=corporateYou+corporateHim;
    let TotalOccupants=corporateUs*sumOfFloor;
    let NumberOfElevators=Math.ceil(TotalOccupants/1000);
    let NumberOfElevatorColumn=Math.ceil(sumOfFloor/20);
    let AverageNumberOfElevatorsPerColumn=NumberOfElevators/NumberOfElevatorColumn;
    let totalResult=AverageNumberOfElevatorsPerColumn*NumberOfElevatorColumn;

    document.getElementById("elevator-amount").value=Math.ceil(totalResult);

    
}

function calculateHybrid(){
    var hybridMy=document.getElementById("hybridMy").value;
    var hybridHis=document.getElementById("hybridHis").value;
    var hybridIts=document.getElementById("hybridIts").value;
    var hybridWe=document.getElementById("hybridWe").value;
    var hybridYour=document.getElementById("hybridYour").value;
    var hybridThere=document.getElementById("hybridThere").value;

    let sumOfFloors=hybridHis+hybridIts;
    let totalOccupants=hybridYour*sumOfFloors;
    let numberOfElevators=Math.ceil(totalOccupants/1000);
    let numberOfElevatorsColumn=Math.ceil(sumOfFloors/20);
    let averageNumberOfElevatorsPerColumn=numberOfElevators/numberOfElevatorsColumn;
    let totalResult=averageNumberOfElevatorsPerColumn*numberOfElevatorsColumn;


    document.getElementById("elevator-amount").value=Math.ceil(totalResult);

    
}



function price(){
    console.log("test")
    var elevatorUnitPrice=document.getElementById("elevator-unit-price").value;
    var installationFees=document.getElementById("installation-fees").value;
    var finalPrice=document.getElementById("final-price").value;
    var elevatorAmount=document.getElementById("elevator-amount").value;
    var elevatorTotalPrice=document.getElementById("elevator-total-price").value;

     
    
   
     
    let standardPrice=7565.00
    let premiumPrice=12345.00
    let exceliumPrice=15400

    


    

     
    var test = $("input[name=colorRadio]:checked").val();

    console.log("test is: ", test)

    if (test == "standard") {
        document.getElementById("elevator-unit-price").value=standardPrice+'$';
        document.getElementById("elevator-total-price").value=standardPrice*elevatorAmount+'$';
        document.getElementById("installation-fees").value=(standardPrice*elevatorAmount)/10+'$';
        document.getElementById("final-price").value=(standardPrice*elevatorAmount)+(standardPrice*elevatorAmount)/10+'$';
        console.log("standard")
    } else if (test == "premium") {
        document.getElementById("elevator-unit-price").value=premiumPrice+'$';
        document.getElementById("elevator-total-price").value=premiumPrice*elevatorAmount+'$';
        document.getElementById("installation-fees").value=(premiumPrice*elevatorAmount)/10;
        document.getElementById("final-price").value=(premiumPrice*elevatorAmount)+(premiumPrice*elevatorAmount)/10+'$';
        console.log("premium")
    } else {
        document.getElementById("elevator-unit-price").value=exceliumPrice+'$';
        document.getElementById("elevator-total-price").value=exceliumPrice*elevatorAmount+'$';
        document.getElementById("installation-fees").value=(exceliumPrice*elevatorAmount)/10+'$';
        // document.getElementById("final-price").value=(exceliumPrice*elevatorAmount)+(exceliumPrice*elevatorAmount)/10;
        document.getElementById("final-price").value=5;
        // $("#final-price").val(50)
        console.log("excelium")
    }
    
    
    

    
}


