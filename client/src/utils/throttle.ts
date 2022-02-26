export const throttle = (action: () => any, limit: number) => {
  var lastRan = Date.now();

  return function() {
    var time = Date.now();

    // Only perform the action if a certain amount of time has passed since previous action
    if ((time - lastRan) >= limit) {
      lastRan = time;
      action.apply(null, arguments);
    }
  };
}

export const throttleSaveLastAction = (action: () => any, limit: number) => {
  let lastAction: NodeJS.Timeout;
  let lastRan: number;

  return function () {
    const args = arguments;
    
    if (!lastRan) {
      // The first action is executed immediately
      action.apply(null, args);
      lastRan = Date.now();
    } else {
      // The last action is rescheduled to after the limit period
      clearTimeout(lastAction);
      lastAction = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          action.apply(null, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
