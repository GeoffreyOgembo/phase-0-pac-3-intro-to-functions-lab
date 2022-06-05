function shout(string) {
    console.log(shout('hello'.toUpperCase()));
  }
  logShout('hello');

function logWhisper(string) {
    console.log(whisper('HELLO'.toLowerCase()));
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return ("I can't hear you!");
    }
    else if(string=== string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string==="Let`s have dinner togather!") {
        return "I would love to!";
        
    }