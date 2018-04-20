const name = document.getElementById('name');
const observable = Rx.Observable.fromEvent(name, 'input');

observable
.map(event => event.target.value)
//.pluck('target', 'value')
.debounceTime(500)
.distinctUntilChanged()
.subscribe( value => console.log(value))