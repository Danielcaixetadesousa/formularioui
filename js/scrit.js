$(document).ready(function(){
    $('#cep').on('blur', function(){
        const cep = $(this).val();
        const url = 'https://viacep.com.br/ws/' + cep + '/json/';

        $.ajax({
            url: url,
            success: function(response) {
                $('#logradouro').val(response.logradouro);
                $('#cidade').val(response.localidade);
                $('#estado').val(response.uf);
                $('#bairro').val(response.bairro);
                $('#bairro').val(response.bairro);
            },
            error: function() {
                alert('Não foi possível buscar o cep, verifique e tente novamente!');
            }
        });
    });
});

<script>
function run(){

	function randomiza(n) {
		var ranNum = Math.round(Math.random()*n);
		return ranNum;
	}

	function mod(dividendo,divisor) {
		return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
	}

	function gerarCNPJ(field) {
		var comPontos = $("#pontuacao").is(':checked');
		var n = 9;
		var n1 = randomiza(n);
		var n2 = randomiza(n);
		var n3 = randomiza(n);
		var n4 = randomiza(n);
		var n5 = randomiza(n);
		var n6 = randomiza(n);
		var n7 = randomiza(n);
		var n8 = randomiza(n);
		var n9 = 0; //randomiza(n);
		var n10 = 0; //randomiza(n);
		var n11 = 0; //randomiza(n);
		var n12 = 1; //randomiza(n);
		var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
		d1 = 11 - ( mod(d1,11) );

		if (d1>=10) d1 = 0;
		var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
		d2 = 11 - ( mod(d2,11) );
		if (d2>=10) d2 = 0;
		retorno = '';
		if (comPontos) cnpj = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
		else cnpj = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;

		$('#cnpj').val(cnpj);
	}

	function validarCNPJ(cnpj) {
		cnpj = cnpj.replace(/[^\d]+/g,'');
		if(cnpj == '') return false;
		if(cnpj.length != 14) return false;

		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if(resultado != digitos.charAt(0)) return false;

		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if(pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if(resultado != digitos.charAt(1)) return false;

		return true;
	}

	function resetFields(){
		$('.block .form-group').removeClass('has-success');
		$('.block .form-group').removeClass('has-error');
		$('.block .glyphicon').removeClass('glyphicon-ok');
		$('.block .glyphicon').removeClass('glyphicon-remove');
	}

	$('#cnpj').click(function(){
		$(this).select();
	});

	$('#gerar').click(function(){
		resetFields();
		gerarCNPJ();
	});

	$('#validar').click(function(){
		var cnpj = $('#cnpj').val();

		resetFields();

		if(validarCNPJ(cnpj)){
			$('.block .form-group').addClass('has-success');
			$('.block .glyphicon').addClass('glyphicon-ok');
			$('.block .glyphicon').show();
		}else{
			$('.block .form-group').addClass('has-error');
			$('.block .glyphicon').addClass('glyphicon-remove');
			$('.block .glyphicon').show();
		}
	});

// validando cnpj
}
</script>	</main>

			<div class="container hidden-print">
			<div class="bottom-banner">
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1714195545121238"
				crossorigin="anonymous"></script>
				<!-- Bottom -->
				<ins class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-1714195545121238"
				data-ad-slot="6345858528"
				data-ad-format="auto"
				data-full-width-responsive="true"></ins>
				<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			</div>
		</div>
	
	<footer class="hidden-print"></footer>

	<script src="/js/app-v1.2.js"></script>
	
	<script>
	if (typeof run === "function") { 
    	run();
	}
	</script>

function run(){

	function randomiza(n) {
		var ranNum = Math.round(Math.random()*n);
		return ranNum;
	}

	function mod(dividendo,divisor) {
		return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
	}

	function gerarCPF() {
		var comPontos = $("#pontuacao").is(':checked');
		var n = 9;
		var n1 = randomiza(n);
		var n2 = randomiza(n);
		var n3 = randomiza(n);
		var n4 = randomiza(n);
		var n5 = randomiza(n);
		var n6 = randomiza(n);
		var n7 = randomiza(n);
		var n8 = randomiza(n);
		var n9 = randomiza(n);
		var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
		d1 = 11 - ( mod(d1,11) );
		if (d1>=10) d1 = 0;
		var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
		d2 = 11 - ( mod(d2,11) );
		if (d2>=10) d2 = 0;
		retorno = '';
		if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
		else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

	    $('#cpf').val(cpf);
	}

	function validarCPF(cpf) {

		cpf = cpf.replace(/[^\d]+/g,'');

		if(cpf == '' || cpf.length != 11) return false;
		
		// Valida 1º digito
		add = 0;
		for (i=0; i < 9; i ++)
			add += parseInt(cpf.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(cpf.charAt(9)))
			return false;
		
		// Valida 2º digito
		add = 0;
		for (i = 0; i < 10; i ++)
			add += parseInt(cpf.charAt(i)) * (11 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(cpf.charAt(10)))
			return false;
			
		return true;
	}

	function resetFields(){
		$('.block .form-group').removeClass('has-success');
		$('.block .form-group').removeClass('has-error');
		$('.block .glyphicon').removeClass('glyphicon-ok');
		$('.block .glyphicon').removeClass('glyphicon-remove');
	}

	$('#cpf').click(function(){
		$(this).select();
	});

	$('#gerar').click(function(){
		resetFields();
		gerarCPF();
	});

	$('#validar').click(function(){
		var cpf = $('#cpf').val();

		resetFields();

		if(validarCPF(cpf)){
			$('.block .form-group').addClass('has-success');
			$('.block .glyphicon').addClass('glyphicon-ok');
			$('.block .glyphicon').show();
		}else{
			$('.block .form-group').addClass('has-error');
			$('.block .glyphicon').addClass('glyphicon-remove');
			$('.block .glyphicon').show();
		}
	});
}