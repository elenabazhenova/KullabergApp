require('./indexB.html');
require('./mapsB.html');
require('./poiB.html');
// require('offline-plugin/runtime').install();

// 888     888               888          888                     
// 888     888               888          888                     
// 888     888               888          888                     
// 888     888 88888b.   .d88888  8888b.  888888 .d88b.  .d8888b  
// 888     888 888 "88b d88" 888     "88b 888   d8P  Y8b 88K      
// 888     888 888  888 888  888 .d888888 888   88888888 "Y8888b. 
// Y88b. .d88P 888 d88P Y88b 888 888  888 Y88b. Y8b.          X88 
//  "Y88888P"  88888P"   "Y88888 "Y888888  "Y888 "Y8888   88888P' 
//             888                                                
//             888                                                
//             888                                                



const runtime = require('offline-plugin/runtime');

runtime.install({
  onUpdating: () => {
    Materialize.toast('New version available. Downloading...', 120000, 'rounded');
  },
  onUpdateReady: () => {
    Materialize.toast('Update ready. Reload site...', 300000, 'rounded');
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    Materialize.toast('New version ready. Reload site...', 300000, 'rounded');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    Materialize.toast('Update failed. Reload site...', 300000, 'rounded');
  }
});
