<div align="center">
	<br>
	<br>
	<h1>rlayouts</h1>
	<p>
		<b>Simple Layout Components for React</b>
	</p>
	<br>
	<br>
	<br>
</div>

# Motivation

I copy paste the same set of components for layout in almost every react project that I work on so this is going to act as a base from now. I still prefer copying the original code around to make it easier to modify and fix when needed.

You can find the web code snippets here [reaper.im/collections](https://reaper.im/collections/code)

# Installation

```sh
npm i @barelyreaper/rlayouts
#or
yarn add @barelyreaper/rlayouts
```

# Usage

I'm still writing proper docs, you can use the below type defs to understand the gist.

```ts
declare type IPadding = {
  children: React.ReactNode;
  x: number;
  y: number;
  all: number;
};

declare type ISpacer = {
  inline: boolean;
  x: number;
  y: number;
};
```

# Roadmap

- [x] Padding
- [x] Spacer
- [ ] Row
- [ ] Col
- [ ] Card

# Dev

```sh
npm i
npm run dev
```

# Build

```sh
npm run build
```
