[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Cm11w/the-one-line-laugh-v2/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Cm11w/the-one-line-laugh-v2/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

# The One-Line Laugh (v2)

One original funny line, written by a program. Entry for the
[make.fun bounty](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
"The One-Line Laugh" ($5 prize pool).

## The line

> My AI therapist told me to set boundaries, so I blocked it.

59 characters, one sentence. The patient takes the therapist's advice
literally — and applies it to the therapist itself.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line to
`/output/entry.txt`, deterministically — every run produces the same bytes.
A guard inside the program refuses to write anything that would fail the
gate (must be 1–200 characters, not only whitespace, exactly one line).

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
