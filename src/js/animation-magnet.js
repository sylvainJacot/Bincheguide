
let mm = new MagnetMouse({
    magnet: {
      element: '.magnet',
      class: 'magnet-mouse-active',
      distance: 4,
      position: 'center'
    },
    throttle: 10, /* Time (in ms) between each eventListener calls */
    inCallback: null, /* Callback when mouse enters in the magnet effect */
    outCallback: null /* Callback when mouse leaves in the magnet effect */
  });
  
  mm.init();
