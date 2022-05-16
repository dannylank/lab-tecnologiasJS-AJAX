
(function() {
    $("#curl").val("Page location is: " + window.location.href);
  })();
  
  function getcontetns() {
    $("#estado").css("background-color", "orange");
    $("#estado").html('Cargando...');
   
    setTimeout(funcAjax, 2000);
  
    function funcAjax() {
      $.ajax({
        url: window.location.href + '../texto.txt',
        async: false,
        success: function(data,status, xhr) {
          let headers = xhr.getAllResponseHeaders();
          $('#contenidos').append(data);
          $("#estado").css("background-color", "lightgreen");
          $("#estado").html('Completado');
          $("#headers").append(headers);
          $("#state").val(xhr.status +', '+ xhr.statusText);
        }
      });
    }
  }