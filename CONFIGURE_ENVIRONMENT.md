1. Install recent LTS version of Node.js

 We recommend doing this through NVM. Follow the instructions if you use linux-based OS:
 
 1.1 $> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
 1.2 $> source ~/.bashrc
 1.3 $> nvm --version ## should show "0.39.1"
 # let's install the LTS version of Node 16.17.0
 1.4 $> nvm install 16.17.0 ## should show "Now using node v16.17.0 (npm v8.15.0)"

2. Install Angular from NPM (Node's package manager)

 2.1 npm install -g @angular/cli

3. Create a boilerplate Angular project

 [[ Don't run this step as the Angular project has been already
 checked into our repository ]]]

 3.1 CD into our project
 3.2 ng new gui ## gui is the name of the Angular project corresponding to our front-end

4. Spawn the Angular development server and access the front page

 4.1 $> cd gui
 4.2 $> ng serve --open 

