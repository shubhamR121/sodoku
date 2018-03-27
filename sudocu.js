	var Arr1=[5,3,0,0,7,0,0,0,0,
						6,0,0,1,9,5,0,0,0,
						0,9,8,0,0,0,0,6,0,
						8,0,0,0,6,0,0,0,3,
						4,0,0,8,0,3,0,0,1,
						7,0,0,0,2,0,0,0,6,
						0,6,0,0,0,0,2,8,0,
						0,0,0,4,1,9,0,0,5,
						0,0,0,0,8,0,0,7,9
						];

	var Arr2=[3,0,6,5,0,8,4,0,0,
						5,2,0,0,0,0,0,0,0,
						0,8,7,0,0,0,0,3,1,
						0,0,3,0,1,0,0,8,0,
						9,0,0,8,6,3,0,0,5,
						0,5,0,0,9,0,6,0,0,
						1,3,0,0,0,0,2,5,0,
						0,0,0,0,0,0,0,7,4,
						0,0,5,2,0,6,3,0,0
						];

	var Arr3=[0,0,0,2,6,0,7,0,1,
						6,8,0,0,7,0,0,9,0,
						1,9,0,0,0,4,5,0,0,
						8,2,0,1,0,0,0,4,0,
						0,0,4,6,0,2,9,0,0,
						0,5,0,0,0,3,0,2,8,
						0,0,9,3,0,0,0,7,4,
						0,4,0,0,5,0,0,3,6,
						7,0,3,2,1,8,0,0,0
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

	$(document).ready(function()
	{
		loading();
		$("#cell-0").keyup(function(){
			checkRow(0,9,this,0);
			checkColumn(0,72,this,0);
			checkBlock(0,9,this,0,0);
		});
		$("#cell-1").keyup(function(){
			checkRow(0,9,this,1);
			checkColumn(1,73,this,1);
			checkBlock(0,9,this,1,0);
		});
		$("#cell-2").keyup(function(){
			checkRow(0,9,this,2);
			checkColumn(2,74,this,2);
			checkBlock(0,9,this,2,0);
		});

		$("#cell-3").keyup(function(){
			checkRow(0,9,this,3);
			checkColumn(3,75,this,3);
			checkBlock(0,9,this,3,3);
		});

		$("#cell-4").keyup(function(){
			checkRow(0,9,this,4);
			checkColumn(4,76,this,4);
			checkBlock(0,9,this,4,3);
		});
		$("#cell-5").keyup(function(){
			checkRow(0,9,this,5);
			checkColumn(5,77,this,5);
			checkBlock(0,9,this,5,3);
		});

		$("#cell-6").keyup(function(){
			checkRow(0,9,this,6);
			checkColumn(6,78,this,6);
			checkBlock(0,9,this,6,6);
		});

		$("#cell-7").keyup(function(){
			checkRow(0,9,this,7);
			checkColumn(7,79,this,7);
			checkBlock(0,9,this,7,6);
		});

		$("#cell-8").keyup(function(){
			checkRow(0,9,this,8);
			checkColumn(8,80,this,8);
			checkBlock(0,9,this,8,6);
		});

		 $("#cell-9").keyup(function(){
			checkRow(9,18,this,9);
			checkColumn(0,72,this,9);
			checkBlock(9,18,this,9,0);
		});

		$("#cell-10").keyup(function(){
			checkRow(9,18,this,10);
			checkColumn(1,73,this,10);
			checkBlock(9,18,this,10,0);
		});

		$("#cell-11").keyup(function(){
			checkRow(9,18,this,11);
			checkColumn(2,74,this,11);
			checkBlock(9,18,this,11,0);
		});

		$("#cell-12").keyup(function(){
			checkRow(9,18,this,12);
			checkColumn(3,75,this,12);
			checkBlock(9,18,this,12,3);
		});

		$("#cell-13").keyup(function(){
			checkRow(9,18,this,13);
			checkColumn(4,76,this,13);
			checkBlock(9,18,this,13,3);
		});

		$("#cell-14").keyup(function(){
			checkRow(9,18,this,14);
			checkColumn(5,77,this,14);
			checkBlock(9,18,this,14,3);
		});

		$("#cell-15").keyup(function(){
			checkRow(9,17,this,15);
			checkColumn(6,78,this,15);
			checkBlock(9,18,this,15,6);
		});

		$("#cell-16").keyup(function(){
			checkRow(9,18,this,16);
			checkColumn(7,79,this,16);
			checkBlock(9,18,this,16,6);
		});

		$("#cell-17").keyup(function(){
			checkRow(9,18,this,17);
			checkColumn(8,80,this,17);
			checkBlock(9,18,this,17,6);
		});

		$("#cell-18").keyup(function(){
			checkRow(18,27,this,18);
			checkColumn(0,72,this,18);
			checkBlock(18,27,this,18,0);
		});

		$("#cell-19").keyup(function(){
			checkRow(18,27,this,19);
			checkColumn(1,73,this,19);
			checkBlock(18,27,this,19,0);
		});

		$("#cell-20").keyup(function(){
			checkRow(18,27,this,20);
			checkColumn(2,74,this,20);
			checkBlock(18,27,this,20,0);
		});

		$("#cell-21").keyup(function(){
			checkRow(18,27,this,21);
			checkColumn(3,75,this,21);
			checkBlock(18,27,this,21,3);
		});

		$("#cell-22").keyup(function(){
			checkRow(18,27,this,22);
			checkColumn(4,76,this,22);
			checkBlock(18,27,this,22,3);
		});

		$("#cell-23").keyup(function(){
			checkRow(18,27,this,23);
			checkColumn(5,77,this,23);
			checkBlock(18,27,this,23,3);
		});

		$("#cell-24").keyup(function(){
			checkRow(18,27,this,24);
			checkColumn(6,78,this,24);
			checkBlock(18,27,this,24,6);
		});

		$("#cell-25").keyup(function(){
			checkRow(18,27,this,25);
			checkColumn(7,79,this,25);
			checkBlock(18,27,this,25,6);
		});

		$("#cell-26").keyup(function(){
			checkRow(18,27,this,26);
		 checkColumn(8,80,this,26);
		 checkBlock(18,27,this,26,6);

		});

		$("#cell-27").keyup(function(){
			checkRow(27,36,this,27);
			checkColumn(0,72,this,27);
			checkBlock(27,36,this,27,27);
		});

		$("#cell-28").keyup(function(){
			checkRow(27,36,this,28);
			checkColumn(1,73,this,28);
			checkBlock(27,36,this,28,27);
		});

		$("#cell-29").keyup(function(){
			checkRow(27,36,this,29);
			checkColumn(2,74,this,29);
			checkBlock(27,36,this,29,27);
		});

		$("#cell-30").keyup(function(){
			checkRow(27,36,this,30);
			checkColumn(3,75,this,30);
			checkBlock(27,36,this,30,30);
		});

		$("#cell-31").keyup(function(){
			checkRow(27,36,this,31);
			checkColumn(4,76,this,31);
			checkBlock(27,36,this,31,30);
		});

		$("#cell-32").keyup(function(){
			checkRow(27,36,this,32);
			checkColumn(5,77,this,32);
			checkBlock(27,36,this,32,30);
		});

		$("#cell-33").keyup(function(){
			checkRow(27,36,this,33);
			checkColumn(6,78,this,33);
			checkBlock(27,36,this,33,33);
		});

		$("#cell-34").keyup(function(){
			checkRow(27,36,this,34);
			checkColumn(7,79,this,34);
			checkBlock(27,36,this,34,33);
		});

		$("#cell-35").keyup(function(){
			checkRow(27,36,this,35);
			checkColumn(8,80,this,35);
			checkBlock(27,36,this,35,33);
		});

		$("#cell-36").keyup(function(){
			checkRow(36,45,this,36);
			checkColumn(0,72,this,36);
			checkBlock(36,45,this,36,27);
		});

		$("#cell-37").keyup(function(){
			checkRow(36,45,this,37);
			checkColumn(1,73,this,37);
			checkBlock(36,45,this,37,27);
		});

		$("#cell-38").keyup(function(){
			checkRow(36,45,this,38);
			checkColumn(2,74,this,38);
			checkBlock(36,45,this,38,27);
		});

		$("#cell-39").keyup(function(){
			checkRow(36,45,this,39);
			checkColumn(3,75,this,39);
			checkBlock(36,45,this,39,30);
		});

			$("#cell-40").keyup(function(){
			checkRow(36,45,this,40);
			checkColumn(4,76,this,40);
			checkBlock(36,45,this,40,30);
		});

		$("#cell-41").keyup(function(){
			checkRow(36,45,this,40);
			checkColumn(5,77,this,41);
			checkBlock(36,45,this,40,30);
		});

		$("#cell-42").keyup(function(){
			checkRow(36,45,this,42);
			checkColumn(6,78,this,42);
			checkBlock(36,45,this,41,33);
		});

		$("#cell-43").keyup(function(){
			checkRow(36,45,this,43);
			checkColumn(7,79,this,43);
			checkBlock(36,45,this,43,33);
		});

		$("#cell-44").keyup(function(){
			checkRow(36,45,this,44);
			checkColumn(8,80,this,44);
			checkBlock(36,45,this,44,33);
		});

		$("#cell-45").keyup(function(){
			checkRow(45,54,this,45);
			checkColumn(0,72,this,45);
			checkBlock(45,54,this,45,27);
		});

		$("#cell-46").keyup(function(){
			checkRow(45,54,this,46);
			checkColumn(1,73,this,46);
			checkBlock(45,54,this,46,27);
		});

		$("#cell-47").keyup(function(){
			checkRow(45,54,this,47);
			checkColumn(2,74,this,47);
			checkBlock(45,54,this,47,27);
		});

		$("#cell-48").keyup(function(){
			checkRow(45,54,this,48);
			checkColumn(3,75,this,48);
			checkBlock(45,54,this,48,30);
		});

		$("#cell-49").keyup(function(){
			checkRow(45,54,this,49);
			checkColumn(4,76,this,49);
			checkBlock(45,54,this,49,30);
		});
			
		$("#cell-50").keyup(function(){
			checkRow(45,54,this,50);
			checkColumn(5,77,this,50);
			checkBlock(45,54,this,50,30);
		});

		$("#cell-51").keyup(function(){
			checkRow(45,54,this,51);
			checkColumn(6,78,this,51);
			checkBlock(45,54,this,51,33);
		});

		$("#cell-52").keyup(function(){
			checkRow(45,54,this,52);
			checkColumn(7,79,this,52);
			checkBlock(45,54,this,52,33);
		});

		$("#cell-53").keyup(function(){
			checkRow(45,54,this,53);
			checkColumn(8,80,this,53);
			checkBlock(45,54,this,53,33);
		});
			
		$("#cell-54").keyup(function(){
			checkRow(54,63,this,54);
			checkColumn(0,72,this,54);
			checkBlock(54,63,this,54,54);
		});

		$("#cell-55").keyup(function(){
			checkRow(54,62,this,55);
			checkColumn(1,73,this,55);
			checkBlock(54,62,this,55,54);
		});

		$("#cell-56").keyup(function(){
			checkRow(54,63,this,56);
			checkColumn(2,74,this,56);
			checkBlock(54,63,this,56,54);
		});

		$("#cell-57").keyup(function(){
			checkRow(54,63,this,57);
			checkColumn(3,75,this,57);
			checkBlock(54,63,this,57,57);
		});

		$("#cell-58").keyup(function(){
			checkRow(54,63,this,58);
			checkColumn(4,76,this,58);
			checkBlock(54,63,this,58,57);
		});

		$("#cell-59").keyup(function(){
			checkRow(54,63,this,59);
			checkColumn(5,77,this,59);
			checkBlock(54,63,this,59,57);
		});

		$("#cell-60").keyup(function(){
			checkRow(54,63,this,60);
			checkColumn(6,78,this,60);
			checkBlock(54,63,this,60,60);
		});

		$("#cell-61").keyup(function(){
			checkRow(54,63,this,61);
			checkColumn(7,79,this,61);
			checkBlock(54,63,this,61,60);
		});

		$("#cell-62").keyup(function(){
			checkRow(54,63,this,62);
			checkColumn(8,80,this,62);
			checkBlock(54,63,this,62,60);
		});

		$("#cell-63").keyup(function(){
			checkRow(63,72,this,63);
			checkColumn(0,72,this,63);
			checkBlock(63,72,this,63,54);
		});

		$("#cell-64").keyup(function(){
			checkRow(63,72,this,64);
			checkColumn(1,73,this,64);
			checkBlock(63,72,this,64,54);
		});

		$("#cell-65").keyup(function(){
			checkRow(63,72,this,65);
			checkColumn(2,74,this,65);
			checkBlock(63,72,this,65,54);
		});


		$("#cell-66").keyup(function(){
			checkRow(63,72,this,66);
			checkColumn(3,75,this,66);
			checkBlock(63,72,this,66,57);
		});

		$("#cell-67").keyup(function(){
			checkRow(63,72,this,67);
			checkColumn(4,76,this,67);
			checkBlock(63,72,this,67,57);
		});

		$("#cell-68").keyup(function(){
			checkRow(63,72,this,68);
			checkColumn(5,77,this,68);
			checkBlock(63,72,this,68,57);
		});

		$("#cell-69").keyup(function(){
			checkRow(63,72,this,69);
			checkColumn(6,78,this,69);
			checkBlock(63,72,this,69,60);
		});

		$("#cell-70").keyup(function(){
			checkRow(63,71,this,70);
			checkColumn(7,79,this,70);
			checkBlock(63,71,this,70,60);
		});

		$("#cell-71").keyup(function(){
			checkRow(63,72,this,71);
			checkColumn(8,80,this,71);
			checkBlock(63,72,this,71,60);
		});

		$("#cell-72").keyup(function(){
			checkRow(72,81,this,72);
			checkColumn(0,72,this,72);
			checkBlock(72,81,this,72,54);
		});

		$("#cell-73").keyup(function(){
			checkRow(72,81,this,73);
			checkColumn(1,73,this,73);
			checkBlock(0,81,this,73,54);
		});

		$("#cell-74").keyup(function(){
			checkRow(72,81,this,74);
			checkColumn(2,74,this,74);
			checkBlock(72,81,this,74,54);
		});

		$("#cell-75").keyup(function(){
			checkRow(72,81,this,75);
			checkColumn(3,75,this,75);
			checkBlock(72,81,this,75,57);
		});

		$("#cell-76").keyup(function(){
			checkRow(72,81,this,76);
			checkColumn(4,76,this,76);
			checkBlock(72,81,this,76,57);
		});

		$("#cell-77").keyup(function(){
			checkRow(72,81,this,77);
			checkColumn(5,77,this,77);
			checkBlock(72,81,this,77,57);
		});

		$("#cell-78").keyup(function(){
			checkRow(72,81,this,78);
			checkColumn(6,78,this,78);
			checkBlock(72,81,this,78,60);
		});

		$("#cell-79").keyup(function(){
			checkRow(72,81,this,79);
			checkColumn(7,79,this,79);
			checkBlock(72,81,this,79,60);
		});

		$("#cell-80").keyup(function(){
			checkRow(72,81,this,80);
			checkColumn(8,80,this,80);
			checkBlock(72,81,this,80,60);
		});

		var dupliArr,Id;
		function loading()//for dynamic 
		{
			Num=Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
			switch(Num)
			{
				case 1:dupliArr=[].concat(Arr1);
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

		var flag=0,flag1,add=0;
		function checkRow(f,l,inst,loc)//for row
		{
			var n=$(inst).val();
			dupliArr[loc]=n;
			var i;
			if(n>0 && n<10)
			{	
				for(i=f;i<l;i++)
				{
					if(i==loc)
						continue;
					if(dupliArr[i]==n)
					{
						flag=1;
						break;
					}
			}
		}
		else
			$(inst).val('');
		}
		function checkColumn(f,l,inst,loc)//for column
		{
			var n=$(inst).val();
			dupliArr[loc]=n;
			var i;
			for(i=f;i<=l;i=i+9)
			{
				if(i==loc)
					continue;
				if(dupliArr[i]==n)
				{
					flag=1;
					break;
				}
			}
		}
		function checkBlock(start,end,inst,index,block)//for block
		{
			var num=$(inst).val();
			var v=block;

			for (var k=start; k<end; k++) 
			{
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
						flag=1;
				}
			}
			if(flag==1)
			{
				$(inst).css({'color':'red'});
				flag=0;
			}
			else
				$(inst).css({'color':'black'});
		}
	});