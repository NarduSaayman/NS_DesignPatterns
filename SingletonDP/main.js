import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Singleton!</h1>
`
function HailMedivhAtKarazhan(){
  let KarazhanInstance = null; // Karazhan is the big mage tower

  // track how many instances of Karazhan exists
  let count = 0

  function init(){
    console.log(`Opening Karazhan ley line #${count + 1}`);
    document.querySelector('#app').innerHTML += `<p>Opening Ley Line #${count + 1}</p>`;
    // now go and speak with Medivh about the horbile things befalling Azeroth
  }

  function createKarazhanInstance(){
    if(KarazhanInstance == null){
      KarazhanInstance = init();
    }
    return KarazhanInstance;
  }
  function closeKarazhanInstance(){
    console.log(`Closing ley line`);
    document.querySelector('#app').innerHTML += `<p>Closing Ley Line</p>`;
    KarazhanInstance = null;
  }
  return{
    openLeyline: createKarazhanInstance,
    closeLeyLine: closeKarazhanInstance
  }
}

const Karazhan = HailMedivhAtKarazhan();
Karazhan.openLeyline(); // Open ley line #1
Karazhan.openLeyline(); // Open ley line #2
Karazhan.openLeyline(); // Open ley line #3
Karazhan.closeLeyLine(); // Close ley line
Karazhan.openLeyline(); // Open ley line #4
Karazhan.openLeyline(); // Open ley line #5
Karazhan.closeLeyLine(); // Close ley line again
