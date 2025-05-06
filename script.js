DOCTYPE
 html>
<html lang="es">
<head>
{meta_charset = "UTF-8"}
  <title>Interacción con Componentes HTML</title>
</head>
<body>

  <h1 onclick="mostrarAlerta(); registrarClick();">¡VEN A BURGER TOWN!</h1>

  <h2 id="hamburguesa-titulo">¡Una imagen de una HAMBURGUESA!</h2>
alt="Hamburguesa deliciosa"

  <p onclick="cambiarColor()">¡¡ARROZ!!!</p>

  <script>
    function mostrarAlerta() {
      alert("ES HORA DE HAMBURGUESA")
    }

    function registrarClick() {
      console.log("¡Alguien haga clic en BURGER TOWN!")
    }

    function cambiarColor() {
      document.getElementById("hamburguesa-titulo").style.color = "red"
    }
  </script>

</body>
</html>
