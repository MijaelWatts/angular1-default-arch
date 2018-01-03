![N|Solid](https://appendto.com/wp-content/uploads/2016/05/angular.png)

# Angular1 Default Arch

Repository created for starting a basic angular1 app.

## Architecture

Brief explanation about how this app should work:
src > js > ctrl  = Tend to manage any animation or behaviour of the UI.
src > js > fcty  = Tend to manage any logic thinking that the CTRL needs.
src > js > svc   = Tend to call any WS.
src > js > const = Tend to manage any constant of the app.

## How to run the App

Install global Dependencies. This command is run only once in your computer.

```sh
$ npm install -g live-server
```

Install the devDependencies.

```sh
cd angular1-default-arch
$ npm install
```

Run the app.

```sh
cd angular1-default-arch
$ live-server
```
Once the last command is entered, your default app will be launch in your browser. Navigate to the 'src' folder and you'll see the message "Hello world using angular js"

Enjoy the app
If you think these instructions can be anhenaced, please feel free to...