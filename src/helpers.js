const getMinutesAndSecondsFromDurationInSeconds = (durationInSeconds) => {
  const minutesLeft = Math.floor(durationInSeconds / 60);
  const secondsLeft = Math.floor(durationInSeconds % 60);
  return [minutesLeft, secondsLeft];
};

// eslint-disable-next-line import/prefer-default-export
export { getMinutesAndSecondsFromDurationInSeconds };
