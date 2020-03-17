/**
 * Wait for the specified element to appear in the DOM. When the element appears, provide it to the callback.
 *
 * @param elementSelector the selector for the element (eg, 'div.container img')
 * @param callback function that takes selected element (null if timeout)
 * @param maxTries number of times to try (return null after maxTries, false to disable, if 0 will still try once)
 * @param interval milliseconds to wait between each try
 *
 * Example usage:
 * waitForElementToExist(myElementSelector, manipulateMyElementCallback, 100);
 */
function waitForElementToExist(elementSelector, callback, maxTries = false, interval = 100) {
  const elementPoller = setInterval(() => {
    const element = jQuery(elementSelector);
    const retry = maxTries === false || maxTries-- > 0
    if (retry && element.length < 1) {
      return; // try again
    }
    clearInterval(elementPoller)
    callback(element || null)
  }, interval)
}
