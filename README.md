# Agencyapp
Agency application with angular and ruby for shortlist challange

#Setup Steps for angular
- Angular code is written with yo angular generator
- Code can be downloaded with branch angular
- Download the code and run npm install and bower install for installing required packages for the code
- For testing only angular set the GLOBLES.api variable in index.html and run "grunt serve"
- For change and create the compressed version run "grunt" , this will test all things and create the compressed files in "dist" folder
- To only execute the test cases run "grunt test"
- Test cases are stored in test folder

#setup steps for rails
- First clone code by using "git clone https://github.com/dhaval-complitech/Agencyapp.git" from console
- For databse setup - If postgres not already installed to your system, install postgres via following command if you are working on ubuntu.
  sudo apt-get install libpq-dev
  gem install pg
- Change username and password for postgres in config/database.yml file
- To create databse - rake db:create
- Run migrate - rake db:migrate
- To install gems - bundle install
- Then start server run command - rails s