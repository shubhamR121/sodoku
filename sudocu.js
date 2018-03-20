var Arr=[5,3,0,0,7,0,0,0,0,
				 6,0,0,1,9,5,0,0,0,
				 0,9,8,0,0,0,0,6,0,
				 8,0,0,0,6,0,0,0,3,
				 4,0,0,8,0,3,0,0,1,
				 7,0,0,0,2,0,0,0,6,
				 0,6,0,0,0,0,2,8,0,
				 0,0,0,4,1,9,0,0,5,
				 0,0,0,0,8,0,0,7,9	
				 ];

var Arr2=[3, 0, 6, 5, 0, 8, 4, 0, 0,
          5, 2, 0, 0, 0, 0, 0, 0, 0,
          0, 8, 7, 0, 0, 0, 0, 3, 1,
          0, 0, 3, 0, 1, 0, 0, 8, 0,
          9, 0, 0, 8, 6, 3, 0, 0, 5,
          0, 5, 0, 0, 9, 0, 6, 0, 0,
          1, 3, 0, 0, 0, 0, 2, 5, 0,
          0, 0, 0, 0, 0, 0, 0, 7, 4,
          0, 0, 5, 2, 0, 6, 3, 0, 0
			];

var Arr3=[0, 0, 0, 2, 6, 0, 7, 0, 1,
          6, 8, 0, 0, 7, 0, 0, 9, 0,
          1, 9, 0, 0, 0, 4, 5, 0, 0,
          8, 2, 0, 1, 0, 0, 0, 4, 0,
          0, 0, 4, 6, 0, 2, 9, 0, 0,
          0, 5, 0, 0, 0, 3, 0, 2, 8,
          0, 0, 9, 3, 0, 0, 0, 7, 4,
          0, 4, 0, 0, 5, 0, 0, 3, 6,
          7, 0, 3, 2, 1, 8, 0, 0, 0
			];		

var Arr4=[1,0,0,4,8,9,0,0,6,
          7,3,0,0,0,0,0,4,0,
          0,0,0,0,0,1,2,9,5,
          0,0,7,1,2,0,6,0,0,
          5,0,0,7,0,3,0,0,8,
          0,0,6,0,9,5,7,0,0,
          9,1,4,6,0,0,0,0,0,
          0,2,0,0,0,0,0,3,7,
          8,0,0,5,1,2,0,0,4
					];		

var Arr5=[8,6,0,0,2,0,0,0,0,
					0,0,0,7,0,0,0,5,9,
					0,0,0,0,0,0,0,0,0,
					0,0,0,0,6,0,8,0,0,
					0,4,0,0,0,0,0,0,0,
					0,0,5,3,0,0,0,0,7,
					0,0,0,0,0,0,0,0,0,
					0,2,0,0,0,0,6,0,0,
					0,0,7,5,0,9,0,0,0
					];

var Arr6=[0,2,0,0,0,0,0,0,0,
					0,0,0,6,0,0,0,0,3,
					0,7,4,0,8,0,0,0,0,
					0,0,0,0,0,3,8,0,2,
					0,8,0,0,4,0,0,1,0,
					6,0,0,5,0,0,0,0,0,
					0,0,0,0,1,0,7,8,0,
					5,0,0,0,0,9,0,0,0,
					0,0,7,5,0,9,0,4,0
					];
var k=0;
var c=0;

$(document).ready(function()
{
	loading();

	$("#cell-0").keyup(function(){
    checkRC(0,9,this,0,0);
    checkBlock(0,9,this,0,0);
  });
  $("#cell-1").keyup(function(){
    checkRC(0,9,this,1,0);
    checkBlock(0,9,this,1,0);
  });
  $("#cell-2").keyup(function(){
    checkRC(0,9,this,2,0);
    checkBlock(0,9,this,2,0);
  });

  $("#cell-3").keyup(function(){
    checkRC(0,9,this,3,3);
    checkBlock(0,9,this,3,3);
  });

  $("#cell-4").keyup(function(){
    checkRC(0,9,this,4,3);
    checkBlock(0,9,this,4,3);
  });
  $("#cell-5").keyup(function(){
    checkRC(0,9,this,5,3);
    checkBlock(0,9,this,5,3);
  });

  $("#cell-6").keyup(function(){
    checkRC(0,9,this,6,6);
    checkBlock(0,9,this,6,6);
  });

  $("#cell-7").keyup(function(){
    checkRC(0,9,this,7,6);
    checkBlock(0,9,this,7,6);
  });

  $("#cell-8").keyup(function(){
    checkRC(0,9,this,8,6);
    checkBlock(0,9,this,8,6);
  });

  $("#cell-9").keyup(function(){
    checkRC(9,18,this,9,0);
    checkBlock(9,18,this,9,0);
  });

  $("#cell-10").keyup(function(){
    checkRC(9,18,this,10,0);
    checkBlock(9,18,this,10,0);
  });

  $("#cell-11").keyup(function(){
    checkRC(9,18,this,11,0);
    checkBlock(9,18,this,11,0);
  });

  $("#cell-12").keyup(function(){
    checkRC(9,18,this,12,3);
    checkBlock(9,18,this,12,3);
  });

  $("#cell-13").keyup(function(){
    checkRC(9,18,this,13,3);
    checkBlock(9,18,this,13,3);
  });

  $("#cell-14").keyup(function(){
    checkRC(9,18,this,14,3);
    checkBlock(9,18,this,14,3);
  });

  $("#cell-15").keyup(function(){
    checkRC(9,17,this,15,6);
    checkBlock(9,18,this,15,6);
  });

  $("#cell-16").keyup(function(){
    checkRC(9,18,this,16,6);
    checkBlock(9,18,this,16,6);
  });

  $("#cell-17").keyup(function(){
    checkRC(9,18,this,17,6);
    checkBlock(9,18,this,17,6);
  });

  $("#cell-18").keyup(function(){
    checkRC(18,27,this,18,0);
    checkBlock(18,27,this,18,0);
  });

  $("#cell-19").keyup(function(){
    checkRC(18,27,this,19,0);
    checkBlock(18,27,this,19,0);
  });

  $("#cell-20").keyup(function(){
    checkRC(18,27,this,20,0);
    checkBlock(18,27,this,20,0);
  });

  $("#cell-21").keyup(function(){
    checkRC(18,27,this,21,3);
    checkBlock(18,27,this,21,3);
  });

  $("#cell-22").keyup(function(){
    checkRC(18,27,this,22,3);
    checkBlock(18,27,this,22,3);
  });

  $("#cell-23").keyup(function(){
    checkRC(18,27,this,23,3);
    checkBlock(18,27,this,23,3);
  });

  $("#cell-24").keyup(function(){
    checkRC(18,27,this,24,6);
    checkBlock(18,27,this,24,6);
  });

  $("#cell-25").keyup(function(){
    checkRC(18,27,this,25,6);
    checkBlock(18,27,this,25,6);
  });

  $("#cell-26").keyup(function(){
    checkRC(18,27,this,24,6);
    checkBlock(18,27,this,26,6);
  });

  $("#cell-27").keyup(function(){
   	checkRC(27,36,this,27,0);
   	checkBlock(27,36,this,27,27);
  });

  $("#cell-28").keyup(function(){
  	checkRC(27,36,this,28,0);
    checkBlock(27,36,this,28,27);
  });

  $("#cell-29").keyup(function(){
    checkRC(27,36,this,29,0);
    checkBlock(27,36,this,29,27);
  });

  $("#cell-30").keyup(function(){
    checkRC(27,36,this,30,3);
    checkBlock(27,36,this,30,30);
  });

  $("#cell-31").keyup(function(){
   	checkRC(27,36,this,31,3);
    checkBlock(27,36,this,31,30);
  });

  $("#cell-32").keyup(function(){
    checkRC(27,36,this,32,3);
    checkBlock(27,36,this,32,30);
  });

  $("#cell-33").keyup(function(){
    checkRC(27,36,this,33,6);
    checkBlock(27,36,this,33,33);
  });

  $("#cell-34").keyup(function(){
    checkRC(27,36,this,34,6);
    checkBlock(27,36,this,34,33);
  });

  $("#cell-35").keyup(function(){
    checkRC(27,36,this,35,6);
    checkBlock(27,36,this,35,33);
  });

  $("#cell-36").keyup(function(){
   	checkRC(36,45,this,36,0);
    checkBlock(36,45,this,36,27);
  });

  $("#cell-37").keyup(function(){
   	checkRC(36,45,this,37,0);
    checkBlock(36,45,this,37,27);
  });

  $("#cell-38").keyup(function(){
    checkRC(36,45,this,38,0);
    checkBlock(36,45,this,38,27);
  });

  $("#cell-39").keyup(function(){
   	checkRC(36,45,this,39,3);
   	checkBlock(36,45,this,39,30);
  });

 	$("#cell-40").keyup(function(){
    checkRC(36,45,this,40,3);
    checkBlock(36,45,this,40,30);
  });

  $("#cell-41").keyup(function(){
   	checkRC(36,45,this,40,3);
   	checkBlock(36,45,this,40,30);
  });

  $("#cell-42").keyup(function(){
   	checkRC(36,45,this,42,6);
   	checkBlock(36,45,this,41,33);
  });

  $("#cell-43").keyup(function(){
   	checkRC(36,45,this,43,6);
  	checkBlock(36,45,this,43,33);
  });

  $("#cell-44").keyup(function(){
    checkRC(36,45,this,44,6);
    checkBlock(36,45,this,44,33);
  });

  $("#cell-45").keyup(function(){
    checkRC(45,54,this,45,0);
    checkBlock(45,54,this,45,27);
  });

  $("#cell-46").keyup(function(){
    checkRC(45,54,this,46,0);
    checkBlock(45,54,this,46,27);
  });

  $("#cell-47").keyup(function(){
    checkRC(45,54,this,47,0);
    checkBlock(45,54,this,47,27);
  });

  $("#cell-48").keyup(function(){
   	checkRC(45,54,this,48,3);
    checkBlock(45,54,this,48,30);
  });

  $("#cell-49").keyup(function(){
    checkRC(45,54,this,49,3);
    checkBlock(45,54,this,49,30);
  });
    
  $("#cell-50").keyup(function(){
    checkRC(45,54,this,50,3);
    checkBlock(45,54,this,50,30);
  });

  $("#cell-51").keyup(function(){
    checkRC(45,54,this,51,6);
    checkBlock(45,54,this,51,33);
  });

  $("#cell-52").keyup(function(){
    checkRC(45,54,this,52,6);
    checkBlock(45,54,this,52,33);
  });

  $("#cell-53").keyup(function(){
    checkRC(45,54,this,53,6);
    checkBlock(45,54,this,53,33);
  });
    
  $("#cell-54").keyup(function(){
    checkRC(54,63,this,54,0);
    checkBlock(54,63,this,54,54);
  });

  $("#cell-55").keyup(function(){
   	checkRC(54,62,this,55,0);
   	checkBlock(54,62,this,55,54);
  });

  $("#cell-56").keyup(function(){
    checkRC(54,63,this,56,0);
    checkBlock(54,63,this,56,54);
  });

  $("#cell-57").keyup(function(){
    checkRC(54,63,this,57,3);
    checkBlock(54,63,this,57,57);
  });

  $("#cell-58").keyup(function(){
    checkRC(54,63,this,58,0);
    checkBlock(54,63,this,58,57);
  });

  $("#cell-59").keyup(function(){
    checkRC(54,63,this,59,0);
    checkBlock(54,63,this,59,57);
  });

  $("#cell-60").keyup(function(){
   	checkRC(54,63,this,60,6);
    checkBlock(54,63,this,60,60);
  });

  $("#cell-61").keyup(function(){
    checkRC(54,63,this,61,6);
    checkBlock(54,63,this,61,60);
  });

  $("#cell-62").keyup(function(){
   	checkRC(54,63,this,62,6);
    checkBlock(54,63,this,62,60);
  });

  $("#cell-63").keyup(function(){
   	checkRC(63,72,this,63,0);
    checkBlock(63,72,this,63,54);
  });

  $("#cell-64").keyup(function(){
    checkRC(63,72,this,64,0);
    checkBlock(63,72,this,64,54);
  });

  $("#cell-65").keyup(function(){
    checkRC(63,72,this,65,0);
    checkBlock(63,72,this,65,54);
  });


  $("#cell-66").keyup(function(){
  	checkRC(63,72,this,66,3);
   	checkBlock(63,72,this,66,57);
  });

  $("#cell-67").keyup(function(){
   	checkRC(63,72,this,67,3);
    checkBlock(63,72,this,67,57);
  });

  $("#cell-68").keyup(function(){
    checkRC(63,72,this,68,3);
    checkBlock(63,72,this,68,57);
  });

  $("#cell-69").keyup(function(){
    checkRC(63,72,this,69,6);
    checkBlock(63,72,this,69,60);
  });

  $("#cell-70").keyup(function(){
    checkRC(63,71,this,70,6);
    checkBlock(63,71,this,70,60);
  });

  $("#cell-71").keyup(function(){
    checkRC(63,72,this,71,6);
    checkBlock(63,72,this,71,60);
  });

  $("#cell-72").keyup(function(){
    checkRC(72,81,this,72,0);
    checkBlock(72,81,this,72,54);
  });

  $("#cell-73").keyup(function(){
    checkRC(72,81,this,73,0);
    checkBlock(0,81,this,73,54);
  });

  $("#cell-74").keyup(function(){
    checkRC(72,81,this,74,0);
    checkBlock(72,81,this,74,54);
  });

  $("#cell-75").keyup(function(){
    checkRC(72,81,this,75,3);
    checkBlock(72,81,this,75,57);
  });

  $("#cell-76").keyup(function(){
    checkRC(72,81,this,76,3);
    checkBlock(72,81,this,76,57);
  });

  $("#cell-77").keyup(function(){
    checkRC(72,81,this,77,3);
    checkBlock(72,81,this,77,57);
  });

  $("#cell-78").keyup(function(){
    checkRC(72,81,this,78,6);
    checkBlock(72,81,this,78,60);
  });

  $("#cell-79").keyup(function(){
    checkRC(72,81,this,79,6);
    checkBlock(72,81,this,79,60);
  });

  $("#cell-80").keyup(function(){
    checkRC(72,81,this,80,6);
    checkBlock(72,81,this,80,60);
  });


});
var dupliArr,Id;
function loading()
{
	
  Num=Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
	switch(Num)
	{
    case 1:dupliArr=[].concat(Arr);
   	 	break;
    case 2:dupliArr=[].concat(Arr2);
    	break;
    case 3:dupliArr=[].concat(Arr3);
    	break;
    case 4:dupliArr=[].concat(Arr4);
    	break;
    case 5:dupliArr=[].concat(Arr5);
    	break;
    case 6:dupliArr=[].concat(Arr6);
    	break;
	}
	for (var i = 0; i<81; i++) 
	{
    Id="#cell-"+i;
    if(dupliArr[i]!=0)
    {
      $(Id).prop('disabled',true);
      $(Id).val(dupliArr[i]);
    }
    else   		
      $(Id).val('');
 	}
}
function checkRC(start,end,inst,index,block)
{
	var num=$(inst).val();
	c=0;
	dupliArr[index]=num;
	var Add=index;
	if(index>=27&&index<=36)
		Add=Add-9*3;
	
	if(index>=36&&index<=45)
		Add=Add-9*4;
	
	if(index>=45&&index<=54)
		Add=Add-9*5;
	
	if(index>=54&&index<=63)
		Add=Add-9*6;
	
	if(index>=63&&index<=72)
		Add=Add-9*7;
	
	if(index>=72&&index<=81)
		Add=Add-9*8;
	
	
	for(i=start;i<end;i++)
	{
		if(Add==index)
		{
			Add=Add+9;
			continue;
		}
		else
		{			
			if(num==dupliArr[Add])//for column
				c=1;			
		}
		Add=Add+9;
	}

	for(i=start;i<end;i++)
	{
		if(i==index)
			continue;
		else
		{
			if(num==dupliArr[i])// for row 
				c=1;
		}
				  
	}
}
	
function checkBlock(start,end,inst,index,block){
var num=$(inst).val();
var v=block;

	for (var k=start; k<end; k++) 
	{ //for block
		
		if((k%3==0)&&(k>start))
			v=v+6;

		if(v==index)
		{
			v++;
			continue;
		}
		else
		{		
			if(num==dupliArr[v++])	
				c=1;	
		}		
	}

  if(c==1)
		$(inst).css({'color':'red'});
	else
		$(inst).css({'color':'blue'});
	
}