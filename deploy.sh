# minifies all source into the github pages repo
# and commits and pushed the changes using the last commit message from the source repo
before=$PWD
# get last commit message
commit_message=`git log -1 --pretty=%B`
repo="../sanj0.github.io/"

# minify all sources into gh pages repo
minify -s --recursive -o $repo .

# add all and commit with aforementioned message
# do git stuff with && in case of failure
cd $repo && git add . && git commit -m "$commit_message" && git push

# cd back
cd $before
