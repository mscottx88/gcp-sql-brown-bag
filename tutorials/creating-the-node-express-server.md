# Creating the Node Express Server
You have been provided the source code for the Node Express server, but if you are interested in how it was created, follow along here!

---

## Create `package.json`
All Node projects require the `package.json` file.  To create the one provided in this project:

```sh
npm run init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (google-cloud-sql-brown-bag)
version: (1.0.0)
description: A project to teach you how to use GCP SQL
entry point: (index.js)
test command: npm run test
git repository: git@github.com:mscottx88/gcp-sql-brown-bag.git
keywords: google cloud project gcp sql node
author: Michael P. Scott <mscottx88@gmail.com>
license: (ISC) MIT
```

---

## Add Required `npm` Modules
A really powerful part of working in the Node space is all the freely available, widely used modules.  Here are the modules used and added to this project:

```sh
npm i body-parser express pg --save

npm notice created a lockfile as package-lock.json. You should commit this file.
+ body-parser@1.18.2
+ pg@7.3.0
+ express@4.16.2
added 67 packages in 4.221s
```

**Note** If you went and looked at the `package.json` in this project, you'll find that actually there are quite a few more packages than these.  Those additional packages will be used to actually connect to components of GCP, provide logging telemetry, dynamic environment settings, and testing.  For now, the above three is all that is really needed to connect to your GCP SQL instance with Node.
