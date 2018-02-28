
class Movie {
  
  constructor(title,year,duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play(){console.log('PLAY')}
  pause(){console.log('PAUSE')}
  resume(){console.log('RESUME')}
}


var film_1 = new Movie('film_1',2015,190);
var film_2 = new Movie('film_2',2016,160);
var film_3 = new Movie('film_3',2016,130);


class Actor {
  
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  
}

class EventEmitter{
  
  constructor(){}
  
  on(eventName,callback){}
  emit(eventName){}
  off(eventName,callback){}
  
}