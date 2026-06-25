// Git Mastery Quiz - Questions Database
// 200+ questions across 9 topics

export const topics = {
  basics: 'Git Basics & Daily Workflow',
  mergeConflicts: 'Merge Conflicts',
  rebasing: 'Rebasing & Interactive Rebase',
  historyRewriting: 'History Rewriting',
  remoteWorkflows: 'Remote Workflows',
  recovery: 'Recovery Operations',
  branching: 'Branching Strategies',
  stashCherryPick: 'Stash & Cherry-Pick',
  debugging: 'Debugging & Bisect'
};

export const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const questions = [
  // GIT BASICS & DAILY WORKFLOW (30 questions)
  {
    id: 1,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'What command initializes a new Git repository?',
    options: ['git start', 'git init', 'git create', 'git new'],
    correct: 1,
    explanation: 'git init creates a new .git directory in your project, initializing a repository.'
  },
  {
    id: 2,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'Which command shows the current status of your working directory?',
    options: ['git info', 'git check', 'git status', 'git state'],
    correct: 2,
    explanation: 'git status displays modified files, staged changes, and untracked files.'
  },
  {
    id: 3,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'How do you stage a file called "app.js" for commit?',
    options: ['git commit app.js', 'git add app.js', 'git stage app.js', 'git prepare app.js'],
    correct: 1,
    explanation: 'git add <filename> stages changes for the next commit.'
  },
  {
    id: 4,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'What command commits staged changes with a message?',
    options: ['git save -m "message"', 'git commit -m "message"', 'git push -m "message"', 'git store -m "message"'],
    correct: 1,
    explanation: 'git commit -m "message" creates a new commit with your staged changes and descriptive message.'
  },
  {
    id: 5,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'How do you view commit history?',
    options: ['git history', 'git commits', 'git log', 'git list'],
    correct: 2,
    explanation: 'git log shows the commit history, with most recent commits first.'
  },
  {
    id: 6,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'What does "git add ." do?',
    options: ['Adds current directory only', 'Adds all files in repository', 'Adds all changes in current directory and subdirectories', 'Adds hidden files only'],
    correct: 2,
    explanation: 'git add . stages all changes (new, modified, deleted) in the current directory and all subdirectories.'
  },
  {
    id: 7,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'How do you unstage a file without losing changes?',
    options: ['git remove <file>', 'git unstage <file>', 'git reset <file>', 'git undo <file>'],
    correct: 2,
    explanation: 'git reset <file> removes the file from staging area but keeps changes in working directory.'
  },
  {
    id: 8,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'What does "git diff" show by default?',
    options: ['Staged changes', 'Uncommitted changes in working directory', 'Differences between commits', 'All changes since last commit'],
    correct: 1,
    explanation: 'git diff shows unstaged changes in your working directory compared to the staging area.'
  },
  {
    id: 9,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'How do you see staged changes before committing?',
    options: ['git diff', 'git diff --staged', 'git status -v', 'git show'],
    correct: 1,
    explanation: 'git diff --staged (or --cached) shows changes that are staged for commit.'
  },
  {
    id: 10,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'What is the difference between "git rm" and "rm" followed by "git add"?',
    options: ['No difference', 'git rm also stages the deletion', 'rm is faster', 'git rm works on committed files only'],
    correct: 1,
    explanation: 'git rm removes the file from working directory AND stages the deletion. Regular rm requires git add to stage.'
  },
  {
    id: 11,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'How do you rename a file while preserving Git history?',
    options: ['Rename file then git add', 'git rename old new', 'git mv old new', 'git move old new'],
    correct: 2,
    explanation: 'git mv preserves history and stages the rename in one command.'
  },
  {
    id: 12,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'What does "git commit --amend" do?',
    options: ['Creates new commit', 'Modifies the last commit', 'Adds to staging area', 'Merges commits'],
    correct: 1,
    explanation: 'git commit --amend modifies the most recent commit, letting you change message or add forgotten files.'
  },
  {
    id: 13,
    topic: 'basics',
    difficulty: 'Expert',
    question: 'What happens to untracked files during "git checkout <branch>"?',
    options: ['They are deleted', 'They move with you', 'They are stashed', 'Git prevents checkout'],
    correct: 1,
    explanation: 'Untracked files remain in your working directory when switching branches unless they conflict.'
  },
  {
    id: 14,
    topic: 'basics',
    difficulty: 'Expert',
    question: 'How do you partially stage changes within a file?',
    options: ['git add -p', 'git add --part', 'git add --interactive', 'Both A and C'],
    correct: 3,
    explanation: 'Both git add -p (patch mode) and git add --interactive allow staging individual hunks within files.'
  },
  {
    id: 15,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'What file specifies intentionally untracked files to ignore?',
    options: ['.gitkeep', '.gitignore', '.ignore', '.gitexclude'],
    correct: 1,
    explanation: '.gitignore lists patterns for files Git should not track (e.g., node_modules, *.log).'
  },
  {
    id: 16,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'How do you create a new branch?',
    options: ['git branch <name>', 'git create <name>', 'git new-branch <name>', 'git checkout -b <name>'],
    correct: 0,
    explanation: 'git branch <name> creates a new branch. git checkout -b <name> creates AND switches to it.'
  },
  {
    id: 17,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'What does "git log --oneline" display?',
    options: ['One commit per file', 'Compressed commit history', 'Online repository info', 'Current branch only'],
    correct: 1,
    explanation: 'git log --oneline shows abbreviated commit history with short hash and message on one line each.'
  },
  {
    id: 18,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'How do you discard all uncommitted changes in working directory?',
    options: ['git clean', 'git reset --hard', 'git checkout .', 'git restore .'],
    correct: 3,
    explanation: 'git restore . (or git checkout .) discards changes in tracked files. Use with caution!'
  },
  {
    id: 19,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'What is the HEAD pointer in Git?',
    options: ['The first commit', 'The latest commit on main', 'A reference to current commit/branch', 'The remote repository'],
    correct: 2,
    explanation: 'HEAD points to the current branch reference or commit you have checked out.'
  },
  {
    id: 20,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'How do you view changes introduced by a specific commit?',
    options: ['git log <hash>', 'git show <hash>', 'git diff <hash>', 'git commit <hash>'],
    correct: 1,
    explanation: 'git show <commit> displays the commit message and diff of changes introduced.'
  },
  {
    id: 21,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'What command lists all branches?',
    options: ['git list', 'git branch', 'git branches', 'git show-branch'],
    correct: 1,
    explanation: 'git branch lists all local branches, with * indicating the current branch.'
  },
  {
    id: 22,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'How do you switch to an existing branch?',
    options: ['git change <branch>', 'git switch <branch>', 'git move <branch>', 'git goto <branch>'],
    correct: 1,
    explanation: 'git switch <branch> (or git checkout <branch>) switches to an existing branch.'
  },
  {
    id: 23,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'What does "git branch -d <name>" do?',
    options: ['Deletes the branch safely', 'Deletes branch forcefully', 'Duplicates the branch', 'Detaches the branch'],
    correct: 0,
    explanation: 'git branch -d safely deletes a branch only if it\'s fully merged. Use -D to force delete.'
  },
  {
    id: 24,
    topic: 'basics',
    difficulty: 'Expert',
    question: 'What is the difference between .gitignore and .git/info/exclude?',
    options: ['No difference', '.git/info/exclude is not committed to repo', '.gitignore is local only', '.git/info/exclude is for remote'],
    correct: 1,
    explanation: '.gitignore is tracked by Git. .git/info/exclude works the same but is local to your repo only.'
  },
  {
    id: 25,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'How do you configure your name globally in Git?',
    options: ['git set user.name "Name"', 'git config --global user.name "Name"', 'git user.name "Name"', 'git global user.name "Name"'],
    correct: 1,
    explanation: 'git config --global user.name "Your Name" sets your name for all repositories.'
  },
  {
    id: 26,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'What does "git diff HEAD" show?',
    options: ['Staged changes only', 'All uncommitted changes', 'Committed changes', 'Remote differences'],
    correct: 1,
    explanation: 'git diff HEAD shows all changes (staged and unstaged) compared to the last commit.'
  },
  {
    id: 27,
    topic: 'basics',
    difficulty: 'Advanced',
    question: 'How do you list files in the staging area?',
    options: ['git status', 'git ls-files --staged', 'git diff --name-only --staged', 'Both B and C'],
    correct: 3,
    explanation: 'Both git ls-files --staged and git diff --name-only --staged list staged files.'
  },
  {
    id: 28,
    topic: 'basics',
    difficulty: 'Expert',
    question: 'What is a detached HEAD state?',
    options: ['Error condition', 'HEAD points to a commit instead of a branch', 'Branch without commits', 'Corrupted repository'],
    correct: 1,
    explanation: 'Detached HEAD occurs when HEAD points directly to a commit rather than a branch reference.'
  },
  {
    id: 29,
    topic: 'basics',
    difficulty: 'Intermediate',
    question: 'How do you see the last 5 commits?',
    options: ['git log -5', 'git log --max 5', 'git log -n 5', 'Both A and C'],
    correct: 3,
    explanation: 'Both git log -5 and git log -n 5 limit output to the last 5 commits.'
  },
  {
    id: 30,
    topic: 'basics',
    difficulty: 'Beginner',
    question: 'What does "git clone <url>" do?',
    options: ['Copies a remote repository', 'Creates a branch', 'Downloads commits only', 'Forks a repository'],
    correct: 0,
    explanation: 'git clone <url> creates a local copy of a remote repository with full history.'
  },

  // MERGE CONFLICTS (25 questions)
  {
    id: 31,
    topic: 'mergeConflicts',
    difficulty: 'Beginner',
    question: 'What causes a merge conflict?',
    options: ['Different file names', 'Same lines modified in different branches', 'Too many commits', 'Large files'],
    correct: 1,
    explanation: 'Merge conflicts occur when the same lines are modified differently in branches being merged.'
  },
  {
    id: 32,
    topic: 'mergeConflicts',
    difficulty: 'Beginner',
    question: 'What are the conflict markers in a file?',
    options: ['<<< === >>>', '<<<<<< ====== >>>>>>', '[[ ]] {{}}', '<conflict> </conflict>'],
    correct: 1,
    explanation: '<<<<<<< HEAD, =======, and >>>>>>> branch-name mark conflict regions.'
  },
  {
    id: 33,
    topic: 'mergeConflicts',
    difficulty: 'Beginner',
    question: 'After resolving conflicts manually, what do you do?',
    options: ['git resolve', 'git add <file> then git commit', 'git conflict-fixed', 'git merge --continue'],
    correct: 1,
    explanation: 'After resolving, stage files with git add, then complete merge with git commit.'
  },
  {
    id: 34,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'How do you abort a merge that has conflicts?',
    options: ['git merge --cancel', 'git merge --abort', 'git reset --hard', 'git checkout --ours'],
    correct: 1,
    explanation: 'git merge --abort returns to the state before the merge started.'
  },
  {
    id: 35,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'What does "git merge --no-ff" do?',
    options: ['Fast-forward merge', 'Creates merge commit even if fast-forward possible', 'Prevents conflicts', 'No function flag'],
    correct: 1,
    explanation: '--no-ff creates a merge commit even when fast-forward is possible, preserving branch history.'
  },
  {
    id: 36,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'How do you accept all changes from your current branch during conflict?',
    options: ['git checkout --ours <file>', 'git checkout --theirs <file>', 'git merge --ours', 'git accept --current'],
    correct: 0,
    explanation: 'git checkout --ours <file> accepts your current branch\'s version during a merge conflict.'
  },
  {
    id: 37,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'How do you accept all changes from the incoming branch?',
    options: ['git checkout --ours <file>', 'git checkout --theirs <file>', 'git merge --theirs', 'git accept --incoming'],
    correct: 1,
    explanation: 'git checkout --theirs <file> accepts the incoming branch\'s version.'
  },
  {
    id: 38,
    topic: 'mergeConflicts',
    difficulty: 'Expert',
    question: 'What is a "recursive" merge strategy?',
    options: ['Default strategy handling simple conflicts', 'Merges branches repeatedly', 'Only for large repos', 'Deprecated strategy'],
    correct: 0,
    explanation: 'Recursive is the default merge strategy, handling most scenarios including multiple merge bases.'
  },
  {
    id: 39,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'How do you list files with conflicts?',
    options: ['git status', 'git diff --conflicts', 'git ls-files -u', 'Both A and C'],
    correct: 3,
    explanation: 'git status shows conflicts clearly; git ls-files -u lists unmerged files technically.'
  },
  {
    id: 40,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'What does "git mergetool" do?',
    options: ['Shows merge conflicts', 'Launches configured merge tool', 'Auto-resolves conflicts', 'Lists merge strategies'],
    correct: 1,
    explanation: 'git mergetool launches a visual merge tool (like vimdiff, meld) configured in your settings.'
  },
  {
    id: 41,
    topic: 'mergeConflicts',
    difficulty: 'Expert',
    question: 'What is the "ort" merge strategy?',
    options: ['Obsolete strategy', 'New default in Git 2.33+', 'Only for rebases', 'Online resolution tool'],
    correct: 1,
    explanation: 'The "ort" strategy is the new, faster default merge strategy as of Git 2.33.'
  },
  {
    id: 42,
    topic: 'mergeConflicts',
    difficulty: 'Beginner',
    question: 'Can binary files have merge conflicts?',
    options: ['No', 'Yes, but Git cannot auto-resolve them', 'Only if small', 'Only images'],
    correct: 1,
    explanation: 'Binary files can conflict, but Git marks them as conflicted without attempting resolution.'
  },
  {
    id: 43,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'What does "<<<<<<< HEAD" represent in a conflict?',
    options: ['Incoming changes', 'Your current branch changes', 'The merge base', 'Remote changes'],
    correct: 1,
    explanation: '<<<<<<< HEAD marks the start of your current branch\'s version of the conflicted code.'
  },
  {
    id: 44,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'How do you preview a merge without executing it?',
    options: ['git merge --dry-run', 'git merge --no-commit', 'git merge --preview', 'git diff <branch>'],
    correct: 1,
    explanation: 'git merge --no-commit performs merge but stops before committing, letting you review.'
  },
  {
    id: 45,
    topic: 'mergeConflicts',
    difficulty: 'Expert',
    question: 'What is a "criss-cross merge"?',
    options: ['Invalid merge', 'Multiple merge bases exist', 'Cross-branch merge', 'Conflict resolution method'],
    correct: 1,
    explanation: 'Criss-cross merges occur when branches have been merged back and forth, creating multiple merge bases.'
  },
  {
    id: 46,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'What happens if you commit without resolving all conflicts?',
    options: ['Git auto-resolves', 'Commit is rejected', 'Creates broken commit', 'Conflicts are ignored'],
    correct: 1,
    explanation: 'Git prevents committing until all conflicts are resolved and staged.'
  },
  {
    id: 47,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'How do you configure a merge strategy?',
    options: ['git merge -s <strategy>', 'git config merge.strategy', 'git merge --strategy=<name>', 'Both A and C'],
    correct: 3,
    explanation: 'Use git merge -s <strategy> or --strategy=<name> to specify merge strategy.'
  },
  {
    id: 48,
    topic: 'mergeConflicts',
    difficulty: 'Beginner',
    question: 'What is a fast-forward merge?',
    options: ['Quick merge command', 'Branch pointer moves forward without merge commit', 'Automatic conflict resolution', 'Remote merge only'],
    correct: 1,
    explanation: 'Fast-forward moves the branch pointer forward when no divergent commits exist.'
  },
  {
    id: 49,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'How do you see the diff between conflict markers?',
    options: ['Look at file directly', 'git diff', 'git diff --ours --theirs', 'git show :1:file :3:file'],
    correct: 0,
    explanation: 'The file itself shows both versions between conflict markers. You can also use git show with stages.'
  },
  {
    id: 50,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'What are the three stages in a conflicted file?',
    options: ['Working, staged, committed', 'Base, ours, theirs', 'Current, incoming, merged', 'Local, remote, conflict'],
    correct: 1,
    explanation: 'Stage 1 = common ancestor (base), Stage 2 = ours (HEAD), Stage 3 = theirs (merging branch).'
  },
  {
    id: 51,
    topic: 'mergeConflicts',
    difficulty: 'Expert',
    question: 'How do you extract the "base" version during a conflict?',
    options: ['git show :1:filename', 'git show :base:filename', 'git checkout --base filename', 'git merge-base filename'],
    correct: 0,
    explanation: 'git show :1:filename shows the common ancestor (base) version of a conflicted file.'
  },
  {
    id: 52,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'Can you have conflicts during "git pull"?',
    options: ['No', 'Yes, pull is fetch + merge', 'Only on main branch', 'Only with --rebase'],
    correct: 1,
    explanation: 'git pull = git fetch + git merge, so merge conflicts can occur during pull.'
  },
  {
    id: 53,
    topic: 'mergeConflicts',
    difficulty: 'Advanced',
    question: 'What is rerere in Git?',
    options: ['Remote repository', 'Reuse recorded resolution of conflicts', 'Rebase reference', 'Recursive merge'],
    correct: 1,
    explanation: 'rerere (reuse recorded resolution) remembers how you resolved conflicts and can auto-apply them.'
  },
  {
    id: 54,
    topic: 'mergeConflicts',
    difficulty: 'Expert',
    question: 'How do you enable rerere?',
    options: ['git rerere enable', 'git config --global rerere.enabled true', 'git config merge.rerere true', 'Enabled by default'],
    correct: 1,
    explanation: 'git config --global rerere.enabled true activates conflict resolution recording.'
  },
  {
    id: 55,
    topic: 'mergeConflicts',
    difficulty: 'Intermediate',
    question: 'What\'s the difference between merge and rebase conflicts?',
    options: ['No difference', 'Rebase applies commits one by one', 'Merge is faster', 'Rebase has fewer conflicts'],
    correct: 1,
    explanation: 'Rebase replays commits individually, so you may resolve conflicts multiple times.'
  },

  // REBASING & INTERACTIVE REBASE (25 questions)
  {
    id: 56,
    topic: 'rebasing',
    difficulty: 'Beginner',
    question: 'What is the main purpose of git rebase?',
    options: ['Delete commits', 'Rewrite commit history linearly', 'Merge branches', 'Create tags'],
    correct: 1,
    explanation: 'Rebase moves/reapplies commits to create a linear history instead of merge commits.'
  },
  {
    id: 57,
    topic: 'rebasing',
    difficulty: 'Beginner',
    question: 'What is the basic rebase command?',
    options: ['git rebase <branch>', 'git rebase --onto', 'git rebase -i', 'git merge --rebase'],
    correct: 0,
    explanation: 'git rebase <branch> reapplies your commits on top of the specified branch.'
  },
  {
    id: 58,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'How do you start an interactive rebase for the last 5 commits?',
    options: ['git rebase -5', 'git rebase -i HEAD~5', 'git rebase --interactive 5', 'git rebase HEAD-5'],
    correct: 1,
    explanation: 'git rebase -i HEAD~5 opens interactive rebase for the last 5 commits.'
  },
  {
    id: 59,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What does "pick" mean in interactive rebase?',
    options: ['Delete commit', 'Keep commit as-is', 'Edit commit message', 'Squash commit'],
    correct: 1,
    explanation: 'pick keeps the commit unchanged in the rebased history.'
  },
  {
    id: 60,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What does "squash" do in interactive rebase?',
    options: ['Deletes commit', 'Combines commit with previous one', 'Moves commit', 'Creates tag'],
    correct: 1,
    explanation: 'squash merges the commit with the previous commit, combining their changes.'
  },
  {
    id: 61,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'How do you abort a rebase in progress?',
    options: ['git rebase --cancel', 'git rebase --abort', 'git reset --hard', 'Ctrl+C'],
    correct: 1,
    explanation: 'git rebase --abort returns to the state before rebase started.'
  },
  {
    id: 62,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What does "fixup" do in interactive rebase?',
    options: ['Like squash but discards commit message', 'Fixes merge conflicts', 'Corrects commit author', 'Reorders commits'],
    correct: 0,
    explanation: 'fixup is like squash but discards this commit\'s message, keeping only the previous message.'
  },
  {
    id: 63,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'What is the golden rule of rebasing?',
    options: ['Always rebase', 'Never rebase public/shared branches', 'Rebase before merging', 'Squash all commits'],
    correct: 1,
    explanation: 'Never rebase commits that have been pushed to shared repositories - it rewrites history.'
  },
  {
    id: 64,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'How do you continue a rebase after resolving conflicts?',
    options: ['git rebase --continue', 'git commit', 'git rebase --next', 'git add . && git rebase'],
    correct: 0,
    explanation: 'After resolving conflicts and staging, use git rebase --continue to proceed.'
  },
  {
    id: 65,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'What does "reword" do in interactive rebase?',
    options: ['Edits commit content', 'Changes commit message only', 'Removes commit', 'Merges commits'],
    correct: 1,
    explanation: 'reword lets you change the commit message without modifying commit content.'
  },
  {
    id: 66,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'What does "edit" do in interactive rebase?',
    options: ['Edit message', 'Stop at commit to amend', 'Delete commit', 'Reorder commit'],
    correct: 1,
    explanation: 'edit pauses rebase at that commit, allowing you to amend changes before continuing.'
  },
  {
    id: 67,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What is "git rebase --onto" used for?',
    options: ['Standard rebase', 'Rebase onto different base', 'Interactive rebase', 'Merge alternative'],
    correct: 1,
    explanation: 'git rebase --onto allows rebasing onto a different branch than the upstream.'
  },
  {
    id: 68,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'Can you reorder commits during interactive rebase?',
    options: ['No', 'Yes, by reordering lines', 'Only with --reorder flag', 'Only forward'],
    correct: 1,
    explanation: 'Reordering the lines in interactive rebase changes commit order.'
  },
  {
    id: 69,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What happens if you delete a line in interactive rebase?',
    options: ['Error', 'Commit is dropped', 'Commit is squashed', 'Nothing'],
    correct: 1,
    explanation: 'Deleting a commit line in the rebase file drops that commit from history.'
  },
  {
    id: 70,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'How do you split a commit during rebase?',
    options: ['Use split command', 'Use edit, then reset HEAD^', 'Use break command', 'Not possible'],
    correct: 1,
    explanation: 'Mark commit with edit, then git reset HEAD^ to unstage changes and commit them separately.'
  },
  {
    id: 71,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'What is "git pull --rebase"?',
    options: ['Same as git pull', 'Fetch and rebase instead of merge', 'Forced pull', 'Interactive pull'],
    correct: 1,
    explanation: 'git pull --rebase fetches changes and rebases your commits on top instead of merging.'
  },
  {
    id: 72,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'How do you preserve merge commits during rebase?',
    options: ['git rebase --preserve-merges', 'git rebase -p', 'git rebase --rebase-merges', 'Both A and C'],
    correct: 2,
    explanation: 'git rebase --rebase-merges (formerly --preserve-merges) maintains merge commit structure.'
  },
  {
    id: 73,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'What does "exec" command do in interactive rebase?',
    options: ['Execute commit', 'Run shell command after commit', 'Expert mode', 'Exit rebase'],
    correct: 1,
    explanation: 'exec runs a shell command after applying that commit, useful for testing.'
  },
  {
    id: 74,
    topic: 'rebasing',
    difficulty: 'Beginner',
    question: 'What is the difference between merge and rebase?',
    options: ['No difference', 'Rebase creates linear history, merge preserves branch structure', 'Rebase is faster', 'Merge is deprecated'],
    correct: 1,
    explanation: 'Merge creates a merge commit preserving branch history; rebase creates linear history.'
  },
  {
    id: 75,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'When might you need to force push after rebase?',
    options: ['Never', 'When rebasing already-pushed commits', 'Always', 'Only on main branch'],
    correct: 1,
    explanation: 'Rebase rewrites history, so previously pushed commits require force push (git push --force).'
  },
  {
    id: 76,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'What is autosquash in rebase?',
    options: ['Auto-squash all commits', 'Auto-arrange fixup/squash commits', 'Automatic conflict resolution', 'Compress repository'],
    correct: 1,
    explanation: 'git rebase -i --autosquash automatically arranges commits marked as fixup! or squash!.'
  },
  {
    id: 77,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'How do you skip a commit during rebase?',
    options: ['Delete the line', 'Use drop command', 'git rebase --skip', 'Both A and B'],
    correct: 3,
    explanation: 'Both deleting the line and using "drop" command remove the commit during interactive rebase.'
  },
  {
    id: 78,
    topic: 'rebasing',
    difficulty: 'Advanced',
    question: 'What is the benefit of squashing commits?',
    options: ['Faster git', 'Cleaner history with logical commits', 'Smaller repository', 'Easier merging'],
    correct: 1,
    explanation: 'Squashing combines related commits into logical units, making history more readable.'
  },
  {
    id: 79,
    topic: 'rebasing',
    difficulty: 'Expert',
    question: 'Can you rebase a merge commit?',
    options: ['No', 'Yes, with --rebase-merges', 'Yes, but not recommended', 'Only with --force'],
    correct: 1,
    explanation: 'git rebase --rebase-merges can rebase merge commits while preserving merge structure.'
  },
  {
    id: 80,
    topic: 'rebasing',
    difficulty: 'Intermediate',
    question: 'What happens to commit hashes after rebase?',
    options: ['Stay the same', 'Change to new hashes', 'Only message changes', 'Depend on conflicts'],
    correct: 1,
    explanation: 'Rebase creates new commits with different hashes, even if content is identical.'
  },

  // HISTORY REWRITING (25 questions)
  {
    id: 81,
    topic: 'historyRewriting',
    difficulty: 'Beginner',
    question: 'What does "git commit --amend" do?',
    options: ['Adds files', 'Modifies the last commit', 'Creates amendment', 'Fixes errors'],
    correct: 1,
    explanation: 'git commit --amend modifies the most recent commit (message or content).'
  },
  {
    id: 82,
    topic: 'historyRewriting',
    difficulty: 'Beginner',
    question: 'What is the difference between reset and revert?',
    options: ['No difference', 'Reset removes commits, revert creates new commit undoing changes', 'Revert is faster', 'Reset is safer'],
    correct: 1,
    explanation: 'reset moves branch pointer (destructive), revert creates new commit undoing changes (safe for shared history).'
  },
  {
    id: 83,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'What does "git reset --soft HEAD~1" do?',
    options: ['Deletes last commit and changes', 'Undoes last commit, keeps changes staged', 'Soft deletes files', 'Resets to remote'],
    correct: 1,
    explanation: 'git reset --soft moves HEAD back but keeps changes in staging area.'
  },
  {
    id: 84,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'What does "git reset --mixed HEAD~1" do?',
    options: ['Deletes last commit and changes', 'Undoes last commit, keeps changes unstaged', 'Partial reset', 'Mixed merge'],
    correct: 1,
    explanation: 'git reset --mixed (default) moves HEAD back and unstages changes but keeps them in working directory.'
  },
  {
    id: 85,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What does "git reset --hard HEAD~1" do?',
    options: ['Deletes files', 'Undoes last commit and discards all changes', 'Hard link commit', 'Forced reset'],
    correct: 1,
    explanation: 'git reset --hard discards commit AND all changes. Use with extreme caution!'
  },
  {
    id: 86,
    topic: 'historyRewriting',
    difficulty: 'Beginner',
    question: 'What does "git revert <commit>" do?',
    options: ['Deletes commit', 'Creates new commit undoing specified commit', 'Goes back in time', 'Reverts all changes'],
    correct: 1,
    explanation: 'git revert creates a new commit that undoes the changes from the specified commit.'
  },
  {
    id: 87,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'When should you use revert instead of reset?',
    options: ['Never', 'On shared/public branches', 'Private branches only', 'No difference'],
    correct: 1,
    explanation: 'Use revert on shared branches as it doesn\'t rewrite history; use reset on private branches.'
  },
  {
    id: 88,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'How do you revert a merge commit?',
    options: ['git revert -m 1 <commit>', 'git revert <commit>', 'Cannot revert merges', 'git reset merge'],
    correct: 0,
    explanation: 'git revert -m 1 <merge-commit> reverts a merge, specifying which parent to keep (-m 1 or -m 2).'
  },
  {
    id: 89,
    topic: 'historyRewriting',
    difficulty: 'Expert',
    question: 'What is a filter-branch operation?',
    options: ['Branch filtering', 'Rewrite entire history with filters', 'Search branches', 'Merge filter'],
    correct: 1,
    explanation: 'git filter-branch (deprecated, use filter-repo) rewrites history across all commits with filters.'
  },
  {
    id: 90,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'How do you change the author of the last commit?',
    options: ['git commit --amend --author="Name <email>"', 'git change-author', 'git config author.name', 'Cannot change'],
    correct: 0,
    explanation: 'git commit --amend --author="Name <email>" changes the author of the last commit.'
  },
  {
    id: 91,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'What does HEAD~3 mean?',
    options: ['3rd commit', '3 commits before HEAD', '3 branches', '3 HEAD pointers'],
    correct: 1,
    explanation: 'HEAD~3 refers to the commit 3 steps before the current HEAD.'
  },
  {
    id: 92,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What is the difference between HEAD~ and HEAD^?',
    options: ['No difference', '~ follows first parent, ^ allows choosing parent in merges', 'Syntax preference', '~ is newer'],
    correct: 1,
    explanation: 'HEAD~ follows first parent, HEAD^2 accesses second parent in merge commits.'
  },
  {
    id: 93,
    topic: 'historyRewriting',
    difficulty: 'Expert',
    question: 'How do you remove a file from entire Git history?',
    options: ['git rm', 'git filter-repo --path <file> --invert-paths', 'Delete and commit', 'Not possible'],
    correct: 1,
    explanation: 'git filter-repo --path <file> --invert-paths removes file from all commits in history.'
  },
  {
    id: 94,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'Can you undo a git reset --hard?',
    options: ['No', 'Yes, using reflog', 'Only within 30 days', 'Only if pushed'],
    correct: 1,
    explanation: 'git reflog shows previous HEAD positions, allowing recovery with git reset <hash>.'
  },
  {
    id: 95,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What is git reflog?',
    options: ['Reference log of HEAD movements', 'Remote log', 'Reflection logger', 'Regex log'],
    correct: 0,
    explanation: 'reflog records all movements of HEAD, enabling recovery of "lost" commits.'
  },
  {
    id: 96,
    topic: 'historyRewriting',
    difficulty: 'Expert',
    question: 'How long does reflog keep entries by default?',
    options: ['Forever', '90 days', '30 days', '7 days'],
    correct: 1,
    explanation: 'reflog keeps entries for 90 days by default (configurable).'
  },
  {
    id: 97,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'How do you change the message of a commit from 3 commits ago?',
    options: ['git commit --amend', 'git rebase -i HEAD~3, then reword', 'git message edit', 'Not possible'],
    correct: 1,
    explanation: 'Use interactive rebase (git rebase -i HEAD~3) and mark commit with "reword".'
  },
  {
    id: 98,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What happens if you reset to a commit that no longer exists in reflog?',
    options: ['Commit is truly lost', 'Git finds it', 'Creates new commit', 'Error'],
    correct: 0,
    explanation: 'Once reflog expires or is cleared, commits become unreachable and will be garbage collected.'
  },
  {
    id: 99,
    topic: 'historyRewriting',
    difficulty: 'Expert',
    question: 'What is the BFG Repo-Cleaner?',
    options: ['Git plugin', 'Alternative to filter-branch for cleaning repos', 'Bug fixing tool', 'Branch cleaner'],
    correct: 1,
    explanation: 'BFG is a faster, simpler alternative to filter-branch for removing sensitive data from history.'
  },
  {
    id: 100,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'Can you amend a commit that has been pushed?',
    options: ['No', 'Yes, but requires force push', 'Yes, automatically', 'Only on private repos'],
    correct: 1,
    explanation: 'You can amend and force push, but avoid this on shared branches as it rewrites history.'
  },
  {
    id: 101,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What is "git commit --fixup"?',
    options: ['Fix errors', 'Create commit marked for squashing with specific commit', 'Fast commit', 'Undo commit'],
    correct: 1,
    explanation: 'git commit --fixup=<hash> creates commit intended to be squashed with specified commit.'
  },
  {
    id: 102,
    topic: 'historyRewriting',
    difficulty: 'Expert',
    question: 'How do you rewrite all commits changing email address?',
    options: ['Manual rebase', 'git filter-repo --mailmap or filter-branch', 'git config --global', 'Not possible'],
    correct: 1,
    explanation: 'Use git filter-repo with mailmap file or filter-branch with env-filter to rewrite author info.'
  },
  {
    id: 103,
    topic: 'historyRewriting',
    difficulty: 'Beginner',
    question: 'What command shows the reflog?',
    options: ['git log --reflog', 'git reflog', 'git show reflog', 'git history'],
    correct: 1,
    explanation: 'git reflog shows the reference log of HEAD movements.'
  },
  {
    id: 104,
    topic: 'historyRewriting',
    difficulty: 'Advanced',
    question: 'What does "git reset HEAD <file>" do?',
    options: ['Deletes file', 'Unstages file', 'Resets file content', 'Removes file from working directory'],
    correct: 1,
    explanation: 'git reset HEAD <file> (or git restore --staged <file>) unstages a file.'
  },
  {
    id: 105,
    topic: 'historyRewriting',
    difficulty: 'Intermediate',
    question: 'Can you edit commit timestamps?',
    options: ['No', 'Yes, with --date flag during commit or rebase', 'Only with filter-branch', 'Automatic only'],
    correct: 1,
    explanation: 'You can set custom dates with git commit --date or modify during rebase with environment variables.'
  },

  // REMOTE WORKFLOWS (30 questions)
  {
    id: 106,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'What does "git remote" show?',
    options: ['Remote files', 'List of remote repositories', 'Remote branches', 'Online status'],
    correct: 1,
    explanation: 'git remote lists all remote repository connections configured for your local repo.'
  },
  {
    id: 107,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'How do you add a remote repository?',
    options: ['git add remote', 'git remote add <name> <url>', 'git connect <url>', 'git remote <url>'],
    correct: 1,
    explanation: 'git remote add <name> <url> adds a new remote repository connection.'
  },
  {
    id: 108,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'What is the default remote name after cloning?',
    options: ['main', 'master', 'origin', 'remote'],
    correct: 2,
    explanation: 'Git names the cloned remote "origin" by default.'
  },
  {
    id: 109,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'What does "git fetch" do?',
    options: ['Downloads and merges changes', 'Downloads changes without merging', 'Fetches files', 'Refreshes repository'],
    correct: 1,
    explanation: 'git fetch downloads changes from remote but doesn\'t merge them into your working branch.'
  },
  {
    id: 110,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'What is the difference between fetch and pull?',
    options: ['No difference', 'Pull = fetch + merge', 'Pull is faster', 'Fetch is deprecated'],
    correct: 1,
    explanation: 'git pull = git fetch + git merge. Pull fetches and automatically merges changes.'
  },
  {
    id: 111,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you push a new branch to remote?',
    options: ['git push', 'git push origin <branch>', 'git push -u origin <branch>', 'Both B and C'],
    correct: 3,
    explanation: 'git push origin <branch> works; -u sets upstream tracking for future pushes.'
  },
  {
    id: 112,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'What does "git push -u origin main" do?',
    options: ['Pushes to main', 'Pushes and sets upstream tracking', 'Updates origin', 'Uploads main'],
    correct: 1,
    explanation: '-u (--set-upstream) pushes the branch and sets origin/main as upstream for tracking.'
  },
  {
    id: 113,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'What does "git push --force" do?',
    options: ['Faster push', 'Overwrites remote history with local', 'Forces authentication', 'Pushes ignored files'],
    correct: 1,
    explanation: 'git push --force overwrites remote branch with your local branch, rewriting history. Dangerous!'
  },
  {
    id: 114,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'What is safer than "git push --force"?',
    options: ['git push --hard', 'git push --force-with-lease', 'git push -f', 'git push --safe'],
    correct: 1,
    explanation: 'git push --force-with-lease only force pushes if remote hasn\'t changed since you last fetched.'
  },
  {
    id: 115,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you see remote URLs?',
    options: ['git remote', 'git remote -v', 'git remote show', 'git url'],
    correct: 1,
    explanation: 'git remote -v shows remote names with their fetch/push URLs.'
  },
  {
    id: 116,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you delete a remote branch?',
    options: ['git branch -d origin/branch', 'git push origin --delete <branch>', 'git remote rm branch', 'Cannot delete remote branches'],
    correct: 1,
    explanation: 'git push origin --delete <branch> (or git push origin :<branch>) deletes remote branch.'
  },
  {
    id: 117,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'What does "git push origin :branch-name" do?',
    options: ['Push to branch', 'Delete remote branch', 'Rename branch', 'Error'],
    correct: 1,
    explanation: 'Pushing "nothing" (empty) to a remote branch deletes it. Newer syntax: git push origin --delete <branch>.'
  },
  {
    id: 118,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'How do you track a remote branch locally?',
    options: ['git checkout <branch>', 'git checkout -b <branch> origin/<branch>', 'git track <branch>', 'git branch --track'],
    correct: 1,
    explanation: 'git checkout -b <local> origin/<remote> creates and tracks a remote branch. Modern: git switch -c.'
  },
  {
    id: 119,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'What are remote-tracking branches?',
    options: ['Branches on remote', 'Local references to remote branch state', 'Tracking features', 'Branch aliases'],
    correct: 1,
    explanation: 'Remote-tracking branches (origin/main) are local references showing remote branch positions at last fetch.'
  },
  {
    id: 120,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'How do you prune deleted remote branches locally?',
    options: ['git clean', 'git fetch --prune', 'git remote prune origin', 'Both B and C'],
    correct: 3,
    explanation: 'Both git fetch --prune and git remote prune origin remove local references to deleted remote branches.'
  },
  {
    id: 121,
    topic: 'remoteWorkflows',
    difficulty: 'Expert',
    question: 'What is the difference between origin/main and origin main?',
    options: ['No difference', 'origin/main is tracking branch, origin main is remote and branch', 'Syntax error', 'Version difference'],
    correct: 1,
    explanation: 'origin/main is a remote-tracking branch; "origin main" references remote "origin" and branch "main" separately.'
  },
  {
    id: 122,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you see information about a remote?',
    options: ['git remote info', 'git remote show <name>', 'git remote -v', 'git info remote'],
    correct: 1,
    explanation: 'git remote show <name> displays detailed info including tracked branches and push/pull URLs.'
  },
  {
    id: 123,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'Can you have different URLs for fetch and push?',
    options: ['No', 'Yes, using git remote set-url', 'Only with SSH', 'Only on GitHub'],
    correct: 1,
    explanation: 'git remote set-url --push <name> <url> sets different URL for pushing than fetching.'
  },
  {
    id: 124,
    topic: 'remoteWorkflows',
    difficulty: 'Beginner',
    question: 'How do you see all branches including remote?',
    options: ['git branch', 'git branch -r', 'git branch -a', 'git remote branches'],
    correct: 2,
    explanation: 'git branch -a shows all branches (local and remote). -r shows only remote.'
  },
  {
    id: 125,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'What does "git pull --rebase" do?',
    options: ['Same as git pull', 'Fetch and rebase instead of merge', 'Forced pull', 'Pull from rebase branch'],
    correct: 1,
    explanation: 'git pull --rebase fetches changes and rebases your commits on top instead of creating merge commit.'
  },
  {
    id: 126,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'How do you change a remote URL?',
    options: ['git remote update', 'git remote set-url <name> <new-url>', 'git remote change', 'Edit .git/config'],
    correct: 1,
    explanation: 'git remote set-url <name> <new-url> updates the remote repository URL.'
  },
  {
    id: 127,
    topic: 'remoteWorkflows',
    difficulty: 'Expert',
    question: 'What is a bare repository?',
    options: ['Empty repository', 'Repository without working directory (server-side)', 'Uninitialized repo', 'Minimal repo'],
    correct: 1,
    explanation: 'Bare repository (created with --bare) has no working directory, used for central remote repos.'
  },
  {
    id: 128,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you fetch from all remotes?',
    options: ['git fetch', 'git fetch --all', 'git fetch origin', 'git remote fetch'],
    correct: 1,
    explanation: 'git fetch --all fetches from all configured remote repositories.'
  },
  {
    id: 129,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'What is an upstream branch?',
    options: ['Main branch', 'Remote branch that local branch tracks', 'Parent branch', 'Origin branch'],
    correct: 1,
    explanation: 'Upstream is the remote branch a local branch tracks for push/pull operations.'
  },
  {
    id: 130,
    topic: 'remoteWorkflows',
    difficulty: 'Expert',
    question: 'How do you push all branches to remote?',
    options: ['git push origin *', 'git push --all origin', 'git push origin --branches', 'git push --everything'],
    correct: 1,
    explanation: 'git push --all <remote> pushes all branches to the specified remote.'
  },
  {
    id: 131,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'What does "git ls-remote" do?',
    options: ['List remote files', 'List references in remote repository', 'List remote servers', 'Show remote log'],
    correct: 1,
    explanation: 'git ls-remote shows references (branches, tags) in a remote repository without cloning.'
  },
  {
    id: 132,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'How do you rename a remote?',
    options: ['git remote rename <old> <new>', 'git rename remote', 'git remote mv', 'Edit .git/config'],
    correct: 0,
    explanation: 'git remote rename <old> <new> renames a remote connection.'
  },
  {
    id: 133,
    topic: 'remoteWorkflows',
    difficulty: 'Expert',
    question: 'What are refspecs?',
    options: ['Reference specifications mapping local/remote branches', 'Remote specs', 'Reflog specifications', 'Repository specs'],
    correct: 0,
    explanation: 'Refspecs define mappings between remote and local references (e.g., +refs/heads/*:refs/remotes/origin/*).'
  },
  {
    id: 134,
    topic: 'remoteWorkflows',
    difficulty: 'Advanced',
    question: 'How do you push tags to remote?',
    options: ['git push', 'git push --tags', 'Tags push automatically', 'git tag --push'],
    correct: 1,
    explanation: 'git push --tags pushes all tags. git push origin <tag> pushes specific tag.'
  },
  {
    id: 135,
    topic: 'remoteWorkflows',
    difficulty: 'Intermediate',
    question: 'What happens if push is rejected (non-fast-forward)?',
    options: ['Push fails', 'Auto-merge happens', 'Need to pull first', 'Need to force push'],
    correct: 2,
    explanation: 'Non-fast-forward rejection means remote has commits you don\'t have. Pull (or fetch+merge) first.'
  },

  // RECOVERY OPERATIONS (20 questions)
  {
    id: 136,
    topic: 'recovery',
    difficulty: 'Beginner',
    question: 'What is git reflog?',
    options: ['Remote log', 'Reference log of HEAD movements', 'Reflection log', 'Repository log'],
    correct: 1,
    explanation: 'reflog records where HEAD has been, allowing recovery of "lost" commits.'
  },
  {
    id: 137,
    topic: 'recovery',
    difficulty: 'Beginner',
    question: 'How long does reflog keep entries?',
    options: ['30 days', '60 days', '90 days', 'Forever'],
    correct: 2,
    explanation: 'reflog keeps entries for 90 days by default (configurable with gc.reflogExpire).'
  },
  {
    id: 138,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'How do you recover a deleted branch using reflog?',
    options: ['Cannot recover', 'Find commit hash in reflog, create branch there', 'git recover', 'git branch --restore'],
    correct: 1,
    explanation: 'Use git reflog to find the commit, then git branch <name> <hash> to recreate branch.'
  },
  {
    id: 139,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'What is a detached HEAD state?',
    options: ['Error', 'HEAD points to specific commit instead of branch', 'Broken repository', 'Headless branch'],
    correct: 1,
    explanation: 'Detached HEAD means you\'re not on any branch - HEAD points directly to a commit.'
  },
  {
    id: 140,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'How do you exit detached HEAD state while keeping changes?',
    options: ['git checkout main', 'git switch -c <new-branch>', 'git reattach', 'git HEAD --attach'],
    correct: 1,
    explanation: 'Create a new branch from detached HEAD with git switch -c <branch> (or git checkout -b <branch>).'
  },
  {
    id: 141,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'How do you find dangling commits?',
    options: ['git log --dangling', 'git fsck --lost-found', 'git reflog', 'git find'],
    correct: 1,
    explanation: 'git fsck --lost-found identifies unreachable (dangling) commits and blobs.'
  },
  {
    id: 142,
    topic: 'recovery',
    difficulty: 'Expert',
    question: 'What is git fsck?',
    options: ['File system check', 'Fast check', 'Find similar commits', 'Fix corruption'],
    correct: 0,
    explanation: 'git fsck (file system check) verifies integrity and finds unreachable objects.'
  },
  {
    id: 143,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'Can you recover a commit after "git reset --hard"?',
    options: ['No', 'Yes, if it\'s in reflog', 'Only within 1 day', 'Only if pushed'],
    correct: 1,
    explanation: 'As long as the commit is in reflog (typically 90 days), you can recover it.'
  },
  {
    id: 144,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'What does "git reflog expire" do?',
    options: ['Shows expiration date', 'Manually expires reflog entries', 'Extends reflog time', 'Exports reflog'],
    correct: 1,
    explanation: 'git reflog expire manually triggers reflog cleanup based on expiration rules.'
  },
  {
    id: 145,
    topic: 'recovery',
    difficulty: 'Expert',
    question: 'How do you recover work from detached HEAD that was lost?',
    options: ['Cannot recover', 'Check reflog for ORIG_HEAD or HEAD@{n}', 'git recover', 'Restore from backup'],
    correct: 1,
    explanation: 'reflog tracks HEAD movements even in detached state. Find the commit hash and restore it.'
  },
  {
    id: 146,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'What does "git checkout HEAD@{1}" do?',
    options: ['Checkout first commit', 'Checkout previous HEAD position', 'Syntax error', 'Checkout branch 1'],
    correct: 1,
    explanation: 'HEAD@{1} refers to where HEAD was one move ago (from reflog).'
  },
  {
    id: 147,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'What is ORIG_HEAD?',
    options: ['Original repository', 'Previous position before dangerous operation', 'Origin HEAD', 'Older Git version'],
    correct: 1,
    explanation: 'ORIG_HEAD stores HEAD position before operations like merge, reset, or rebase.'
  },
  {
    id: 148,
    topic: 'recovery',
    difficulty: 'Expert',
    question: 'How do you find all commits not on any branch?',
    options: ['git log --all', 'git fsck --unreachable', 'git branch --orphan', 'git lost'],
    correct: 1,
    explanation: 'git fsck --unreachable lists objects not reachable from any reference.'
  },
  {
    id: 149,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'Can you undo "git commit --amend"?',
    options: ['No', 'Yes, using reflog', 'Only immediately', 'Only if not pushed'],
    correct: 1,
    explanation: 'reflog records the commit before amending, allowing recovery with git reset.'
  },
  {
    id: 150,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'What happens to commits when garbage collection runs?',
    options: ['All commits deleted', 'Unreachable commits beyond expiry are removed', 'Repository compressed', 'Nothing'],
    correct: 1,
    explanation: 'git gc removes unreachable objects (commits, blobs) that are older than gc.pruneExpire (default 2 weeks).'
  },
  {
    id: 151,
    topic: 'recovery',
    difficulty: 'Expert',
    question: 'How do you disable garbage collection temporarily?',
    options: ['git gc --stop', 'git config gc.auto 0', 'git gc disable', 'Cannot disable'],
    correct: 1,
    explanation: 'git config gc.auto 0 disables automatic garbage collection.'
  },
  {
    id: 152,
    topic: 'recovery',
    difficulty: 'Intermediate',
    question: 'What does "git stash" save?',
    options: ['Committed changes', 'Uncommitted changes', 'Staged changes only', 'All files'],
    correct: 1,
    explanation: 'git stash saves uncommitted changes (both staged and unstaged) to a stack.'
  },
  {
    id: 153,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'How do you recover a dropped stash?',
    options: ['Cannot recover', 'git fsck --unreachable to find hash', 'git stash list --deleted', 'git reflog stash'],
    correct: 1,
    explanation: 'git fsck --unreachable can find dropped stash commits. Also check git fsck --lost-found.'
  },
  {
    id: 154,
    topic: 'recovery',
    difficulty: 'Expert',
    question: 'What is the .git/objects directory?',
    options: ['Object storage', 'Database of all Git objects (commits, trees, blobs)', 'Configuration objects', 'Object cache'],
    correct: 1,
    explanation: '.git/objects stores all Git objects in content-addressed format.'
  },
  {
    id: 155,
    topic: 'recovery',
    difficulty: 'Advanced',
    question: 'How do you check repository integrity?',
    options: ['git check', 'git fsck', 'git verify', 'git integrity'],
    correct: 1,
    explanation: 'git fsck checks repository integrity, verifying all objects are valid and connected.'
  },

  // BRANCHING STRATEGIES (20 questions)
  {
    id: 156,
    topic: 'branching',
    difficulty: 'Beginner',
    question: 'What is a branch in Git?',
    options: ['Copy of repository', 'Pointer to a commit', 'Folder', 'Tag'],
    correct: 1,
    explanation: 'A branch is a movable pointer to a commit, enabling parallel development.'
  },
  {
    id: 157,
    topic: 'branching',
    difficulty: 'Beginner',
    question: 'What is the main branch typically called?',
    options: ['master or main', 'trunk', 'default', 'primary'],
    correct: 0,
    explanation: 'Traditionally "master", now commonly "main" for default branch name.'
  },
  {
    id: 158,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is Git Flow?',
    options: ['Git workflow', 'Branching model with main, develop, feature, release, hotfix', 'Git command', 'Flow chart'],
    correct: 1,
    explanation: 'Git Flow is a branching strategy with specific branch types for features, releases, and hotfixes.'
  },
  {
    id: 159,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is GitHub Flow?',
    options: ['Same as Git Flow', 'Simpler workflow: main + feature branches', 'GitHub-only feature', 'Deprecated'],
    correct: 1,
    explanation: 'GitHub Flow is simpler: main branch always deployable, feature branches for work, PR for review.'
  },
  {
    id: 160,
    topic: 'branching',
    difficulty: 'Advanced',
    question: 'What is trunk-based development?',
    options: ['Using main branch', 'Everyone commits to main/trunk with short-lived feature branches', 'Git Flow', 'Legacy workflow'],
    correct: 1,
    explanation: 'Trunk-based development emphasizes committing to main frequently with very short-lived feature branches.'
  },
  {
    id: 161,
    topic: 'branching',
    difficulty: 'Beginner',
    question: 'What is a feature branch?',
    options: ['Special Git feature', 'Branch for developing a new feature', 'Main branch', 'Release branch'],
    correct: 1,
    explanation: 'Feature branch is created to develop a specific feature in isolation from main development.'
  },
  {
    id: 162,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is a release branch?',
    options: ['Public branch', 'Branch for preparing a release', 'Deleted after release', 'Main branch'],
    correct: 1,
    explanation: 'Release branch is created for finalizing a release (bug fixes, version bumps) without blocking new features.'
  },
  {
    id: 163,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is a hotfix branch?',
    options: ['Fast branch', 'Branch for urgent production fixes', 'Hot deployment', 'Priority branch'],
    correct: 1,
    explanation: 'Hotfix branch quickly fixes critical production issues, branching from and merging back to main.'
  },
  {
    id: 164,
    topic: 'branching',
    difficulty: 'Advanced',
    question: 'What is the difference between long-lived and short-lived branches?',
    options: ['Age only', 'Long-lived (main, develop) vs short-lived (features, merges)', 'Size', 'No difference'],
    correct: 1,
    explanation: 'Long-lived branches persist (main, develop); short-lived are temporary (features, merged then deleted).'
  },
  {
    id: 165,
    topic: 'branching',
    difficulty: 'Expert',
    question: 'What is OneFlow?',
    options: ['Single branch strategy', 'Variation of Git Flow for continuous delivery', 'GitHub tool', 'Flow framework'],
    correct: 1,
    explanation: 'OneFlow is a Git Flow variant better suited for continuous delivery, using release branches differently.'
  },
  {
    id: 166,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is the purpose of a develop branch in Git Flow?',
    options: ['Development environment', 'Integration branch for features before release', 'Testing branch', 'Backup branch'],
    correct: 1,
    explanation: 'Develop branch integrates features and serves as the base for next release, while main stays stable.'
  },
  {
    id: 167,
    topic: 'branching',
    difficulty: 'Advanced',
    question: 'When should you use Git Flow vs GitHub Flow?',
    options: ['No difference', 'Git Flow for scheduled releases, GitHub Flow for continuous deployment', 'Git Flow is deprecated', 'GitHub Flow is GitHub-only'],
    correct: 1,
    explanation: 'Git Flow suits versioned releases; GitHub Flow suits continuous deployment with simpler structure.'
  },
  {
    id: 168,
    topic: 'branching',
    difficulty: 'Beginner',
    question: 'What is a good branch naming convention?',
    options: ['Random names', 'Descriptive: feature/user-authentication', 'Numbers only', 'Single letters'],
    correct: 1,
    explanation: 'Use prefixes (feature/, bugfix/, hotfix/) with descriptive names for clarity.'
  },
  {
    id: 169,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'Should you delete feature branches after merging?',
    options: ['Never', 'Yes, to keep repository clean', 'Only on GitHub', 'Only if small'],
    correct: 1,
    explanation: 'Delete merged feature branches to avoid clutter; history is preserved in merge commits.'
  },
  {
    id: 170,
    topic: 'branching',
    difficulty: 'Advanced',
    question: 'What is a protected branch?',
    options: ['Encrypted branch', 'Branch with restrictions (no force push, require reviews)', 'Backup branch', 'Private branch'],
    correct: 1,
    explanation: 'Protected branches enforce rules like no force pushes, required reviews, or CI checks before merging.'
  },
  {
    id: 171,
    topic: 'branching',
    difficulty: 'Expert',
    question: 'What is the "ship/show/ask" strategy?',
    options: ['Deployment strategy', 'Branch review strategy: ship (no review), show (FYI), ask (PR)', 'Git command', 'Shipping workflow'],
    correct: 1,
    explanation: 'Ship/show/ask categorizes changes by review needs: ship without review, show for awareness, ask for approval.'
  },
  {
    id: 172,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is a topic branch?',
    options: ['Main branch', 'Short-lived branch for specific topic/feature', 'Documentation branch', 'Discussion branch'],
    correct: 1,
    explanation: 'Topic branch is a short-lived branch focused on a single topic, feature, or fix.'
  },
  {
    id: 173,
    topic: 'branching',
    difficulty: 'Advanced',
    question: 'What is "branch per environment" strategy?',
    options: ['Multiple repos', 'Separate branches for dev, staging, production', 'Environment variables', 'Docker strategy'],
    correct: 1,
    explanation: 'Branch per environment uses branches to represent deployment environments (anti-pattern for many workflows).'
  },
  {
    id: 174,
    topic: 'branching',
    difficulty: 'Expert',
    question: 'Why is "branch per environment" often considered an anti-pattern?',
    options: ['Too complex', 'Environments should be config-driven, not branch-driven', 'Git limitation', 'Outdated practice'],
    correct: 1,
    explanation: 'Modern practices use single codebase with configuration for environments rather than separate branches.'
  },
  {
    id: 175,
    topic: 'branching',
    difficulty: 'Intermediate',
    question: 'What is a pull request (or merge request)?',
    options: ['Request to pull code', 'Request to merge branch with code review', 'Pull from remote', 'Merge command'],
    correct: 1,
    explanation: 'PR/MR is a request to merge changes with built-in code review and discussion features.'
  },

  // STASH & CHERRY-PICK (20 questions)
  {
    id: 176,
    topic: 'stashCherryPick',
    difficulty: 'Beginner',
    question: 'What does "git stash" do?',
    options: ['Commits changes', 'Temporarily saves uncommitted changes', 'Creates backup', 'Stores files'],
    correct: 1,
    explanation: 'git stash temporarily saves uncommitted changes so you can work on something else.'
  },
  {
    id: 177,
    topic: 'stashCherryPick',
    difficulty: 'Beginner',
    question: 'How do you apply the most recent stash?',
    options: ['git stash apply', 'git stash pop', 'git stash restore', 'Both A and B'],
    correct: 3,
    explanation: 'Both git stash apply and git stash pop apply recent stash; pop also removes it from stash list.'
  },
  {
    id: 178,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'What is the difference between "stash apply" and "stash pop"?',
    options: ['No difference', 'pop removes stash from list, apply keeps it', 'apply is newer', 'pop is faster'],
    correct: 1,
    explanation: 'git stash pop applies AND drops the stash; apply keeps it in the stash list.'
  },
  {
    id: 179,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'How do you see all stashes?',
    options: ['git stash', 'git stash list', 'git stash show', 'git list stash'],
    correct: 1,
    explanation: 'git stash list shows all stashes with their indices (stash@{0}, stash@{1}, etc.).'
  },
  {
    id: 180,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'How do you apply a specific stash?',
    options: ['git stash apply <index>', 'git stash apply stash@{2}', 'git stash <number>', 'Cannot specify'],
    correct: 1,
    explanation: 'git stash apply stash@{n} applies the stash at index n.'
  },
  {
    id: 181,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'Does git stash include untracked files by default?',
    options: ['Yes', 'No, use -u or --include-untracked', 'Only new files', 'Depends on config'],
    correct: 1,
    explanation: 'git stash by default only saves tracked files. Use -u to include untracked files.'
  },
  {
    id: 182,
    topic: 'stashCherryPick',
    difficulty: 'Expert',
    question: 'How do you stash including ignored files?',
    options: ['git stash -u', 'git stash --all', 'git stash -i', 'Cannot stash ignored'],
    correct: 1,
    explanation: 'git stash --all (or -a) includes ignored files in the stash.'
  },
  {
    id: 183,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'How do you create a named stash?',
    options: ['git stash <name>', 'git stash save "message"', 'git stash push -m "message"', 'Both B and C'],
    correct: 3,
    explanation: 'Both git stash save "message" (deprecated) and git stash push -m "message" create named stashes.'
  },
  {
    id: 184,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'How do you drop a specific stash?',
    options: ['git stash drop', 'git stash drop stash@{1}', 'git stash remove', 'git stash delete'],
    correct: 1,
    explanation: 'git stash drop stash@{n} removes the stash at index n from the list.'
  },
  {
    id: 185,
    topic: 'stashCherryPick',
    difficulty: 'Expert',
    question: 'How do you create a branch from a stash?',
    options: ['git branch <stash>', 'git stash branch <name>', 'git checkout -b <stash>', 'Not possible'],
    correct: 1,
    explanation: 'git stash branch <name> creates a new branch and applies the stash to it.'
  },
  {
    id: 186,
    topic: 'stashCherryPick',
    difficulty: 'Beginner',
    question: 'What is git cherry-pick?',
    options: ['Select files', 'Apply specific commit to current branch', 'Pick cherries', 'Select branches'],
    correct: 1,
    explanation: 'git cherry-pick applies changes from a specific commit to your current branch.'
  },
  {
    id: 187,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'How do you cherry-pick a commit?',
    options: ['git cherry <hash>', 'git cherry-pick <hash>', 'git pick <hash>', 'git apply <hash>'],
    correct: 1,
    explanation: 'git cherry-pick <commit-hash> applies that commit to your current branch.'
  },
  {
    id: 188,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'Can you cherry-pick multiple commits?',
    options: ['No', 'Yes, with multiple hashes or range', 'Only two', 'Only sequential'],
    correct: 1,
    explanation: 'git cherry-pick <hash1> <hash2> or git cherry-pick <start>..<end> picks multiple commits.'
  },
  {
    id: 189,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'What happens if cherry-pick causes conflicts?',
    options: ['Automatic resolution', 'Pauses for manual resolution', 'Aborts', 'Creates merge commit'],
    correct: 1,
    explanation: 'Cherry-pick pauses on conflicts; resolve, stage, then git cherry-pick --continue.'
  },
  {
    id: 190,
    topic: 'stashCherryPick',
    difficulty: 'Expert',
    question: 'How do you cherry-pick without committing?',
    options: ['git cherry-pick --staged', 'git cherry-pick -n', 'git cherry-pick --no-commit', 'Both B and C'],
    correct: 3,
    explanation: 'Both git cherry-pick -n and --no-commit apply changes without creating commit.'
  },
  {
    id: 191,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'How do you abort a cherry-pick?',
    options: ['git cherry-pick --cancel', 'git cherry-pick --abort', 'Ctrl+C', 'git reset'],
    correct: 1,
    explanation: 'git cherry-pick --abort cancels the cherry-pick and returns to previous state.'
  },
  {
    id: 192,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'What does "git stash show" do?',
    options: ['Lists stashes', 'Shows diff of most recent stash', 'Shows stash details', 'Applies stash'],
    correct: 1,
    explanation: 'git stash show displays a summary of changes in the most recent stash.'
  },
  {
    id: 193,
    topic: 'stashCherryPick',
    difficulty: 'Expert',
    question: 'How do you partially apply a stash (like patch mode)?',
    options: ['git stash -p', 'git stash apply --patch', 'git stash pop -p', 'Not possible'],
    correct: 1,
    explanation: 'git stash apply --patch allows interactive selection of hunks to apply from stash.'
  },
  {
    id: 194,
    topic: 'stashCherryPick',
    difficulty: 'Intermediate',
    question: 'Can you stash staged changes separately from unstaged?',
    options: ['No', 'Yes, with --keep-index', 'Yes, with --staged', 'Automatic'],
    correct: 1,
    explanation: 'git stash --keep-index stashes unstaged changes but leaves staged changes in index.'
  },
  {
    id: 195,
    topic: 'stashCherryPick',
    difficulty: 'Advanced',
    question: 'What does cherry-pick -x do?',
    options: ['Expert mode', 'Appends original commit reference to message', 'Executes script', 'Excludes files'],
    correct: 1,
    explanation: 'git cherry-pick -x adds "(cherry picked from commit <hash>)" to the commit message.'
  },

  // DEBUGGING & BISECT (20+ questions)
  {
    id: 196,
    topic: 'debugging',
    difficulty: 'Beginner',
    question: 'What is git bisect used for?',
    options: ['Splitting commits', 'Binary search to find bug-introducing commit', 'Dividing branches', 'Backup tool'],
    correct: 1,
    explanation: 'git bisect uses binary search to efficiently find which commit introduced a bug.'
  },
  {
    id: 197,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'How do you start a bisect session?',
    options: ['git bisect', 'git bisect start', 'git debug start', 'git find-bug'],
    correct: 1,
    explanation: 'git bisect start begins a binary search session.'
  },
  {
    id: 198,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'How do you mark current commit as bad in bisect?',
    options: ['git bisect bad', 'git bisect broken', 'git bisect error', 'git bad'],
    correct: 0,
    explanation: 'git bisect bad marks current commit as containing the bug.'
  },
  {
    id: 199,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'How do you mark a commit as good in bisect?',
    options: ['git bisect good', 'git bisect ok', 'git bisect working', 'git good'],
    correct: 0,
    explanation: 'git bisect good marks current commit as not containing the bug.'
  },
  {
    id: 200,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'Can you automate bisect with a test script?',
    options: ['No', 'Yes, with git bisect run <script>', 'Only manually', 'Only in CI'],
    correct: 1,
    explanation: 'git bisect run <test-script> automates bisect; script returns 0 for good, 1+ for bad.'
  },
  {
    id: 201,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you end a bisect session?',
    options: ['git bisect end', 'git bisect reset', 'git bisect stop', 'git stop'],
    correct: 1,
    explanation: 'git bisect reset ends bisect and returns to original branch/commit.'
  },
  {
    id: 202,
    topic: 'debugging',
    difficulty: 'Beginner',
    question: 'What does "git blame" show?',
    options: ['Errors', 'Who last modified each line of a file', 'Commit blame', 'Code quality'],
    correct: 1,
    explanation: 'git blame shows which commit and author last modified each line of a file.'
  },
  {
    id: 203,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'How do you blame a specific file?',
    options: ['git blame', 'git blame <file>', 'git find <file>', 'git annotate'],
    correct: 1,
    explanation: 'git blame <filename> shows line-by-line authorship for that file.'
  },
  {
    id: 204,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you see blame for specific line range?',
    options: ['git blame -L 10,20 <file>', 'git blame --lines 10-20', 'git blame <file>:10-20', 'Not possible'],
    correct: 0,
    explanation: 'git blame -L <start>,<end> <file> shows blame for line range.'
  },
  {
    id: 205,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'How do you ignore whitespace changes in blame?',
    options: ['git blame --no-whitespace', 'git blame -w', 'git blame --ignore-space', 'Not possible'],
    correct: 1,
    explanation: 'git blame -w ignores whitespace changes when determining line authorship.'
  },
  {
    id: 206,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'What does "git log -S<string>" do (pickaxe)?',
    options: ['Search commits', 'Find commits that changed occurrences of string', 'Show string logs', 'Search mode'],
    correct: 1,
    explanation: 'git log -S<string> finds commits that added or removed occurrences of the string.'
  },
  {
    id: 207,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'What is the difference between -S and -G in git log?',
    options: ['No difference', '-S finds occurrence changes, -G finds regex pattern in diff', 'Case sensitivity', 'Speed'],
    correct: 1,
    explanation: '-S finds commits changing number of occurrences; -G finds commits with regex match in diff.'
  },
  {
    id: 208,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'How do you see commit history for a specific file?',
    options: ['git log <file>', 'git log -- <file>', 'git history <file>', 'Both A and B'],
    correct: 3,
    explanation: 'Both git log <file> and git log -- <file> show commits affecting that file.'
  },
  {
    id: 209,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you follow file history through renames?',
    options: ['git log --rename', 'git log --follow <file>', 'git log --track', 'Automatic'],
    correct: 1,
    explanation: 'git log --follow <file> continues history through file renames.'
  },
  {
    id: 210,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'What does "git bisect skip" do?',
    options: ['Skip session', 'Skip current commit (untestable)', 'Skip bad commits', 'Fast forward'],
    correct: 1,
    explanation: 'git bisect skip marks current commit as untestable and chooses a nearby commit.'
  },
  {
    id: 211,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you see what changed in a file between two commits?',
    options: ['git diff <commit1> <commit2> <file>', 'git diff <commit1>..<commit2> -- <file>', 'git compare', 'Both A and B'],
    correct: 3,
    explanation: 'Both git diff <commit1> <commit2> <file> and git diff <c1>..<c2> -- <file> work.'
  },
  {
    id: 212,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'What does "git log --grep=<pattern>" do?',
    options: ['Search files', 'Search commit messages for pattern', 'Grep in code', 'Pattern matching'],
    correct: 1,
    explanation: 'git log --grep=<pattern> filters commits by searching commit messages.'
  },
  {
    id: 213,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you search for commits by author?',
    options: ['git log --author=<name>', 'git log --user=<name>', 'git log --by=<name>', 'git find author'],
    correct: 0,
    explanation: 'git log --author=<pattern> filters commits by author name (supports regex).'
  },
  {
    id: 214,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'What does "git log --all --full-history --" do?',
    options: ['Full log', 'Shows history including deleted files/branches', 'All branches', 'Complete history'],
    correct: 1,
    explanation: 'Shows complete history including deleted branches and files across all refs.'
  },
  {
    id: 215,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you find when a line was deleted?',
    options: ['git blame', 'git log -S<line> or git log -p', 'git deleted', 'Not possible'],
    correct: 1,
    explanation: 'git log -S"line content" finds when line was added/removed; -p shows full diffs.'
  },
  {
    id: 216,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'What is the difference between ^<commit> and ~<commit> in Git?',
    options: ['No difference', '^ selects parent, ~ traverses first parent lineage', 'Syntax preference', 'Version difference'],
    correct: 1,
    explanation: 'HEAD^ is first parent, HEAD^2 is second parent (merges). HEAD~ is first parent, HEAD~3 is three generations back.'
  },
  {
    id: 217,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'How do you find commits that touched a specific function?',
    options: ['git log -L :<function>:<file>', 'git log --function', 'git blame function', 'Not possible'],
    correct: 0,
    explanation: 'git log -L :<funcname>:<file> shows commits that changed a specific function.'
  },
  {
    id: 218,
    topic: 'debugging',
    difficulty: 'Intermediate',
    question: 'What does "git show <commit>" display?',
    options: ['Commit message only', 'Commit message and diff', 'Commit hash', 'Commit author'],
    correct: 1,
    explanation: 'git show <commit> displays commit info and the diff of changes introduced.'
  },
  {
    id: 219,
    topic: 'debugging',
    difficulty: 'Expert',
    question: 'How can you make bisect faster?',
    options: ['Cannot improve', 'Use bisect run with automated test', 'Manual only', 'Use --fast flag'],
    correct: 1,
    explanation: 'git bisect run <test-script> automates testing, making bisect much faster than manual testing.'
  },
  {
    id: 220,
    topic: 'debugging',
    difficulty: 'Advanced',
    question: 'What does "git log --graph" show?',
    options: ['Graphics', 'ASCII art graph of branch history', 'Performance graph', 'Commit graph database'],
    correct: 1,
    explanation: 'git log --graph draws an ASCII representation of branch and merge history.'
  }
];
