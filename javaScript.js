
    $('#btnEndereco').click(function(){
        $.ajax({
			url:'http://cep.republicavirtual.com.br/web_cep.php',
			dataType:'json',
			type: 'GET',
			data:{
				cep: $('#cep').val(),
				formato:'json'
			},
			erros:function()
			{
				 alert( "page not found" );
			},
			success: function(data){
            $('#logradouro').val(data.logradouro);
			$('#bairro').val(data.bairro);
			$('#cidade').val(data.cidade);
			$('#estado').val(data.uf);
        }});
    });
