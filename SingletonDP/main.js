import './style.css'

document.querySelector('#app').innerHTML = `<h1>Hello Singleton!</h1>`

// Karazhan Ley Line Example
document.querySelector('#app').innerHTML += `<h1>Karazhan Ley Line Example:<h1>`;

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
console.log(`%c Karazhan Example`,`color: aqua; font-size:30px`);
Karazhan.openLeyline(); // Open ley line #1
Karazhan.openLeyline(); // Open ley line #1
Karazhan.openLeyline(); // Open ley line #1
Karazhan.closeLeyLine(); // Close ley line
Karazhan.openLeyline(); // Open ley line #1
Karazhan.openLeyline(); // Open ley line #1
Karazhan.closeLeyLine(); // Close ley line again

// Database Connection Example:
document.querySelector('#app').innerHTML += `<h1> Database Example<h1>`;

function DatabaseConnection(){
  let DatabaseInstance = null;

  // track how many instances of the databse exists
  let count = 0

  function init(){
    console.log(`Opening connection #${count + 1}`);
    document.querySelector('#app').innerHTML += `<p>Opening connection #${count + 1}</p>`;
    // now go and do databasy things
  }

  function createInstance(){
    if(DatabaseInstance == null){
      DatabaseInstance = init();
    }
    return DatabaseInstance;
  }
  function closeInstance(){
    console.log(`Closing database connection`);
    document.querySelector('#app').innerHTML += `<p>Closing database connection</p>`;
    DatabaseInstance = null;
  }
  return{
    open: createInstance,
    close: closeInstance
  }
}

const database = DatabaseConnection();
console.log(`%c Database Example`,`color: red; font-size:30px`);
database.open();
database.open();
database.close();
database.open();
database.close();
database.open();
database.open();
database.open();
database.open();
database.close();