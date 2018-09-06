# express-mock-api
A mock api to deliver JSON content from a local folder to simulate a similar REST api path pattern.  This mock api can be useful for getting projects up and running on mock data.


__Table of content__

- [Install](#install)
- [Usage examples](#usage-examples)

## Install

**node.js**:

Once downloaded run the following commands to install and start the application.  The application will listen on port 9000.  This can be changed to meet your needs.

```bash
npm install

node app
```


## Usage examples

In order to use the mock api, you'll need to add some json to the base file directory.  By default the server will look for data in root of the '/data' directory.  So for example, to add some json data for a products api endpoint, just create the following directory structure under the '/data' root.  The directory from the root of the app would be as follows [baseDirectory]/api/v1/products.  Once the directory structure is created, simply add a file called 'products.json' in the [baseDirectory]/api/v1.  The base directory can be set in the config.js property file.  For best results it should mirror the /api/v1/ folder path.  To access the resource endpoint simple call from your favorite ajax lib.

```bash
 Example:

 fetch('http://localhost:<port>/api/v1/products').then((resp) => {
     ...
 }).catch((err) => {

 })
```
