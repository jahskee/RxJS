const observable = Rx.Observable.from(['a', 'b', 'c', 'a', 'd', 'e' , 'b']);

observable
.distinct()
.subscribe( value => console.log(value));
