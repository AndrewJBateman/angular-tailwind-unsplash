# :zap: Angular Tailwind Unsplash

* Angular 11 app using [Tailwindcss](https://developers.google.com/chart/) components to display images from the [Unsplash Images API](https://unsplash.com/developer)

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-tailwind-unsplash?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/AndrewJBateman/angular-tailwind-unsplash?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-tailwind-unsplash?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-tailwind-unsplash?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AndrewJBateman/angular-tailwind-unsplash?style=for-the-badge)

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Tailwind Unsplash](#zap-angular-tailwind-unsplash)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* About and Contact pages give more information on app using Tailwind css cards
* To build for production Tailwind’s purge option is used to tree-shake unused styles and optimize final build size.
* [rxjs take(1) operater](https://advancedweb.hu/rxjs-the-differences-between-first-take-1-and-single/) used to take first element from the Unsplash & Github observable streams then close them, so unsubscribing is not necessary.

## :camera: Screenshots

![Example screenshot](./img/unsplash.png)
![Example screenshot](./img/home.jpg)
![Example screenshot](./img/about.jpg)
![Example screenshot](./img/contact.jpg)

## :signal_strength: Technologies

* [Angular framework v11](https://angular.io/)
* [Reactive Extensions Library for Javascript rxjs v6](https://rxjs.dev/)
* [Tailwindcss v2](https://tailwindcss.com/) CSS framework
* [Angular PWA](https://angular.io/guide/service-worker-getting-started)

## :floppy_disk: Setup

* Run `npm i` to install dependencies.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run build` for a production build with css purging.
* Run `http-server` to view build on an apple/android phone or simulator (pick 2nd http address supplied)
* The build artifacts will be stored in the `dist/angular-tailwind-ratp` directory.

## :wrench: Testing

* Run `ng lint` to lint all files using tslint
* Run `ng test` to run Jasmine unit tests via [Karma](https://karma-runner.github.io). Currrently 9/9 tests pass
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Currently 0 tests so all pass

## :computer: Code Examples

* `photo.service.ts` - code to fetch Unsplash photo data and return it

```typescript
this.photoData = this.http
  .get(
    `${this.baseUrl}/photos/random?query=butterflies&orientation=squarish`,
    httpOptions
  )
  .pipe(
    tap((data: any) => console.log('photodata: ', data)),
    take(1),
    share(),
    catchError((err) => {
      return throwError(err);
    })
  ) as Observable<IUnsplashResponse>;
return this.photoData;
```

## :cool: Features

* The Github API does not require an API key
* Lazy-loading of about and contact pages
* Tailwind build for production css purge results in a very small styles bundle (xxxkB latest)

## :clipboard: Status & To-Do List

* Status: In work
* To-Do: add pwa, tests, publish

## :clap: Inspiration

* [Angular Architects: article: Extending the Angular CLI’s build process without ejecting](https://www.angulararchitects.io/aktuelles/extending-the-angular-clis-build-process/)
* [StackOverflow: How to solve semi-colon expected css(css-semicolonexpected)](https://stackoverflow.com/questions/61443484/how-to-solve-semi-colon-expected-csscss-semicolonexpected)
* [dev.to: Setup TailwindCSS in Angular the easy way](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)
* [LogRocket: Types vs. interfaces in TypeScript](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
