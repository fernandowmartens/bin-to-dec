import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [dec, setDec] = useState(null);
  const [error, setError] = useState(0);

  const convert = () => {
    var dec = document.getElementById("getDec").value;
    if (dec.match(/^[0-1]+$/g) === null) {
      console.log("> Não passou na validação");
      setError(1);
      return;
    } else {
      console.log("> Passou com sucesso pela validação");
      setError(0);
    }

    var multiplier = 0,
      count = 0,
      soma = 0,
      len = dec.length,
      num = 0;

    for (let i = len; i > 0; i--) {
      num = parseInt(dec.substring(i - 1, i));
      multiplier = num * Math.pow(2, count);
      count++;
      soma += multiplier;
    }

    setDec(soma);
  };

  const prevent = (e) => {
    e.preventDefault();
  };

  const copyAll = (e) => {
    e.target.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <Head>
        <title>Bin2Dec</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="App">
          <img
            src={"binario.jpg"}
            className="logo"
            alt="imagem de numeros binários"
          />
          <h1 className="title">Conversor de Binário para Decimal</h1>
          <form className="form" onSubmit={prevent}>
            <input
              id="getDec"
              className="input-block"
              placeholder="Digite aqui"
              maxLength="8"
              typeof="number"
              inputMode="numeric"
              autoComplete="off"
              autoFocus
            />
            {error === 1 && (
              <div className="message-box">Escreva apenas 0's e 1's</div>
            )}
            <button className="convert-button" onClick={convert}>
              Converter
            </button>
            {dec != null && (
              <>
                <input
                  className="input-block two"
                  value={dec}
                  onClick={copyAll}
                  readOnly
                />
                <span className="span">Clique na caixa para copiar</span>
              </>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
