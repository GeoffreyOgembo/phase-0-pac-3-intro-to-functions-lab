function shout(string) {
    console.log(shout('hello'.toUpperCase()));
  }
  logShout('hello');

function logWhisper(string) {
    console.log(whisper('HELLO'.toLowerCase()));
}
logWhisper('HELLO');

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return ("I can't hear you!");
        