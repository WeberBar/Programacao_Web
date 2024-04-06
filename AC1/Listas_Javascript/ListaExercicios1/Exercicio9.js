function validarEmail(email) {
    const indexArroba = email.indexOf('@');
    const indexUltimoPonto = email.lastIndexOf('.');
  
    return (
      indexArroba !== -1 &&  
      indexUltimoPonto > indexArroba + 1 &&  
      indexUltimoPonto !== email.length - 1  
    );
  }
  
  console.log(validarEmail("vitorweber@facens.com"));
