# InkBench

Benchmark and browser tests of [InkDOS Hub](https://inkdoshub.github.io/), served by GitHub Pages at https://inkdoshub.github.io/InkBench/ (`?bench` opens the Benchmark tab).

- `bench.js`: Geekbench-style scores, PDF with the data inside, comparison of up to 4 platforms. `v9.html`/`bench-v9.js`: the older version.
- `app.js`: full browser tests (made for XeOS on iPad).
- `aquarium/` (WebGL Aquarium, BSD-3-Clause) and `motionmark/` (WebKit, BSD-2-Clause): local copies.
- `native/`: native benchmarks for Windows (`inkbench.ps1`) and Linux (`inkbench.sh`), used by the Hub's Windows app.

Shared Hub files (theme, bar, the video app's ffmpeg-core) come from the same site.
