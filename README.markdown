Semantic Ready
==============

A ready-to-clone repo set up with Semantic UI.

If you need a super-simple include without all the Gulp stuff then see simple.html in this repo.

Installation
------------

### Install Gulp globally

    npm install -g gulp

### Clone the repo

    git clone git@github.com:bsaf/semantic-ready.git

### Install the node dependencies (semantic)

    cd semantic-ready
    npm install

### Build the Semantic UI dist folder

    cd semantic
    gulp build

When Developing
---------------

### Start the web server

    server

### Start the Semantic watcher

    cd semantic
    gulp watch

Now you're ready to start working.

Customisation Guide
-------------------

### Find variables to override in:

    semantic/src/themes/default/globals/site.variables

### Override them in:

    semantic/src/site/globals/site.variables

### Find element css to override in:

    semantic/src/definitions/elements/

### Override element css in:

    semantic/src/site/elements/

### New elements go in:

    css/styles.css

TODO: would be good to have this as a series of files that also build into a single file -- another gulp task?

### Javascript for Semantic goes in:

    js/client.js

There is an example in there.

Git Setup
---------

There is a `.gitignore` that should be setup correctly. Take a look at your first few commits to make sure.
