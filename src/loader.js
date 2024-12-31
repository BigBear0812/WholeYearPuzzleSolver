
/**
 * Create a loader that spins while the program is running
 * @returns {Object} An object with two methods: start and stop
 */
export const createLoader = () => {
  // The timeout id for th interval that is started
  let intervalId;
  // The current frame being shown
  let currentFrame = 0;
  // The frames that will be shown
  const frames = ['-', '\\', '|', '/'];

  /**
   * Start the loader
   */
  const start = () => {
    intervalId = setInterval(() => {
      process.stdout.write(`\rLoading ${frames[currentFrame]}`);
      currentFrame = (currentFrame + 1) % frames.length;
    }, 100);
  };

  /**
   * Stop the loader
   */
  const stop = () => {
    clearInterval(intervalId);
    process.stdout.write('\r\x1b[K'); // Clear the line
  };

  return { start, stop };
}
