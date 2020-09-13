---
title: Launch GitKraken from your terminal
publish_date: 2020-09-13T20:27:34.760Z
updated: ""
description: Use an alias to open your repository in GitKraken.
image: assets/silviu-beniamin-tofan-fqmfkui-wyo-unsplash.jpg
tags:
  - development
  - git
  - gitkraken
  - alias
  - terminal
  - workflow
  - zsh
---
# Overview

```toc
exclude: Overview
```

# Summary

I prefer to use [GitKraken](https://gitkraken.com/) for managing my repositories. However, it's gotten to the point where it's way too much work to open the GitKraken app, and then select my recent repository. I found a faster way to do it thought the terminal with the following command:

> `open -a "GitKraken" --args -p $(pwd)`

[Source](https://gist.github.com/dersam/0ec781e8fe552521945671870344147b#gistcomment-2131114)

Since we both already forgot that, let's create an [alias](https://linuxize.com/post/how-to-create-bash-aliases/) so that we can open our repository in GitKraken with a single command: `kraken`. An alias is basically a custom command that runs another command. It's used when you are to ~~lazy~~ smart to type out a longer command that you use frequently.

# Usage

## Terminal

Create a custom alias named `kraken` by typing the following in your terminal:

```bash
alias kraken='open -a "GitKraken" --args -p $(pwd)'
```

[Source](https://gist.github.com/dersam/0ec781e8fe552521945671870344147b#gistcomment-2131114)

To list your aliases, just type the `alias` command:

```bash
alias
kraken='open -a "GitKraken" --args -p $(pwd)'
```

[Source](https://askubuntu.com/a/102094)

You can delete your alias with the `unalias` command:

```bash
unalias kraken
```

[Source](https://askubuntu.com/a/325380)

## Persisting aliases (configuration file)

You may notice the above method doesn't persist your alias after you close the terminal. To [persist your alias](https://stackoverflow.com/a/29853849), you need to add it to your terminal's configuration file. I'm using [zsh](https://ohmyz.sh/), so I will add the following line to my `~/.zshrc` file:

```bash
alias kraken='open -a "GitKraken" --args -p $(pwd)'
```

For bash terminals, you can add this command to your `~/.bash_profile` (for Mac) or `~/.bashrc` files. If you are not sure what terminal you are using you can check with the following command:

```bash
echo "$SHELL"
/bin/zsh
```

# Example

Once you have created the alias, navigate to your repository and run the `kraken` command.

```bash
cd Development/my-project
kraken
```

This should launch your repository in a new tab in GitKraken! 😎

# Resources

* [git](https://git-scm.com/)
* [GitKraken](https://gitkraken.com/)
* [Open GitKraken using the current repo directory in the cli](https://gist.github.com/dersam/0ec781e8fe552521945671870344147b#gistcomment-2131114)
* [How to Create Bash Aliases](https://linuxize.com/post/how-to-create-bash-aliases/)
* [Linux and Unix alias command tutorial with examples](https://shapeshed.com/unix-alias/#what-is-a-shell-alias)
* [How do I remove an alias?](https://askubuntu.com/a/325380)
* [How do I list my aliases?](https://askubuntu.com/a/102094)
* [How to set an alias in a macOS or Linux shell](https://flaviocopes.com/how-to-set-alias-shell)
* [Shell Expansion](http://linuxcommand.org/lc3_lts0080.php)
* [Oh My Zsh](https://ohmyz.sh)
* [Why doesn't .bashrc run automatically?](https://apple.stackexchange.com/a/13019)
* [How to persist an alias?](https://stackoverflow.com/questions/29790259/mac-how-to-save-alias-in-computer/29853849#29853849)

# TLDR

You can open your repository in GitKraken from your terminal's working directory with the following alias:

```bash
alias kraken='open -a "GitKraken" --args -p $(pwd)'
```

[Source](https://gist.github.com/dersam/0ec781e8fe552521945671870344147b#gistcomment-2131114)