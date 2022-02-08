class NumberUtil {
	float2moeda(num) {

		let x = 0;
		let cents;
		let ret;

		if(num<0) {
			num = Math.abs(num);
			x = 1;
		}

		if(isNaN(num)) num = "0";
			cents = Math.floor((num*100+0.5)%100);

		num = Math.floor((num*100+0.5)/100).toString();

		if(cents < 10) cents = "0" + cents;
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
				num = num.substring(0,num.length-(4*i+3))+'.'
					+num.substring(num.length-(4*i+3));

		ret = num + ',' + cents;
		if (x == 1) ret = ' - ' + ret;
		return ret;
	}

	moeda2float(moeda){
		moeda = moeda.replace(/[.]/g,"");
		moeda = moeda.replace(",",".");
		return parseFloat(moeda);
	}
}

var number = new NumberUtil();
global.number = number;
export var number;
