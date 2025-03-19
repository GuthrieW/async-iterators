<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GuthrieW/async-iterators">
    <img src="images/icon-and-name.png" alt="Logo" >
  </a>

<h3 align="center">Async Iterators</h3>

  <p align="center">
    A TypeScript library of asynchronous array functions with Promise compatibility.
    <br />
    <br />
    <a href="https://github.com/GuthrieW/async-iterators/documentation.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/GuthrieW/async-iterators">View Demo</a> -->
    <!-- &middot; -->
    <a href="https://github.com/GuthrieW/async-iterators/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/GuthrieW/async-iterators/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Feature Requests & Bug Reports</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Native JavaScript array loops such as [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]) are incompatible with Promises. Writing asynchronous within a `map`, even if wrapped in `Promise.all` will result in inconsistent behavior.

For example, if we want to fetch three dad jokes by ID from the `icanhazdadjoke` web API then we unfortunately cannot maintain the order of the IDs in our response. Using `map` from `async-iterators` will maintain order.

```ts
await Promise.all(
  ["0ga2EdN7prc", "4EBsPZvP7h", "xHQucUvszd"].map(async (jokeId, index) => {
    await fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(`Joke #${index}: ${json.joke}`));
  })
);
// Order of the logs is not guaranteed.
// Joke #1: Some people eat light bulbs. They say it's a nice light snack.
// Joke #2: To the guy who invented zero... thanks for nothing.
// Joke #0: How come the stadium got hot after the game? Because all of the fans left.
```

```ts
import { map } from "async-iterators";

await map(
  ["0ga2EdN7prc", "4EBsPZvP7h", "xHQucUvszd"],
  async (jokeId, index) => {
    await fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(`Joke #${index}: ${json.joke}`));
  }
);
// Order is guaranteed.
// Joke #0: How come the stadium got hot after the game? Because all of the fans left.
// Joke #1: Some people eat light bulbs. They say it's a nice light snack.
// Joke #2: To the guy who invented zero... thanks for nothing.
```

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### Built With

[![Node.js][Node.js]][Node-url]
[![TypeScript][TypeScript]][TypeScript-url]

<!-- GETTING STARTED -->

## Getting Started

### Installation

This package has no dependencies and never will. Simply install the NPM package and you're ready to use it!

#### Clone the repo

```sh
git clone https://github.com/GuthrieW/async-iterators.git
```

#### Install NPM packages

##### NPM

```sh
npm install async-iteraors
```

##### Yarn

```sh
yarn add async-iterators
```

<!-- USAGE EXAMPLES -->

## Usage

_For more examples, please refer to the [documentation](https://github.com/GuthrieW/async-iterators/documentation.md)_

## Feature Requests & Bug Reports

See the [open issues](https://github.com/GuthrieW/async-iterators/issues) for a full list of proposed features (and known issues).

Please consider contributing to the project if you open an issue!

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/GuthrieW/async-iterators/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GuthrieW/async-iterators" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Wesley Guthrie - [@twitter_handle](https://twitter.com/twitter_handle) - wesleyeguthrie@gmail.com

Project Link: [https://github.com/GuthrieW/async-iterators](https://github.com/GuthrieW/async-iterators)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Gregory Spicer](https://github.com/littlespice33) and [Joshua Sarna](https://github.com/joshsarna) for both introducing me to this issue and working on solutions together

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/GuthrieW/async-iterators.svg?style=for-the-badge
[contributors-url]: https://github.com/GuthrieW/async-iterators/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GuthrieW/async-iterators.svg?style=for-the-badge
[forks-url]: https://github.com/GuthrieW/async-iterators/network/members
[stars-shield]: https://img.shields.io/github/stars/GuthrieW/async-iterators.svg?style=for-the-badge
[stars-url]: https://github.com/GuthrieW/async-iterators/stargazers
[issues-shield]: https://img.shields.io/github/issues/GuthrieW/async-iterators.svg?style=for-the-badge
[issues-url]: https://github.com/GuthrieW/async-iterators/issues
[license-shield]: https://img.shields.io/github/license/GuthrieW/async-iterators.svg?style=for-the-badge
[license-url]: https://github.com/GuthrieW/async-iterators/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/Node.js-grey?style=for-the-badge&logo=node.js
[Node-url]: https://nodejs.org
[TypeScript]: https://img.shields.io/badge/TypeScript-grey?style=for-the-badge&logo=typescript
[TypeScript-url]: https://www.typescriptlang.org/
