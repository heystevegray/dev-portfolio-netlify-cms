---
title: Execute commands in other directories
publish_date: 2020-09-27T04:56:25.959Z
updated: ""
description: Spawn sub-shell's so you never leave your current working directory.
image: assets/razvan-narcis-ticu-mqz-tzeg8l8-unsplash.jpg
tldr: >-
  Wrap commands in parenthesis `()` to run them in a
  [sub-shell](https://www.gnu.org/software/bash/manual/bash.html#Grouping-Commands)
  without leaving your current working directory. 


  > After the program exits, the sub-shell terminates, returning you to your prompt of the parent shell, in the directory you started from. | [Source](https://stackoverflow.com/questions/786376/how-do-i-run-a-program-with-a-different-working-directory-from-current-from-lin/786419#786419)


  ```shell

  $ (cd ../other-project && npm i)

  ```
tags:
  - development
  - terminal
  - workflow
---
# Overview

```toc
exclude: Overview
```

# Summary

I was trying to avoid having to `cd` to one directory, run a command, and switch back to my [current working directory](https://shapeshed.com/unix-pwd/).

# Usage

You can run commands in other directories without leaving your current working directory, by wrapping the commands in parenthesis `()`.

```shell
$ (cd ../other-project && npm i)
```

> The parentheses cause a sub-shell to be spawned | [Source](https://stackoverflow.com/a/786419/14342613)

![Thumbs up Abed](https://media.giphy.com/media/NnSfgd2KxuP3q/giphy.gif "Thumbs up Abed")

# Example

For this example we will create and write to a file in a different directory than our current one. We will wrap parenthesis `()` around the command so that we don't actuallly have to change directories, becuase.. no one wan'ts to keep typing `cd ../` all the time.

1. Le'ts [print the current working directory](https://linuxize.com/post/current-working-directory/#pwd-command). Enter the following command in your terminal:

   ```bash
   $ pwd
   ```

   The output is the following:

   ```bash
   /Development/project-a
   ```
2. Next we will change directories to `project-b` and create a file called `hello.txt`. After we create the file we will write "Hello World" to it. Enter the following command (don't forget the parenthesis `()` around the command 😁):

   ```bash
   $ (cd ../project-b && touch hello.txt && echo "Hello World" > hello.txt)
   ```
3. You can display the contents of the hello.txt file with the [cat](https://linuxize.com/post/linux-cat-command/) command:

   ```bash
   $ cat ../project-b/hello.txt
   ```

   The output is the following:

   ```bash
   Hello World
   ```

   ![Thumbs up Troy](https://media.giphy.com/media/YcMs3OGd89Pxu/giphy.gif "Thumbs up Troy")

# Resources

* Subshells

  * [How do I run a program with a different working directory from current, from Linux shell?](https://stackoverflow.com/questions/786376/how-do-i-run-a-program-with-a-different-working-directory-from-current-from-lin/786419#786419)
  * [Current working directory](https://shapeshed.com/unix-pwd/)
  * [Subshells](https://tldp.org/LDP/abs/html/subshells.html#:~:text=A%20subshell%20is%20a%20separate,process%20a%20list%20of%20commands.)
  * [Grouping Commands](https://www.gnu.org/software/bash/manual/bash.html#Grouping-Commands)
* Commands

  * [cd](https://linuxize.com/post/linux-cd-command/)
  * [pwd](https://linuxize.com/post/current-working-directory/#pwd-command)
  * [mkdir](https://linuxize.com/post/how-to-create-directories-in-linux-with-the-mkdir-command/)
  * [touch](https://linuxize.com/post/linux-touch-command/)
  * [echo](https://linuxize.com/post/echo-command-in-linux-with-examples/)
* Photo by [Razvan Narcis Ticu](https://unsplash.com/@ticurazvannarcis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/)