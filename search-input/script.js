const name = document.getElementById('name');
const observable = Rx.Observable.fromEvent(name, 'input');

observable
.debounceTime(500)
.distinctUntilChanged()
.subscribe( value => console.log(value.target.value))