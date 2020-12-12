---
title: Commands in a Sub-shell, Turtle Power
publish_date: 2020-10-02T03:42:12.278Z
updated: ""
description: Spawn sub-shells so you never leave your current working directory.
image: assets/razvan-narcis-ticu-mqz-tzeg8l8-unsplash.jpg
tldr: >-
  Wrap commands in parenthesis `()` to run them in a
  [sub-shell](https://www.gnu.org/software/bash/manual/bash.html#Grouping-Commands)
  without leaving your current working directory. 
  <br /><br />
  After the program exits, the sub-shell terminates, returning you to your prompt of the parent shell, in the directory you started from. | [Source](https://stackoverflow.com/questions/786376/how-do-i-run-a-program-with-a-different-working-directory-from-current-from-lin/786419#786419)


  ```shell

  $ (cd ../other-project && npm i)

  ```
tags:
  - development
  - terminal
  - workflow
  - turtle-power
---

# Overview

```toc
exclude: Overview
```

# Summary

I was trying to avoid having to change directories to run a command, then switch back to my [current working directory](https://shapeshed.com/unix-pwd/). You can run commands in sub-shells by wrap the commands in parenthesis `()`.

> The parentheses cause a sub-shell to be spawned. After the program exits, the sub-shell terminates, returning you to your prompt of the parent shell, in the directory you started from. | [Source](https://stackoverflow.com/a/786419/14342613)

# Usage

```shell
$ (cd ../other-project && npm i)
```

![Thumbs up Abed](https://media.giphy.com/media/NnSfgd2KxuP3q/giphy.gif "Thumbs up Abed")

# Example

For this example we will do the following:

1. Print the current working directory
2. Create the `../project-b` directory.
3. Change directories to `../project-b`, create a file called `hello.txt`, then write `Hello World` to it.
4. Verify that we successfully wrote to the `hello.txt` file.

We can execute these commands without actually leaving our current directory by wrapping parenthesis `()` around the commands. Because... no one want's to keep typing `cd ../` all the time. Assume we are located in the `/Development/project-a` directory.

1. Let's [print the current working directory](https://linuxize.com/post/current-working-directory/#pwd-command). Enter the following command in your terminal:

   ```bash
   $ pwd
   ```

   The output is the following:

   ```bash
   /Development/project-a
   ```

2. [Create a directory](https://linuxize.com/post/how-to-create-directories-in-linux-with-the-mkdir-command/) called `project-b`

   ```shell
   $ mkdir ../project-b
   ```

3. Next we will change directories to `project-b` and [create a file](https://linuxize.com/post/linux-touch-command/) called `hello.txt`. After we create the file we will write "Hello World" to it. Enter the following command (don't forget the parenthesis `()` around the command 😁):

   ```bash
   $ (cd ../project-b && touch hello.txt && echo "Hello World" > hello.txt)
   ```

   Notice we are still in the `/Development/project-a` directory!

4. You can display the contents of the `hello.txt` file with the [cat](https://linuxize.com/post/linux-cat-command/) command:

   ```bash
   $ cat ../project-b/hello.txt
   ```

   The output is the following:

   ```bash
   Hello World
   ```

   ![Thumbs up Troy](https://media.giphy.com/media/YcMs3OGd89Pxu/giphy.gif "Thumbs up Troy")

# Resources

**Sub-shells**

- [Subshells](https://tldp.org/LDP/abs/html/subshells.html#:~:text=A%20subshell%20is%20a%20separate,process%20a%20list%20of%20commands.)

- [Grouping Commands](https://www.gnu.org/software/bash/manual/bash.html#Grouping-Commands)
- [Linux and Unix pwd command tutorial with examples](https://shapeshed.com/unix-pwd/)

- [How do I run a program with a different working directory from current, from Linux shell?](https://stackoverflow.com/questions/786376/how-do-i-run-a-program-with-a-different-working-directory-from-current-from-lin/786419#786419)

**Commands**

- [cd](https://linuxize.com/post/linux-cd-command/)
- [pwd](https://linuxize.com/post/current-working-directory/#pwd-command)
- [mkdir](https://linuxize.com/post/how-to-create-directories-in-linux-with-the-mkdir-command/)
- [touch](https://linuxize.com/post/linux-touch-command/)
- [echo](https://linuxize.com/post/echo-command-in-linux-with-examples/)

**Photo**

- Photo by [Razvan Narcis Ticu](https://unsplash.com/@ticurazvannarcis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/)
