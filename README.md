# github-cli-demo

The repo for an upcoming video

Here are a list of some handy Github CLI commands:

```bash
# create a pull request from the branch you are on, to the main branch
gh pr create

# same, but change the branch you are mergin into
gh pr create --base=next

# edit a pr, defaulting to the branch you are on.
# useful for assigning reviewers after you've made the pr.
gh pr edit

# list all pull requests in the repo
# alias: gh pr ls
gh pr list

# more verbose list of pull requests with status and sorted
# by current branch, created by you, and assigned to you
gh pr status
```
