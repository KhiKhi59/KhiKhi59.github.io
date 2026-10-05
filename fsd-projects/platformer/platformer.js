$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 200, 400, 20, "yellow");
    createPlatform(430, 530, 200, 20, "blue");
    createPlatform(730, 400, 300, 20, "red");
    createPlatform(1030, 300, 400, 20, "grey");
    createPlatform(500, 199, 759, 20, "seagreen");
    createPlatform(500, 0, 20, 290, "orange");
    createPlatform(700, 650, 500, 30, "purple");
    createPlatform(800, 600, 20, 400, "brown");
    createPlatform(1300, 710, 200, 200, "white")
    createPlatform(1300, 600, 20, 400, "cyan");
    createPlatform(0, 700, 300, 30);
    createPlatform(300, 400, 20, 400, "cyan");
    createPlatform(110, 580, 190, 30, "green" );
    createPlatform(0, 450, 190, 30, "green" );

    // TODO 3 - Create Collectables
    createCollectable("database", 510, 90);
createCollectable("database", 1310, 690, 170);
createCollectable("database", 250, 650)


    // TODO 4 - Create Cannons
    createCannon("left", 680, 0);
createCannon("right", 300, 2000);
createCannon("top", 700,1000);
createCannon("top",450, 1500)
createCannon("top", 860, 1900)
createCannon("right",161, 1600)
createCannon("left",490, 2009)
createCannon("top", 250, 800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
