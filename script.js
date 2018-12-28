function Count()
{
	var a, h, result;
	a = document.getElementById('a').value;
	h = document.getElementById('h').value;

	result = a * h / 2;
	
	if (isNaN(a) || isNaN(h)) { console.log('Это не число');}
	else if (a < 0 || h < 0) {console.log('Вы ввели отрицательное число');}
	else {console.log(result);}
}

function Count2()
{
	var first = 0;
	var second = 0;
	var result = 0;
	console.log('Найти произведение (1+2+3+…+40)(5+10+15+...+70):');
	for (var i = 1; i <= 40; i++)
		first += i;

	for (var i = 5; i <= 70; i += 5)
		second += i;

	result = first * second;
	console.log(result);
}

function SortItems()
{	
	var matrix = [];
	for (var i = 0; i < 6; i++)
	{
		matrix[i] = []
		for (var j = 0; j < 8; j++)
		{
			var num = GetRandomInt(0, 100);
			matrix[i].push(num);	
		}
	}

	document.getElementById("tab").innerHTML = createTable(matrix);
	
	var middle = [];

	var p = [];

	var middlev = 0;

	for (var i = 0; i < 6; i++)
	{
		for (var j = 0; j < 8; j++)
		{
			middlev += matrix[i][j];
		}
		middlev /= 8;
		middle.push(middlev);
	}

	for (var i = 0; i < 6; i++)
	{
		for (var j = 0; j < 8; j++)
		{
			if (matrix[i][j] > middle[i]) 
				p.push(matrix[i][j]);
		}
	}

	for (var i = 0; i < p.length; i++)
		console.log(p[i]);
}

function GetRandomInt(min, max)
{
	return(Math.floor(Math.random() * (max - min) + min));
}

function createTable(matrix)
{
	var rows = [];
	for(var i = 0; i < matrix.length; i++)
	{
		rows.push("<tr style='border: solid black 4px'><td style='border: solid black 4px'>" + matrix[i].join("</td><td style='border: solid black 4px'>") + "</td></tr>");
	}
	return "<table class='table' style='top-margin: 20px'>" + rows.join("") + "</table>";
}

function getArray(n)
{
	var matrix = [];

	for (var i = 0; i < n; i++)
	{
		matrix[i] = []
		for (var j = 0; j < n; j++)
		{
			var num = GetRandomInt(0, 100);
			matrix[i].push(num);	
		}
	}

	document.getElementById("tab1").innerHTML = createTable(matrix);
	getResultArray(matrix);
	
}

function getResultArray(matrix)
{
	var m = [];
	var n = document.getElementById('n').value;

	for (var i = 0; i < n; i++)
	{
		for (var j = 0; j < n; j++) 
		{
			m.push(matrix[i][j]);
		}
	}

	m.sort(function(a, b) {return a - b;});

	var res = new Array();
	var k = 0; 
	for (var i = n-1; i > -1; i--)
	{
		res[i] = new Array();
		for (var j = 0; j < n; j++)
		{
			res[i][j] = m[k];
			k ++;	
		}
		i --;
		res[i] = new Array();
		for (var j = n-1; j > -1; j--)
		{
			res[i][j] = m[k];
			k ++;
		}
	}

	console.log(res);
	document.getElementById("tab2").innerHTML = createTable(res);
}
			
