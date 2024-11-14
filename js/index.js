const btn = document.getElementById("add-btn");
const segnoZodiacale = document.querySelector(".segno-zodiacale");

btn.addEventListener("click", function () {
  segnoZodiacale.innerHTML = "";

  const input = document.getElementById("mese-input").value;

  let nomeSegno = document.createElement("h2");
  let paragrafo = document.createElement("p");
  segnoZodiacale.appendChild(nomeSegno);
  segnoZodiacale.appendChild(paragrafo);

  if (input === "Gennaio") {
    nomeSegno.innerText = "♑" + " Capricorno";
    paragrafo.innerText =
      'Conosciuto come la "capra di mare" dello zodiaco, il Capricorno è un tipo che lavora sodo e spesso viene visto come serio e realista. Sono individui affidabili e responsabili che apprezzano il lavoro duro e il successo a lungo termine, il che li rende leader naturali ed eccellenti pianificatori. Nonostante il loro atteggiamento serio, i Capricorno possono anche essere sorprendentemente spiritosi e premurosi una volta che li si conosce meglio.';
  } else if (input === "Febbraio") {
    nomeSegno.innerText = "♒" + " Acquario";
    paragrafo.innerText = `'Spesso considerato il portatore d'acqua dello zodiaco (nonostante sia un segno d'aria), l'Acquario è un segno altamente intellettuale e innovativo, che apprezza gli stimoli intellettuali e le idee lungimiranti. Acquario è anche molto socievole e aperto, il che lo rende un ottimo giocatore di squadra e un amico che ama la propria libertà e individualità.'`;
  } else if (input === "Marzo") {
    nomeSegno.innerText = "♓" + " Pesci";
    paragrafo.innerText = `Spesso descritto come il sognatore dello zodiaco, questo segno d'acqua possiede una vivida immaginazione e spesso ha un talento creativo e artistico.

I Pesci possono essere altruisti e premurosi, a volte al punto di sacrificare i propri bisogni per il benessere degli altri. Tuttavia, può anche avere difficoltà a stabilire dei limiti e può avere la tendenza a farsi sopraffare dalle proprie emozioni.`;
  } else if (input === "Aprile") {
    nomeSegno.innerText = "♈" + " Ariete";
    paragrafo.innerText = `Gli individui Ariete sono caratterizzati da un forte senso di indipendenza e di fiducia in se stessi. Essendo un segno di fuoco, hanno una naturale inclinazione a prendere in mano le situazioni e non hanno paura di affermarsi quando perseguono i loro obiettivi.

Questa assertività li porta spesso ad essere dei pionieri, ad aprire nuove strade e a spingersi oltre i limiti in vari aspetti della vita.`;
  } else if (input === "Maggio") {
    nomeSegno.innerText = "♉" + " Toro";
    paragrafo.innerText = `Essendo un segno di terra, gli individui Toro sono noti per la loro natura pratica e affidabile. Sono spesso solidi e stabili, alla ricerca di conforto e sicurezza nella loro vita.

Con un forte apprezzamento per le cose belle della vita, apprezzano i beni materiali e amano abbandonarsi ai piaceri sensoriali.`;
  } else if (input === "Giugno") {
    nomeSegno.innerText = "♊" + " Gemelli";
    paragrafo.innerText = `I Gemelli, terzo segno d'aria dello zodiaco, si caratterizzano per la loro natura duale e la loro versatilità. I nati sotto questo segno sono noti per la loro personalità sveglia e intellettualmente curiosa, sempre alla ricerca di nuove esperienze e conoscenze.

La loro adattabilità e le eccellenti capacità di comunicazione li rendono eccellenti conversatori e farfalle sociali.`;
  } else if (input === "Luglio") {
    nomeSegno.innerText = "♋" + " Cancro";
    paragrafo.innerText = `Noti per la loro sensibilità, i segni Cancro sono profondamente intuitivi e sentimentali. Sono molto empatici e attenti, e antepongono sempre i bisogni degli altri ai propri.

I Cancro sono incredibilmente leali e protettivi nei confronti dei loro cari, creando forti legami emotivi con la famiglia e gli amici più stretti.`;
  } else if (input === "Agosto") {
    nomeSegno.innerText = "♌" + " Leone";
    paragrafo.innerText = `I Leoni vivono sotto i riflettori e hanno un talento naturale per il dramma e la creatività, che li rende artisti e performer accattivanti.

La loro natura generosa e calorosa attrae gli altri e spesso assumono un ruolo di leadership sia in ambito personale che professionale.

Con un'incrollabile fiducia in se stessi, i Leone sono spinti a raggiungere i loro obiettivi e a ispirare coloro che li circondano a fare lo stesso.`;
  } else if (input === "Settembre") {
    nomeSegno.innerText = "♍" + " Vergine";
    paragrafo.innerText = `La Vergine, segno di terra, è associata a un forte senso di responsabilità e a un approccio meticoloso alla vita.

Possiedono un'acuta mente analitica e sono eccellenti risolutori di problemi, spesso alla ricerca della perfezione in tutto ciò che fanno.

La loro natura protettiva e solidale li rende amici affidabili e lavoratori diligenti, ed eccellono nell'organizzazione e nella gestione efficiente dei compiti.`;
  } else if (input === "Ottobre") {
    nomeSegno.innerText = "♎" + " Bilancia";
    paragrafo.innerText = `La Bilancia, segno d'aria cardinale, è un segno di equilibrio, che si batte per l'equità e la giustizia. Le Bilancia sono famose per il loro fascino e la loro natura diplomatica. Hanno un talento naturale per mediare i conflitti e promuovere l'armonia nelle loro relazioni.

Governati da Venere, il pianeta dell'amore e della bellezza, i Bilancia hanno anche un forte apprezzamento per l'estetica e tendono ad avere un occhio di riguardo per l'arte e la moda.`;
  } else if (input === "Novembre") {
    nomeSegno.innerText = "♏" + " Scorpione";
    paragrafo.innerText = `Gli Scorpioni, l'ottavo segno d'acqua dello zodiaco, sono spesso associati alla loro natura intensa e passionale. Le loro emozioni sono profonde e hanno una naturale capacità di comprendere le profondità della psiche umana.

Noti per la loro incrollabile determinazione, gli Scorpioni sono implacabili nel perseguire i loro obiettivi e possono esibire un'aura misteriosa e magnetica che attira gli altri verso di loro.`;
  } else if (input === "Dicembre") {
    nomeSegno.innerText = "♐" + " Sagittario";
    paragrafo.innerText = `Gli individui del Sagittario amano le discussioni filosofiche, i viaggi e la libertà. I nati sotto questo segno sono animati dal desiderio di esplorazione e dalla sete di conoscenza.

Essendo un segno di fuoco naturale, possiedono un approccio aperto e filosofico alla vita, sempre alla ricerca di significati più profondi e di orizzonti più ampi.`;
  } else {
    alert(
      "Inserisci un mese valido, scritto in italiano e con la prima lettera maiuscola"
    );
  }
  document.getElementById("mese-input").value = "";
});
