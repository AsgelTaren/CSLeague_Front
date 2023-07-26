# CSLeague Front webstie repository
This repository contains the code needed to compile the website used by CSLeague.

# Branch management
In order to maintain readability throughout the developpment, some rules need to be followed:
- The *Master* branch must always represents the latest stable and validated state of the project. No other branch can replace *Master* for this role
- When one wants to start a new branch, the said branch must start from the most recent commit of the *Master* branch, to avoid unsollicited complexity in the project developpment history.
- When one wants to push his finalized and verified work onto master, he must beforehands bring it in line with the latest changes brought to the *Master* branch, using interactive rebase. The resulting history graph should always be linear with respect to the master branch.
- Each branch other than *Master* shoud be named with a format according to their purpose:
    - Feature branch prefix: **feat-**-{Developpment plan}-{Feature's name}. Developpement plans are just categories of feature planned for the website. For instance, we should consider for the beginning to have the **construct** plan, where we just build the main idea of the website, and the **wei** plan, where we add stuff related to the integration of new students.
    - Bug Fixing branch: **fix-**{Bug name, and if possible, issue id}
 