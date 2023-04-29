export async function consultarCanciones(token) {
    const url ="https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US";
    const peticion = {
      method: "GET",
      headers: {
        "Authorization": token
      },
    };
  
    let res = await fetch(url, peticion);
    let resDatos = await res.json();
    return resDatos
  }
  
  export async function pedirTokens () {
      const url = "https://accounts.spotify.com/api/token"
      let datoUno = "grant_type=client_credentials"
      let datoDos = "client_id=5938fd7d0e5f4d889ba4db749d5780ad"
      let datoTres = "client_secret=63d8eca3cf88416ca881b4f92588b05b"
  
      const peticion = {
        method: "POST",
        headers: {
          "content-Type": "application/x-www-form-urlencoded"
        },
        body: `${datoUno}&${datoDos}&${datoTres}`
      }
  
      let respuesta = await fetch(url,peticion)
      let respuestaToken = await respuesta.json()
  
      let token = respuestaToken.token_type+" "+respuestaToken.access_token
      return(token)
  }
  