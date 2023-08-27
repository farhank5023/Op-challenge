

function startGame() {
    // Load score from storage or initialize it to 0
    score = parseInt(localStorage.getItem('score')) || 0;

    // Display initial score
    // console.log(`Initial score: ${score}`);

    // Start the timer and show the first page
    // ... Timer code ...

    showPage('page1');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    for (const page of pages) {
        page.style.display = 'none';
    }
    document.getElementById(pageId).style.display = 'block';
    func(); // Call func() when showing the next page
}

function func() {
    gen_7();
    gen_5();
   
   gen_9();
   
  
  
}


function dragpoint(event) {
    const operatorSymbol = event.currentTarget.getAttribute('data-operator');
    event.dataTransfer.setData('Text/plain', operatorSymbol);
    }
    
    
    function droppoint(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain"); // Get the operator from the data
        event.target.value = data;
    
        }
    
        function allowDropOption(event) {
            event.preventDefault();
        }    
    

        
let score=0;


function checkAndScore(inputFieldId,expectedOperator,scoreIncrement) {
            const userInput = document.getElementById(inputFieldId).value;
            if (userInput === expectedOperator) {
                score += scoreIncrement;
            } else {
                // console.log(`Error in ${inputFieldId}`);
            }

            // document.getElementById("scr").innerHTML= "Your current score is: "+score; 
        }

        function resetScore() {
    score = 0;
    localStorage.setItem('score', score);
    // console.log(`Score reset to ${score}`);
}

function check(){
    // console.log("total score is:"+score);
   
}

const timeLimit = 300; // 60 minutes in seconds

let timerInterval;
let initialTimestamp = localStorage.getItem('timerStart');
if (!initialTimestamp) {
  initialTimestamp = Math.floor(Date.now() / 1000);
  localStorage.setItem('timerStart', initialTimestamp);
}

function updateTimer() {
  const currentTime = Math.floor(Date.now() / 1000);
  const elapsedTime = currentTime - initialTimestamp;

  if (elapsedTime >= timeLimit) {
    clearInterval(timerInterval);
    showTimeoutPopup();
  } else {
    const remainingTime = timeLimit - elapsedTime;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

timerInterval = setInterval(updateTimer, 1000);


    function showTimeoutPopup() {
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      popup.style.display = "flex";
      popup.style.justifyContent = "center";
      popup.style.alignItems = "center";
      
      const popupContent = document.createElement("div");
      popupContent.style.backgroundColor = "white";
      popupContent.style.padding = "20px";
      popupContent.style.borderRadius = "10px";
      popupContent.innerHTML = `<p id="tout">Time's up! Your test has ended. Your Total Score is :${score}</p>`;
      
      popup.appendChild(popupContent);
      document.body.appendChild(popup);


    }
    function gameEnd() {
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      popup.style.display = "flex";
      popup.style.justifyContent = "center";
      popup.style.alignItems = "center";
      
      const popupContent = document.createElement("div");
      popupContent.style.backgroundColor = "white";
      popupContent.style.padding = "20px";
      popupContent.style.borderRadius = "10px";
      popupContent.innerHTML = `<p id="tout">Thanks for Playing !<br>Your total score is: ${score}</p>`;
      
      popup.appendChild(popupContent);
      document.body.appendChild(popup);


    }




    // ... Your existing code ...

// Function to reset the timer
function resetTimer() {
  initialTimestamp = Math.floor(Date.now() / 1000);
  localStorage.setItem('timerStart', initialTimestamp);
}

// Attach click event listener to the reset button
document.getElementById('resetTimerButton').addEventListener('click', () => {
  resetTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById("timer").textContent = `Timer Reset`;
});

// ... Your existing code ...

function gen_5(){
    
    

    ///////////////this is for page1////////////////////////////////
    
     const functionArray =[function(){
    
    
    //////////////this generates 5 length equation////////////////////////////////
    let select_5 = 5;
     const inputs1Container = document.getElementById("inputs1");//
     inputs1Container.innerHTML = ""; // Clear previous inputs    //
    
     
    
    
    /////////////////////Global standard Items//////////////////
    var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
          
    
    /////////////////////////////////////////////////
      for (let i = 0; i < select_5; i++) {
          let inputId_5="t"+i;
          inputs1Container.innerHTML += `<br><input type='text' class="inp_5" id=${inputId_5} placeholder=""><br>`;
          if(inputId_5=== "t2"){ 
             
              
              inputs1Container.innerHTML += `<br><input type='text' ondrop="droppoint(event)" ondragover="allowDropOption(event)" class="inp_5" id=${"c"+i} placeholder=""><br><br>`; // put user value in this id=c2
             hide_5=document.querySelectorAll(".inp_5");
             hide_5[2].style.display="none";
          
          }
    
      }
    
     
    
      if(select_5==5){
    
        let isZeroResult = true;
      while (isZeroResult) {
      
      paran_open_5=document.getElementById("t0").value="(";//paran open
      num_5_1=document.getElementById("t1").value =Math.floor((Math.random()*100)+1);//number
      
      operator_5_1=document.getElementById("t2").value=operators[Math.floor(Math.random()*4)];// TEST OPERATOR
      num_5_2=document.getElementById("t3").value=Math.floor((Math.random()*100)+1);//number
      paran_close_5=document.getElementById("t4").value=")";//paran close
      result_5=document.getElementById("answer_5").value=Math.floor(eval(paran_open_5+num_5_1+operator_5_1+num_5_2+paran_close_5));
      if (result_5 >0) {
          isZeroResult = false;
        
        }
      ////read only ////
      document.getElementById("t0").readOnly=true;
      document.getElementById("t1").readOnly=true;
      document.getElementById("c2").readOnly=true;
      document.getElementById("t3").readOnly=true;
      document.getElementById("t4").readOnly=true;
    
    
    
      document.getElementById("answer_5").readOnly=true;
    
      }
      }
    
      //////Listens to the dropped element and sends for score calculation/////////
    document.getElementById('c2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('c2', operator_5_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
            
    
        
    
    
    },
        
    function(){ //////////////genrates length Seven//////////////////
        
     var operators = ['+','-','*','/'];
          
     let paran_open='(';
     let paran_close=")";
     let select_5=7;
     const inputs1Container = document.getElementById("inputs1");
     inputs1Container.innerHTML = ""; // Clear previous inputs
    
    
    
    
    
    
      
    
       for (let i = 0; i<select_5; i++) {
           let inputId_5="t"+i;
           inputs1Container.innerHTML += `<br><input type='text' class="inp_5" id="${inputId_5}" placeholder="${inputId_5}"><br>`;
           if(inputId_5=== "t2"){ 
       
              inputs1Container.innerHTML += `<input type='text' class="inp_5" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"c"+i} placeholder=""><br>`; // put user value in this id=d4
              
    
           }
           if(inputId_5==="t5"){
           inputs1Container.innerHTML += `<input type='text' class="inp_5" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"c"+i} placeholder=""><br>`;
           hide_5=document.querySelectorAll(".inp_5");
             hide_5[2].style.display="none";//remember class is same as input container
             hide_5[6].style.display="none";
          }
     
           
       }
    
    
    
       if(select_5==7){
    
        let isZeroResult = true;
      while (isZeroResult) {
       paran_open_5=document.getElementById("t0").value="(";//paran open
       num_5_1=document.getElementById("t1").value =Math.floor((Math.random()*100)+1);//number
       
       operator_5_1=document.getElementById("t2").value=operators[Math.floor(Math.random()*4)];//operator
       num_5_2=document.getElementById("t3").value=Math.floor((Math.random()*100)+1);//number
       paran_close_5=document.getElementById("t4").value=")";//paran close
       operator_5_2=document.getElementById("t5").value=operators[Math.floor(Math.random()*4)];//operator
       num_5_3=document.getElementById("t6").value=Math.floor((Math.random()*100)+1);//number
       result_5=document.getElementById("answer_5").value=Math.floor(eval(paran_open_5+num_5_1+operator_5_1+num_5_2+paran_close_5+operator_5_2+num_5_3));
       if (result_5> 0) {
          isZeroResult = false;
        }
      }
     ////read only ////
     document.getElementById("t0").readOnly=true;
      document.getElementById("t1").readOnly=true;
      document.getElementById("t2").readOnly=true;
      document.getElementById("t3").readOnly=true;
      document.getElementById("t4").readOnly=true;
      document.getElementById("t5").readOnly=true;
      document.getElementById("t6").readOnly=true;
    
      document.getElementById("c2").readOnly=true;
      document.getElementById("c5").readOnly=true;
      document.getElementById("answer_5").readOnly=true;
       }
      
      //////Listens to the dropped element and sends for score calculation/////////
    document.getElementById('c2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        const isC2Correct = checkAndScore('c2', operator_5_1, 1); // Check c2 and get result
        const isC5Correct = checkAndScore('c5', operator_5_2, 1); // Check c5 and get result
    
        if (isC2Correct && isC5Correct) {
            score += 1; // Increment score only if both are correct
        }
    
        document.getElementById("scr").innerHTML = "Your current score is: " + score;
        event.preventDefault();
    });
    document.getElementById('c5').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        const isC2Correct = checkAndScore('c2', operator_5_1, 0); // Check c2 and get result
        const isC5Correct = checkAndScore('c5', operator_5_2, 0); // Check c5 and get result
    
        if (isC2Correct && isC5Correct) {
            score += 1; // Increment score only if both are correct
        }
    
        document.getElementById("scr").innerHTML = "Your current score is: " + score;
        event.preventDefault();
    });
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
            
       
    
       },
            
            
            
            
            
        function(){
          
                ////////////// length nine//////////////////
                
     var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
       let select_5=9;
       const inputs1Container = document.getElementById("inputs1");
       inputs1Container.innerHTML = ""; // Clear previous inputs
        ///////////////this is for page 1////////////////////////////////
        for (let i = 0; i<select_5; i++) {
           let inputId_5="t"+i;
           inputs1Container.innerHTML += `<br><input type='text' class="inp_5" id="${inputId_5}" placeholder="${inputId_5}"><br>`;
           if(inputId_5=== "t1"){ 
       
              inputs1Container.innerHTML += `<input type='text' class="inp_5" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"c"+i} placeholder=""><br>`; // put user value in this id=e2
              
    
           }
           if(inputId_5==="t6"){
           inputs1Container.innerHTML += `<input type='text' class="inp_5" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"c"+i} placeholder=""><br>`;
    
          }
    
          if(inputId_5==="t7"){
           inputs1Container.innerHTML += `<input type='text' class="inp_5" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"c"+i} placeholder=""><br>`;
           hide_5=document.querySelectorAll(".inp_5");
             hide_5[1].style.display="none";//remember class is same as input container
             hide_5[7].style.display="none";
             hide_5[9].style.display="none";
          }
     
     
           
       }
    
       if(select_5==9){
    
        let isZeroResult = true;
      while (isZeroResult) {
        
       num_5_1=document.getElementById("t0").value =Math.floor((Math.random()*100)+1);//number
       operator_5_1=document.getElementById("t1").value=operators[Math.floor(Math.random()*4)];//operator
       paran_open_5=document.getElementById("t2").value="(";//paran open
       num_5_2=document.getElementById("t3").value=Math.floor((Math.random()*100)+1);//number
       operator_5_2=document.getElementById("t4").value=operators[Math.floor(Math.random()*4)];//operator
       num_5_3=document.getElementById("t5").value=Math.floor((Math.random()*100)+1);//number
       paran_close_5=document.getElementById("t6").value=")";//paran close
       operator_5_3=document.getElementById("t7").value=operators[Math.floor(Math.random()*4)];//operator
       num_5_4=document.getElementById("t8").value=Math.floor((Math.random()*100)+1);//number
       
       
       result_5=document.getElementById("answer_5").value=Math.floor(eval(num_5_1+operator_5_1+paran_open_5+num_5_2+operator_5_2+num_5_3+paran_close_5+operator_5_3+num_5_4));
       if (result_5>0) {
          isZeroResult = false;
        }
      }
        ////read only ////
     document.getElementById("t0").readOnly=true;
      document.getElementById("t1").readOnly=true;
      document.getElementById("t2").readOnly=true;
      document.getElementById("t3").readOnly=true;
      document.getElementById("t4").readOnly=true;
      document.getElementById("t5").readOnly=true;
      document.getElementById("t6").readOnly=true;
      document.getElementById("t7").readOnly=true;
      document.getElementById("t8").readOnly=true;
    
      document.getElementById("c1").readOnly=true;
      document.getElementById("c6").readOnly=true;
      document.getElementById("c7").readOnly=true;
      document.getElementById("answer_5").readOnly=true;
    
       }
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('c1').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('c1', operator_5_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('c6').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('c6', paran_close_5, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('c7').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('c7', operator_5_3, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
            
       
    
                
                
                
                
                
                
    }]
    const randomIndex = Math.floor(Math.random() * functionArray.length);
    
    // Select the random function and execute it
    const selectedFunction = functionArray[randomIndex];
    selectedFunction();
    
    }
    
    
function gen_7(){
    
    const functionArray=[function(){
          
        ////This generates 7 length Equation//////////////////
    
        var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
     let select_7=7;
     const inputs2Container = document.getElementById("inputs2");
     inputs2Container.innerHTML = ""; // Clear previous inputs
    
    
    
    
    
    
       ///////////////this is for page 2////////////////////////////////
    
       for (let i = 0; i<select_7; i++) {
           let inputId_7="k"+i;
           inputs2Container.innerHTML += `<br><input type='text' class="inp_7" id="${inputId_7}" placeholder="${inputId_7}"><br>`;
           if(inputId_7=== "k2"){ 
       
              inputs2Container.innerHTML += `<input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=""><br>`; // put user value in this id=d4
              
    
           }
           if(inputId_7==="k5"){
           inputs2Container.innerHTML += `<input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=""><br>`;
           hide_7=document.querySelectorAll(".inp_7");
             hide_7[2].style.display="none";//remember class is same as input container
             hide_7[6].style.display="none";
          }
     
           
       }
    
    
    
       if(select_7==7){
    
        let isZeroResult = true;
      while (isZeroResult) {
       paran_open_7=document.getElementById("k0").value="(";//paran open
       num_7_1=document.getElementById("k1").value =Math.floor((Math.random()*100)+1);//number
       
       operator_7_1=document.getElementById("k2").value=operators[Math.floor(Math.random()*4)];//operator
       num_7_2=document.getElementById("k3").value=Math.floor((Math.random()*100)+1);//number
       paran_close_7=document.getElementById("k4").value=")";//paran close
       operator_7_2=document.getElementById("k5").value=operators[Math.floor(Math.random()*4)];//operator
       num_7_3=document.getElementById("k6").value=Math.floor((Math.random()*100)+1);//number
       result_7=document.getElementById("answer_7").value=Math.floor(eval(paran_open_7+num_7_1+operator_7_1+num_7_2+paran_close_7+operator_7_2+num_7_3));
    
       if (result_7 > 0) {
        isZeroResult = false;
        }
      }
    
           ////read only ////
     document.getElementById("k0").readOnly=true;
      document.getElementById("k1").readOnly=true;
      document.getElementById("k2").readOnly=true;
      document.getElementById("k3").readOnly=true;
      document.getElementById("k4").readOnly=true;
      document.getElementById("k5").readOnly=true;
      document.getElementById("k6").readOnly=true;
    
      document.getElementById("d2").readOnly=true;
      document.getElementById("d5").readOnly=true;
    
      document.getElementById("answer_7").readOnly=true;
    
       }
    
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('d2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d2', operator_7_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('d5').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d5', operator_7_2, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
    
    
    
    
    
    
    
    
    },function(){
        
    //////////////this generates 5 length equation////////////////////////////////
    let select_7 = 5;
     const inputs2Container = document.getElementById("inputs2");//
     inputs2Container.innerHTML = ""; // Clear previous inputs    //
    
     
    
    
    /////////////////////Global standard Items//////////////////
    var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
          
    
    /////////////////////////////////////////////////
      for (let i = 0; i < select_7; i++) {
          let inputId_7="k"+i;
          inputs2Container.innerHTML += `<br><input type='text' class="inp_7" id=${inputId_7} placeholder="i+${i}"><br>`;
          if(inputId_7=== "k2"){ 
             
              
              inputs2Container.innerHTML += `<br><input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=" "><br><br>`; // put user value in this id=c2
             hide_7=document.querySelectorAll(".inp_7");
             hide_7[2].style.display="none";
          
          }
    
      }
    
     
    
      if(select_7==5){
    
        let isZeroResult = true;
      while (isZeroResult) {
      paran_open_7=document.getElementById("k0").value="(";//paran open
      num_7_1=document.getElementById("k1").value =Math.floor((Math.random()*100)+1);//number
      
      operator_7_1=document.getElementById("k2").value=operators[Math.floor(Math.random()*4)];//operator
      num_7_2=document.getElementById("k3").value=Math.floor((Math.random()*100)+1);//number
      paran_close_7=document.getElementById("k4").value=")";//paran close
      result_7=document.getElementById("answer_7").value=Math.floor(eval(paran_open_7+num_7_1+operator_7_1+num_7_2+paran_close_7));
    
      
           ////read only ////
     document.getElementById("k0").readOnly=true;
      document.getElementById("k1").readOnly=true;
      document.getElementById("k2").readOnly=true;
      document.getElementById("k3").readOnly=true;
      document.getElementById("k4").readOnly=true;
    
      document.getElementById("d2").readOnly=true;
    
    
    
      document.getElementById("answer_7").readOnly=true;
    
    
      if (result_7 >0) {
          isZeroResult = false;
        }
      }
      }
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('d2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d2', operator_7_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
    
        
        
    },function(){
       
        var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
       let select_7=9;
       const inputs2Container = document.getElementById("inputs2");
       inputs2Container.innerHTML = ""; // Clear previous inputs
        ///////////////this is for page 2////////////////////////////////
        for (let i = 0; i<select_7; i++) {
           let inputId_7="k"+i;
           inputs2Container.innerHTML += `<br><input type='text' class="inp_7" id="${inputId_7}" placeholder="${inputId_7}"><br>`;
           if(inputId_7=== "k1"){ 
       
              inputs2Container.innerHTML += `<input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=""><br>`; // put user value in this id=e2
              
    
           }
           if(inputId_7==="k6"){
           inputs2Container.innerHTML += `<input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=""><br>`;
    
          }
    
          if(inputId_7==="k7"){
           inputs2Container.innerHTML += `<input type='text' class="inp_7" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"d"+i} placeholder=""><br>`;
           hide_7=document.querySelectorAll(".inp_7");
             hide_7[1].style.display="none";//remember class is same as input container
             hide_7[7].style.display="none";
             hide_7[9].style.display="none";
          }
     
     
           
       }
    
       if(select_7==9){
        let isZeroResult = true;
      while (isZeroResult) {
       num_7_1=document.getElementById("k0").value =Math.floor((Math.random()*100)+1);//number
       operator_7_1=document.getElementById("k1").value=operators[Math.floor(Math.random()*4)];//operator
       paran_open_7=document.getElementById("k2").value="(";//paran open
       num_7_2=document.getElementById("k3").value=Math.floor((Math.random()*100)+1);//number
       operator_7_2=document.getElementById("k4").value=operators[Math.floor(Math.random()*4)];//operator
       num_7_3=document.getElementById("k5").value=Math.floor((Math.random()*100)+1);//number
       paran_close_7=document.getElementById("k6").value=")";//paran close
       operator_7_3=document.getElementById("k7").value=operators[Math.floor(Math.random()*4)];//operator
       num_7_4=document.getElementById("k8").value=Math.floor((Math.random()*100)+1);//number
       
       
       result_7=document.getElementById("answer_7").value=Math.floor(eval(num_7_1+operator_7_1+paran_open_7+num_7_2+operator_7_2+num_7_3+paran_close_7+operator_7_3+num_7_4));
    
    
       if (result_7>0) {
          isZeroResult = false;
        }
      }
           ////read only ////
           document.getElementById("k0").readOnly=true;
      document.getElementById("k1").readOnly=true;
      document.getElementById("k2").readOnly=true;
      document.getElementById("k3").readOnly=true;
      document.getElementById("k4").readOnly=true;
      document.getElementById("k5").readOnly=true;
      document.getElementById("k6").readOnly=true;
      document.getElementById("k7").readOnly=true;
      document.getElementById("k8").readOnly=true;
    
      document.getElementById("d1").readOnly=true;
      document.getElementById("d6").readOnly=true;
      document.getElementById("d7").readOnly=true;
    
      document.getElementById("answer_7").readOnly=true;
       }
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('d1').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d1', operator_7_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('d6').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d6', paran_close_7, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('d7').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('d7', operator_7_3, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
    
    
    
    }]
    
    const randomIndex = Math.floor(Math.random() * functionArray.length);
    
    // Select the random function and execute it
    const selectedFunction = functionArray[randomIndex];
    selectedFunction();
    
    
    
    }
    
function gen_9(){

    const functionArray =[function(){
    
        ////This is for 5 length page 3//////
        
    let select_9 = 5;
     const inputs3Container = document.getElementById("inputs3");//
     inputs3Container.innerHTML = ""; // Clear previous inputs    //
    
     
    
    
    /////////////////////Global standard Items//////////////////
    var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
          
    
    /////////////////////////////////////////////////
      for (let i = 0; i < select_9; i++) {
          let inputId_9="z"+i;
          inputs3Container.innerHTML += `<br><input type='text' class="inp_9" id=${inputId_9} placeholder="i+${i}"><br>`;
          if(inputId_9=== "z2"){ 
             
              
              inputs3Container.innerHTML += `<br><input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=" "><br><br>`; // put user value in this id=c2
             hide_9=document.querySelectorAll(".inp_9");
             hide_9[2].style.display="none";
          
          }
    
      }
    
     
    
      if(select_9==5){
    
        let isZeroResult = true;
      while (isZeroResult) {
      paran_open_9=document.getElementById("z0").value="(";//paran open
      num_9_1=document.getElementById("z1").value =Math.floor((Math.random()*100)+1);//number
      
      operator_9_1=document.getElementById("z2").value=operators[Math.floor(Math.random()*4)];//operator
      num_9_2=document.getElementById("z3").value=Math.floor((Math.random()*100)+1);//number
      paran_close_9=document.getElementById("z4").value=")";//paran close
      result_9=document.getElementById("answer_9").value=Math.floor(eval(paran_open_9+num_9_1+operator_9_1+num_9_2+paran_close_9));
    
      if (result_9 > 0) {
          isZeroResult = false;
        }
      }
    
           ////read only ////
        document.getElementById("z0").readOnly=true;
      document.getElementById("z1").readOnly=true;
      document.getElementById("z2").readOnly=true;
      document.getElementById("z3").readOnly=true;
      document.getElementById("z4").readOnly=true;
    
      document.getElementById("e2").readOnly=true;
    
      document.getElementById("answer_9").readOnly=true;
    
      }
    
    
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('e2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e2', operator_9_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`); 
        
    
    
    
    
        
    
    },function(){
        
      ////This is for 7 length page 3//////
    
    
      var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
     let select_9=7;
     const inputs3Container = document.getElementById("inputs3");
     inputs3Container.innerHTML = ""; // Clear previous inputs
    
    
    
    
    
    
       ///////////////this is for page 3////////////////////////////////
    
       for (let i = 0; i<select_9; i++) {
           let inputId_9="z"+i;
           inputs3Container.innerHTML += `<br><input type='text' class="inp_9" id="${inputId_9}" placeholder="${inputId_9}"><br>`;
           if(inputId_9=== "z2"){ 
       
              inputs3Container.innerHTML += `<input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=""><br>`; // put user value in this id=d4
              
    
           }
           if(inputId_9==="z5"){
           inputs3Container.innerHTML += `<input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=""><br>`;
           hide_9=document.querySelectorAll(".inp_9");
             hide_9[2].style.display="none";//remember class is same as input container
             hide_9[6].style.display="none";
          }
     
           
       }
    
    
    
       if(select_9==7){
        let isZeroResult = true;
      while (isZeroResult) {
       paran_open_9=document.getElementById("z0").value="(";//paran open
       num_9_1=document.getElementById("z1").value =Math.floor((Math.random()*100)+1);//number
       
       operator_9_1=document.getElementById("z2").value=operators[Math.floor(Math.random()*4)];//operator
       num_9_2=document.getElementById("z3").value=Math.floor((Math.random()*100)+1);//number
       paran_close_9=document.getElementById("z4").value=")";//paran close
       operator_9_2=document.getElementById("z5").value=operators[Math.floor(Math.random()*4)];//operator
       num_9_3=document.getElementById("z6").value=Math.floor((Math.random()*100)+1);//number
       result_9=document.getElementById("answer_9").value=Math.floor(eval(paran_open_9+num_9_1+operator_9_1+num_9_2+paran_close_9+operator_9_2+num_9_3));
         
       if (result_9 > 0) {
          isZeroResult = false;
        }
      }
       
       ////read only ////
              document.getElementById("z0").readOnly=true;
      document.getElementById("z1").readOnly=true;
      document.getElementById("z2").readOnly=true;
      document.getElementById("z3").readOnly=true;
      document.getElementById("z4").readOnly=true;
      document.getElementById("z5").readOnly=true;
      document.getElementById("z6").readOnly=true;
    
      document.getElementById("e2").readOnly=true;
      document.getElementById("e5").readOnly=true;
    
    
    
      document.getElementById("answer_9").readOnly=true;
    
     
    
       }
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('e2').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e2', operator_9_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('e5').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e5', operator_9_2, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
         
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
    
    
    },function(){
      ///////////////////////This is for 9 length page 3/////////////////////////////////////////
      
    
     var operators = ['+','-','*','/'];
          
          let paran_open='(';
          let paran_close=")";
       let select_9=9;
       const inputs3Container = document.getElementById("inputs3");
       inputs3Container.innerHTML = ""; // Clear previous inputs
        ///////////////this is for page 3////////////////////////////////
        for (let i = 0; i<select_9; i++) {
           let inputId_9="z"+i;
           inputs3Container.innerHTML += `<br><input type='text' class="inp_9" id="${inputId_9}" placeholder="${inputId_9}"><br>`;
           if(inputId_9=== "z1"){ 
       
              inputs3Container.innerHTML += `<input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=""><br>`; // put user value in this id=e2
              
    
           }
           if(inputId_9==="z6"){
           inputs3Container.innerHTML += `<input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=""><br>`;
    
          }
    
          if(inputId_9==="z7"){
           inputs3Container.innerHTML += `<input type='text' class="inp_9" ondrop="droppoint(event)" ondragover="allowDropOption(event)" id=${"e"+i} placeholder=""><br>`;
           hide_9=document.querySelectorAll(".inp_9");
             hide_9[1].style.display="none";//remember class is same as input container
             hide_9[7].style.display="none";
             hide_9[9].style.display="none";
          }
     
     
           
       }
    
       if(select_9==9){
        let isZeroResult = true;
      while (isZeroResult) {
       num_9_1=document.getElementById("z0").value =Math.floor((Math.random()*100)+1);//number
       operator_9_1=document.getElementById("z1").value=operators[Math.floor(Math.random()*4)];//operator
       paran_open_9=document.getElementById("z2").value="(";//paran open
       num_9_2=document.getElementById("z3").value=Math.floor((Math.random()*100)+1);//number
       operator_9_2=document.getElementById("z4").value=operators[Math.floor(Math.random()*4)];//operator
       num_9_3=document.getElementById("z5").value=Math.floor((Math.random()*100)+1);//number
       paran_close_9=document.getElementById("z6").value=")";//paran close
       operator_9_3=document.getElementById("z7").value=operators[Math.floor(Math.random()*4)];//operator
       num_9_4=document.getElementById("z8").value=Math.floor((Math.random()*100)+1);//number
       
       
       result_9=document.getElementById("answer_9").value=Math.floor(eval(num_9_1+operator_9_1+paran_open_9+num_9_2+operator_9_2+num_9_3+paran_close_9+operator_9_3+num_9_4));
    
       if (result_9>0) {
          isZeroResult = false;
        }
      }
           ////read only ////
           document.getElementById("z0").readOnly=true;
      document.getElementById("z1").readOnly=true;
      document.getElementById("z2").readOnly=true;
      document.getElementById("z3").readOnly=true;
      document.getElementById("z4").readOnly=true;
      document.getElementById("z5").readOnly=true;
      document.getElementById("z6").readOnly=true;
      document.getElementById("z7").readOnly=true;
      document.getElementById("z8").readOnly=true;
    
      document.getElementById("e1").readOnly=true;
      document.getElementById("e6").readOnly=true;
      document.getElementById("e7").readOnly=true;
      document.getElementById("answer_9").readOnly=true;
    
      
       }
    
      //////Listens to the dropped element and sends for score calculation/////////
      document.getElementById('e1').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e1', operator_9_1, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('e6').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e6', paran_close_9, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
    document.getElementById('e7').addEventListener('drop', function (event) {
        const operatorSymbol = event.dataTransfer.getData('Text');
        event.target.value = operatorSymbol;
        checkAndScore('e7', operator_9_3, 1); // Call checkAndScore when operator is dropped
        event.preventDefault();
    });
                
    // Update the score in localStorage
    localStorage.setItem('score', score);
    // console.log(`Current score: ${score}`);
    
    }]
    
    const randomIndex = Math.floor(Math.random() * functionArray.length);
    
    // Select the random function and execute it
    const selectedFunction = functionArray[randomIndex];
    selectedFunction();
    
    
    
    }
    
    
