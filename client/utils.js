export const scoreKeeper = (activeNotes, answerNotes) => {
  if (activeNotes === answerNotes) {
    return 1
  } else if (activeNotes) {
    return -0.5
  }
}
