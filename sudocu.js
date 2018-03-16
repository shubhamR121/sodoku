

var Arr=[5,3,0,0,7,0,0,0,0,
			 6,0,0,1,9,5,0,0,0,
			 0,9,8,0,0,0,0,6,0,
			 8,0,0,0,6,0,0,0,3,
			 4,0,0,8,0,3,0,0,1,
			 7,0,0,0,2,1,0,0,6,
			 0,6,0,0,0,0,2,8,0,
			 0,0,0,4,1,9,0,0,5,
			 0,0,0,0,8,0,0,7,9	
			 ];
$(document).ready(function(){
    $("#cell-2").keyup(function(){
    	checkRC(0,9,this,2,0);
    });



    $("#cell-3").keyup(function(){
    	checkRC(0,9,this,3,3);
    });


    $("#cell-5").keyup(function(){
    	checkRC(0,9,this,5,3);
    });

    $("#cell-6").keyup(function(){
    	checkRC(0,9,this,6,6);
    });

    $("#cell-7").keyup(function(){
    	checkRC(0,9,this,7,6);
    });

    $("#cell-8").keyup(function(){
    	checkRC(0,9,this,8,6);
    });

    $("#cell-10").keyup(function(){
    	checkRC(9,17,this,10,0);
    });

    $("#cell-11").keyup(function(){
    	checkRC(9,17,this,11,0);
    });

    $("#cell-15").keyup(function(){
    	checkRC(9,17,this,15,6);
    });

    $("#cell-16").keyup(function(){
    	checkRC(9,17,this,16,6);
    });

    $("#cell-17").keyup(function(){
    	checkRC(9,17,this,17,6);
    });

    $("#cell-18").keyup(function(){
    	checkRC(18,26,this,18,0);
    });

    $("#cell-21").keyup(function(){
    	checkRC(18,26,this,21,3);
    });

    $("#cell-22").keyup(function(){
    	checkRC(18,26,this,22,3);
    });

    $("#cell-23").keyup(function(){
    	checkRC(18,26,this,23,3);
    });

    $("#cell-24").keyup(function(){
    	checkRC(18,26,this,24,6);
    });

    $("#cell-26").keyup(function(){
    	checkRC(18,26,this,24,6);
    });

    $("#cell-28").keyup(function(){
    	checkRC(27,35,this,28,0);
    });

    $("#cell-29").keyup(function(){
    	checkRC(27,35,this,29,0);
    });

    $("#cell-30").keyup(function(){
    	checkRC(27,35,this,30,3);
    });

    $("#cell-32").keyup(function(){
    	checkRC(27,35,this,32,3);
    });

    $("#cell-33").keyup(function(){
    	checkRC(27,35,this,33,6);
    });

    $("#cell-34").keyup(function(){
    	checkRC(27,35,this,34,6);
    });

    $("#cell-37").keyup(function(){
    	checkRC(36,44,this,37,0);
    });

    $("#cell-38").keyup(function(){
    	checkRC(36,44,this,38,0);
    });

    $("#cell-40").keyup(function(){
    	checkRC(36,44,this,40,3);
    });

    $("#cell-42").keyup(function(){
    	checkRC(36,44,this,42,6);
    });

    $("#cell-43").keyup(function(){
    	checkRC(36,44,this,43,6);
    });

    $("#cell-46").keyup(function(){
    	checkRC(45,53,this,46,0);
    });

    $("#cell-47").keyup(function(){
    	checkRC(45,53,this,47,0);
    });

    $("#cell-48").keyup(function(){
    	checkRC(45,53,this,48,3);
    });
    
    $("#cell-50").keyup(function(){
    	checkRC(45,53,this,50,3);
    });

    $("#cell-51").keyup(function(){
    	checkRC(45,53,this,51,6);
    });

    $("#cell-52").keyup(function(){
    	checkRC(45,53,this,52,6);
    });
    
    $("#cell-54").keyup(function(){
    	checkRC(54,62,this,54,0);
    });

     $("#cell-56").keyup(function(){
    	checkRC(54,62,this,56,0);
    });

      $("#cell-57").keyup(function(){
    	checkRC(54,62,this,57,3);
    });

     $("#cell-58").keyup(function(){
    	checkRC(54,62,this,58,0);
    });

     $("#cell-59").keyup(function(){
    	checkRC(54,62,this,59,0);
    });

      $("#cell-62").keyup(function(){
    	checkRC(54,62,this,62,6);
    });

      $("#cell-63").keyup(function(){
    	checkRC(63,71,this,63,0);
    });

      $("#cell-64").keyup(function(){
    	checkRC(63,71,this,64,0);
    });

      $("#cell-65").keyup(function(){
    	checkRC(63,71,this,65,0);
    });

      $("#cell-69").keyup(function(){
    	checkRC(63,71,this,69,6);
    });

      $("#cell-70").keyup(function(){
    	checkRC(63,71,this,70,6);
    });

      $("#cell-72").keyup(function(){
    	checkRC(72,80,this,72,0);
    });

      $("#cell-73").keyup(function(){
    	checkRC(72,80,this,73,0);
    });

      $("#cell-74").keyup(function(){
    	checkRC(72,80,this,74,0);
    });

      $("#cell-75").keyup(function(){
    	checkRC(72,80,this,75,3);
    });

      $("#cell-77").keyup(function(){
    	checkRC(72,80,this,77,3);
    });

      $("#cell-78").keyup(function(){
    	checkRC(72,80,this,78,6);
    });

function checkRC(start,end,inst,index,block)
{
	var num=$(inst).val();

	Arr[index]=num;
	var sum=index;
		
	for(i=start;i<end;i++)
	{
		sum=sum+9;	

		if(num==Arr[sum])// check for column
			k=1;	

		if(i==index)
			continue;
		else
		{
			if(num==Arr[i])// check for row 
				k=1;
		}
	}
    

	
	var v=block;
	for (var j = start; j < end; j++)
	{ //for block
				
		if((j%3==0)&&(j>start))
			v=v+6;

		if(v==index)
		{
			v++;
			continue;
		}
		else
		{
			if(num==Arr[v++])
				k=1;
		}		
	}


    if(k==1)
    {
		$(inst).css({ 'color': 'red'});
		k=0;
	} 
	else
		$(inst).css({ 'color': 'blue'});

}
});