Initialized a folder in git ==>git init

copy a repo --> git clone <repository-url>

git status -s => tho know current status of staged and unstaged file

git log --oneline => to know current status to saved point
git log --oneline --graph  => batayega ki kaam kese kese hua --> about branch

add file to staging area --> git add <file-name> & add all files --> git add . 

commit change            --> git commit -m "Commit message"

pura git folder he udana hai --> rm -rf .git

making  a checkpoint 
    adding files
    staging them
    commit them
going back to some previous saved point
    logging everything   -> git log --oneline
    revert back          -> git reset --hard HEAD~1 -->1 no of steps backward
                                      --soft
                                      --mixed

# BRANCHING

create branch -> git branch branch/name ---> feature/navbar  & <create and switch -- git switch -C branch_name >
switch branch -> git switch main || branch/name
merge branch  -> git merge branch/name
delete branch -> git branch -d branch/name

when we do some modification on any brach and don't commit it and switch to the other branch then these changes may ve deleted so to store it we use <git stash> -->not committed and not deleted while switch ->store in local space
and when we come again in our branch which is stash and we want those store changes then use <git stash apply>
and for delete the memory <git stash clear>

Collaboration :
create a repo by main user
invite collaborator
collaborator clone repo and make their own branch 
work on their own branch and then push changes

Push Changes to Remote Repository  --> git push -u origin <branch-name>

main user fetch karega -> <git fetch>
and then check the collaborator code and then merge to the main brach 
then push to the main repo on github -> <git push origin main>

and then collaborator want the updated main code in their pc so first it will fetch the code and the pull it 
Pull Changes from Remote Repository -> git pull





