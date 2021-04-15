import {message, warn, danger} from 'danger';

  
// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}


// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
   warn('Please assign someone to merge this PR, and optionally include people who should review.');
}

if (danger.github.pr.additions + danger.github.pr.deletions - (danger.github.pr.changed_files)) {
  const changedLines = danger.github.pr.additions + danger.github.pr.deletions - (danger.github.pr.changed_files)
  message(`This PR has ${changedLines}`);
}