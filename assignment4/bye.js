(function(window){
    // STEP 2: Wrap the entire contents of Speakbye.js inside of an IIFE
    // See Lecture 52, part 2


    // STEP 3: Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    var byeSpeaker = {};

    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWrd = "Good Bye";

    // STEP 4: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    byeSpeaker.speak = function (name) {
      console.log(speakWrd + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

    // STEP 5: Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    // See Lecture 52, part 2
    // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
    // xxxx.xxxx = byeSpeaker;

  }
)(window);