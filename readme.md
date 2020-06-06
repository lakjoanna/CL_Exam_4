<img src="http://coderslab.pl/img/coderslab-logo.png" align="right" width="400"/>

# React - Egzamin

## Wytyczne

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań

Zadania te są testowane za pomocą **testów automatycznych**. Zwróć zatem uwagę na następujące rzeczy:

* Jeśli w treści zadania jest wspomniane, aby konkretny tekst został wpisany/zwrócony/wyśwetlony, to powinien być to **dokładnie taki sam** tekst jak w treści zadania.

* Pamiętaj również o tym, aby nazwy funkcji/komponentów były **dokładnie takie same** jak w treści zadania. 

* Zadania rozwiązuj w odpowiednich plikach **js**.

* Zawsze sprawdzaj, czy Twoje rozwiązanie działa, jeśli powoduje ono błędy w konsoli nie zostanie ocenione. W takim wypadku lepiej **zakomentuj wrażliwe części**.


## Przygotowanie
Zmodyfikujcie plik `webpack.config.js`, tak aby:

- zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `task01.js`

**Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


---

### Zadanie 1 - `js/task01.js` **(2 pkt)**

Wyrenderujcie w **funkcyjnym** komponencie ```App``` następujące elementy:
- `h1` z napisem "Hello World!",
- `span` z napisem "Ostatni Egzamin".

Elementy mają być **bezpośrednimi** dziećmi elementu głównego do którego renderujemy całą aplikację - `#app`.

---

### Zadanie 2 - `js/task02.js` **(3 pkt)**

Stwórzcie komponent **funkcyjny** `UserCard`. Ma on przez `prop` przyjmować:

- Imię `name`
- Nazwisko `surname`
- Adres ``address``
- Kod Pocztowy `postcode`
- Miejscowość `city` 


Komponent ma renderować (przykład w `HTML`):
```html
<div class="card">
  <div>
    <h5>{Imię} {Nazwisko}</h5>
    <div>{Adres}</div>
    <div>{Kod Pocztowy} {Miejscowość}</div>
  </div>
</div>
```

Imię, nazwisko, adres, i miejscowość mają być **niepustymi stringami**. Kod pocztowy ma się składać z **dokładne 5 lub 6 znaków**. Jeżeli którykolwiek z warunków nie jest spełniony, to wyrenderujcie (przykład w `HTML`):

```html
<div class="alert alert-danger">
  Dane są nieprawidłowe!
</div>
```

Wyrenderujcie ten komponent dla dowolnych danych. 

**Pamiętajcie o stworzeniu również funkcyjnego komponentu `App` który będzie renderował komponent do tego zadania.**

---

### Zadanie 3 - `js/task03.js` **(5.5 pkt)**

Stwórzcie komponent `Shop`. Ma on renderować dwa komponenty: `Products` i `Cart`. Ma on również przyjmować  przez `props` tablicę obiektów z produktami w formacie: 

```js
[
  {
    id: 1,
    name: "Rower"
  }
]
```

> Przykładową tablicę takich produtków znajdziecie w `js/data/products.js`. Możecie zaimportować ją do tego zadania.

Następnie przekazywać ją dalej do komponentu `Products`.

Komponent `Products` ma renderować nagłówek `h2` "Produkty" i listę `ul` z danymi produktami wraz z przyciskiem (`<button class="btn btn-primary">`) `Kup!` przy każdym z nich.

Komponent `Cart` ma wyświetlać nagłówek `h2` "Koszyk" a w liście `ul` tylko te produkty, które zostały wybrane w komponencie `Products`. Nie powinno być możliwości dodania wielokrotnie tego samego produktu.

---

### Zadanie 4 - `js/task04.js` **(4.5 pkt)**

Stwórzcie komponent `LoadingData`. Ma on renderować element (przykład `HTML`):

```html
<div class="progress">
  <div class="progress-bar" style="width: 0%"></div>
</div>
```

Pasek postępu `.progress-bar` ma być aktualizowany co `100ms` o `1%`.

Po 5 sekundach wartość `width` powinna wynosić już `100%` a cały element `.progress` zniknąć a w jego miejsce pojawić się napis w elemencie `h1`: "Dane załadowane!".

---

### Zadanie 5 - `js/task05.js` **(5 pkt)**

Stwórzcie komponent `ContactForm`. Ma on zawierać formularz z następującymi (kontrolowanymi) elementami:

- `input class="form-control"` na imię,
- `input class="form-control" type=email` na adres email, 
- `textarea class="form-control"` na treść wiadomości, 
- `button class="btn btn-primary" type="submit"` przycisk wysłania.

Kiedy formularz zostanie przesłany, to ma zostać wykonana **walidacja**:

* imię ma być **co najmniej 2 znakowym stringiem** - jeśli warunek nie jest spełniony nad fomularzem wypiszcie informację: "Pole imię musi zawierać co najmniej 2 znaki"

* e-mail ma **zawierać znak "@" i co najmniej 3 znaki**  - jeśli warunek nie jest spełniony nad fomularzem wypiszcie informację: "Pole email musi zawierać znak @ i co najmniej 3 znaki"

* wiadomość ma być **niepustym stringiem** - jeśli warunek nie jest spełniony nad fomularzem wypiszcie informację: "Pole wiadomość musi zostać uzupełnione"

Jeżeli wszystkie warunki są spełnione to wyświetl nad formularzem na zielono informację "Dziękujemy za wiadomość".


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
