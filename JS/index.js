window.onload = () => {
  
  let gameOver = false;// esta afirmacion se comunica con startGame
  //cuando cargue la pagina ...


  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  //referenciamos el elemento html, le asignamos un contexto y lo asignamos a la constante ctx(contexto por convencion).

  let gameInterval = null; //

  let lunarBackgroundImg = new Image();
  lunarBackgroundImg.src = "styles/resources/280531.jpg";

  const lunarBackground = {
    image: lunarBackgroundImg,
    x: 0,
    y: 0,
    height: canvas.height,
    width: canvas.width,
    draw: function () {
      // console.log("DRAWING BACKGROUND");
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
  };

  let youWinImg = new Image();
  youWinImg.src = "styles/resources/youwin.jpeg"

  const youWin = {
    image: youWinImg,
    x: 0,
    y: 0,
    height: canvas.height,
    width: canvas.width,
    draw: function () {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
  };  

  let earthlingImg = new Image();
  earthlingImg.src = "styles/resources/earthlingrighttrim.png";

  const earthling = {
    image: earthlingImg,
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 - 100,
    height: 350,
    width: 90,
    lives: 2500,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
  };

  let terrGlobeImg = new Image();
  terrGlobeImg.src = "styles/resources/terrestrialGlobe.png";

  const terrGlobe = {
    image: terrGlobeImg,
    x: canvas.width / 5 - 160,
    y: canvas.height / 2 - 780,
    height: 200,
    width: 200,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 780;
        this.x = Math.floor(Math.random() * canvas.width);
      } else {
        this.y += 1;
      }
    },
  };

  let bookOneImg = new Image();
  bookOneImg.src = "styles/resources/oldBook1 (1).png";

  const bookOne = {
    image: bookOneImg,
    x: canvas.width / 4 - 180,
    y: canvas.height / 2 - 780,
    height: 200,
    width: 200,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 780;
        this.x = Math.floor(Math.random() * canvas.width);
      } else {
        this.y += 1;
      }
    },
  };

  let bookTwoImg = new Image();
  bookTwoImg.src = "styles/resources/oldBook2.png";

  const bookTwo = {
    image: bookTwoImg,
    x: canvas.width / 2 - 160,
    y: canvas.height,
    height: 150,
    width: 150,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 780;
        this.x = Math.floor(Math.random() * canvas.width);
      } else {
        this.y += 1;
      }
    },
  };

  let bookThreeImg = new Image();
  bookThreeImg.src = "styles/resources/oldBook3.png";

  const bookThree = {
    image: bookThreeImg,
    x: canvas.width / 1 - 600,
    y: canvas.height / 2 - 830,
    height: 175,
    width: 150,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 830;
        this.x = Math.floor(Math.random() * canvas.width);
      } else {
        this.y += 1;
      }
    },
  };

  let pithaRightImg = new Image();
  pithaRightImg.src = "styles/resources/pithagoras OK.png";

  const pithaRight = {
    image: pithaRightImg,
    x: canvas.width / 1 - 400,
    y: canvas.height / 2 - 800,
    height: 225,
    width: 150,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 800;
        this.x = Math.floor(Math.random() * canvas.width);
      } else {
        this.y += 1;
      }
    },
  };

  let pithaLeftImg = new Image();
  pithaLeftImg.src = "styles/resources/pithagoras OK2.png";

  const pithaLeft = {
    image: pithaLeftImg,
    x: canvas.width / 1 - 500, //  2100/1-500
    y: canvas.height / 2 - 800,
    height: 175,
    width: 125,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        objects.splice(this, 1);
        this.y = canvas.height / 2 - 800; //resetear posicion vertical
        this.x = Math.floor(Math.random() * canvas.width); //randomizar horizontal
      } else {
        this.y += 1;
      }
    },
  };

  let appleImg = new Image();
  appleImg.src = "styles/resources/appletrim.png";

  const apple = {
    image: appleImg,
    x: canvas.width / 1 - 500, //  2100/1-500
    y: canvas.height / 2 - 800,
    height: 100,
    width: 100,
    draw: function () {
      //(ctx.fillStyle = "white"),
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    move: function () {
      if (this.y > canvas.height) {
        this.y = canvas.height / 2 - 800; //resetear posicion vertical
        this.x = Math.floor(Math.random() * canvas.width); //randomizar horizontal
      } else {
        this.y += 1 / 10;
      }
    },
  };

  let randomObject;
  let objectArr = [];
  let objects = [];
  var myMusicApple = new Audio("styles/resources/mixkit-retro-game-notification-212.wav");

  function detectAppleCollision(earthling, apple) {
    let collision =
      earthling.x < apple.x + apple.width &&
      earthling.x + earthling.width > apple.x &&
      earthling.y < apple.y + apple.height &&
      earthling.y + earthling.height > apple.height;

    let earthlingLivesNode = document.getElementById("score-counter");
    earthlingLivesNode.textContent = String(Math.floor(earthling.lives));

    if (collision) {
      earthling.lives += 1 / 50;
      myMusicApple.play();
    }
  }
  var myMusicSlap = new Audio("styles/resources/slap-effects.mp3");
  //var MyMusicTrombon = new Audio("/styles/resources/Sad-Trombone-A1-www.fesliyanstudios.com.mp3")

  function detectCollision(earthling, object) {
    let collision =
      earthling.x < object.x + object.width &&
      earthling.x + earthling.width > object.x &&
      earthling.y < object.y + object.height &&
      earthling.y + earthling.height > object.height;

    let earthlingLivesNode = document.getElementById("score-counter");
    earthlingLivesNode.textContent = String(earthling.lives);

    if (collision) {
      earthling.lives -= 1;
      myMusicSlap.play();
      //let earthlingLivesRemaining
      //earthlingLivesRemaining = parseInt(earthlingLivesNodeText) - 1;
      //earthlingLivesNode.textContent = earthlingLivesRemaining.toString()

      if (earthling.lives < 0) {
        //MyMusicTrombon.play()
        myMusicSlap.pause()
        myMusic.pause()
        MyMusicYuhu.pause()
        gameOver = true;
      }

      //alert(`crash ${collision} on ${earthling.x} ${earthling.y} ${object.x} ${object.y}`)
    }
  }
  var MyMusicYuhu = new Audio("styles/resources/mario-bros-woo-hoo.mp3");


  document.getElementById("start-button").onclick = () => {
    startGame();
    MyMusicYuhu.play();
    timeCounter()

    setInterval(function () {
      //cada intervalo dado se ejecuta lo que este dentro de este bloque.

      objectArr = [
        terrGlobe,
        bookOne,
        bookTwo,
        bookThree,
        pithaLeft,
        pithaRight,
      ]; //array donde tenemos los objetos.

      randomObject = objectArr[Math.floor(Math.random() * objectArr.length)]; //asignamos los objetos de manera aleatoria a un array vacio, randomObject.
      objects.push(randomObject); //vamos metiendo objetos en el array objects.
    }, 250);
  };
  
    let timeRemaining = 90
    let timeNode = document.getElementById("time-counter");
    
function timeCounter() {
    setInterval(() => {
        timeRemaining--;
        console.log(timeNode.innerHTML)
        if(timeRemaining > -1){
        timeNode.innerHTML = String(timeRemaining);
        return timeRemaining; 
        }else{
            //youWinImg.draw()
            clearInterval()
        }          
    }, 1000);   
}

 
  var myMusic = new Audio("styles/resources/Django-Reinhardt-Chicago.mp3");
  //|| timeRemaining == 0
function startGame() {
    if (gameOver) {
        cancelAnimationFrame(gameInterval); 
       // youWinImg.draw()
        window.location.reload()  
      alert("GAME OVER, YOU WIN!!!");  
    }else{
      gameInterval = requestAnimationFrame(startGame);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lunarBackground.draw();
    earthling.draw();
    objects.forEach((object) => {
      //loopeamos el array donde se van metiendo los objetos y los dibujamos y movemos.
      object.move();
      object.draw();
      apple.move();
      apple.draw();
      detectCollision(earthling, object);
      detectAppleCollision(earthling, apple);
    });
    myMusic.play();
}

  window.addEventListener("keydown", moveEarthling);

  function moveEarthling(event) {
    if (event.target.localName != "input") {
      //this prevents for the default use of the up/down arrows to affect the use when in game.
      switch (event.keyCode) {
        case 38: //up
          event.preventDefault(); //this prevents the default arrow key behavior
          if (earthling.y > 0) {
            earthling.y -= 25;
          } else {
            earthling.y = 0;
          }
          break;
        case 40: //down
          event.preventDefault(); //this prevents the default arrow key behavior
          if (earthling.y < canvas.height - earthling.height) {
            earthling.y += 25;
          } else {
            earthling.y = canvas.height - earthling.height;
          }

          break;
        case 39: //right
          event.preventDefault();
          earthlingImg.src = "styles/resources/earthlingrighttrim.png";
          if (earthling.x < canvas.width - earthling.width) {
            earthling.x += 35;
          } else {
            earthling.x = canvas.width - earthling.width;
          }
          break;
        case 37: //left
          event.preventDefault();
          earthlingImg.src = "styles/resources/earthlinglefttrim.png";
          if (earthling.x > 0) {
            earthling.x -= 35;
          } else {
            earthling.x = 0;
          }
          break;
      }
    }
  }
};
