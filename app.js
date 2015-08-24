// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
  this.player1 = new Player(1);

  //Do the same for a player 2
  //this.player2 = ...
  this.player2 = new Player(2);

  //Create the track
  //this.track = ...
  // this.track = new Track();
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  // grab player1 and player2 from the DOM
  // (look for element with id='p1' etc)
  $player1 = $('#car1');
  $player2 = $('#car2');

  $(document).keyup(function(event) {
    if (event.which === 80) {
      $player1.animate({'margin-left': '+=30px'}, "fast");   
    }
    else if (event.which === 90) {
      $player2.animate({'margin-left': '+=30px'}, "fast");
    }
  })
};

// A starter Player constructor.
function Player(name) {
  //this.name = ...
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  $(".first_player").animate({left: "+=30px"}, "fast")

};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
$(document).ready(function() {
  $(".play_key").hide()
  var game = new Game();
  game.init();
});
