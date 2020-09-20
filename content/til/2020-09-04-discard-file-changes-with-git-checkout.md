---
title: Discard file changes with git checkout
publish_date: 2020-09-04T06:53:24.054Z
updated: 2020-09-18T04:45:42.347Z
description: Revert changes that you made to your files.
image: assets/hidde-van-esch-gazronaxvsu-unsplash.jpg
tldr: |-
  You can reset changes to a file with the `git checkout` command. Make a change to a file like `src/pages/index.tsx` and save. Run `git checkout` on the same file to revert the changes.

  ```shell
  $ git checkout src/pages/index.tsx
  ```

tags:
  - development
  - git
  - gitkraken
---

## Overview

```toc
exclude: Overview
```

# Summary

I frequently discard experimental changes to files that pertain to my feature. Since I use [GitKraken](https://www.gitkraken.com/) primarily, my process is usually to just right-click, and discard the changes to a file. Today I learned that you can use `git checkout` on a file to reset it's content.

# Example

1. Make a change to a file like `src/pages/index.tsx` and save.
2. See your changes with `git status`

   ```bash
   $ git status
   ```

   The output is the following:

   ```bash
   On branch master
   Your branch is up to date with 'origin/master'.

   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   src/pages/index.tsx

   no changes added to commit (use "git add" and/or "git commit -a")
   ```

3. Run `git checkout` on the same file.

   ```shell
   $ git checkout src/pages/index.tsx
   ```

4. You will see there are no changes when you run `git status` again.

   ```shell
   $ git status
   ```

   The output is the following:

   ```shell
   On branch master
   Your branch is up to date with 'origin/master'.

   nothing to commit, working tree clean
   ```

# Resources

[git-checkout](https://git-scm.com/docs/git-checkout)
