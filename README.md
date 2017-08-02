# thinkchicago-examples

Examples for ThinkChicago workshop for Cloud9 and RStudio.

# Intro to Cloud9 in Workbench
Starting up an instance of Cloud9 on the 
[ThinkChicago Workbench](https://www.workshop1.nationaldataservice.org/#/) 
will show 2 endpoint links:
* port 80
* port 8080

You can access the IDE via the link corresponding to port 80, while port 8080
is reserved for application testing with the IDE.

**NOTE**: The link to port 8080 will be referred to as the **test link**. For
web development via Cloud9, it will likely be beneficial to keep a tab open
to the test link at all times.

# Clone this Repository
Once you're inside the IDE, you should see a terminal at the bottom.

Inside the terminal, execute this `clone` to copy our examples into your IDE:
```bash
git clone https://github.com/nds-org/thinkchicago-examples
```

# Examples 
## Ruby on Rails
For RoR applications, you can build and test using the terminal and use your
web browser to debug the application.

A simple Ruby example:
```bash
cd /workspace/thinkchicago-examples/
rails new ruby
cd ruby/
bin/rails server -b 0.0.0.0 -p 8080
```

You should see that this has started an application on port 8080.

Check the test link and you should see that your new RoR application is running.

## NodeJS
For NodeJS applications, you can build and test using the terminal and use your
web browser to debug the application.

```bash
cd /workspace/thinkchicago-examples/nodejs
node server.js
```

You should see that this has started an application on port 8080. Check the
test link and you should see that your new NodeJS client is running. Append 
**/hello** to the URL and you should also be able to hit a test API endpoint.

## Python
For Python applications, you will need to run using the Cloud9 Terminal.

A simple example in Python:
```bash
cd /workspace/thinkchicago-examples/python
python example.py
```

You should see that this has started an application on port 8080.

Check the test link and you should see that your Python server is running.

## Go
For Go applications, you will need to build / run using the Cloud9 Terminal.

A simple example in Go:
```bash
cd /workspace/thinkchicago-examples/go
go build hello_world.go
./hello_world
```

You should see that this has started an application on port 8080.

Check the test link and you should see that your Go server is running.

## PHP
For PHP applications, you can rely on the built-in webserver to help you test.

Right click the `/workspace/thinkchicago-examples/php/index.php` file and 
choose **Run**. The terminal should show that your webserver has started on
port 8080 (by default).

Check the test link and append */thinkchicago-examples/php/index.php* to the
end of the URL and you should see that your PHP application is being served.

## Java
For Java applications, you will need to build using the terminal and using the
pre-installed instance of Tomcat.

A simple example in Java:
```bash
cd /workspace/thinkchicago-examples/java
mvn clean package
```

Once the build is complete, you'll need to copy the built WAR into the 
*webapps/* directory and then start up Tomcat:
```bash
cp target/*.war /opt/tomcat/webapps
tomcat
```

The terminal should show that your webserver has started on
port 8080.

Check the test link and you should see your test application running.

## C/C++
For C/C++ applications, you will need to build and run using the Cloud9 Terminal.

The console environment should seem familiar to C/C++ developers.

A simple example in C:
```bash
# Build from source
cd cpp/
make hello-c

# Execute the program
./bin/hello-c
```

A simple example in C++:
```bash
# Build from source
cd cpp/
make hello-cpp

# Execute the program
./bin/hello-cpp
```

NOTE: This example does not need the test link

# RStudio Examples

Starting an instance of RStudio on the 
[ThinkChicago Workbench](https://www.workshop1.nationaldataservice.org/#/) 
will show a single endpoint.

You can access the IDE via the link corresponding to port 80, while port 8080
is reserved for application testing with the IDE.

In addition to your username/password, you'll need to enter the RStudio username/password "rstudio/rstudio".

Plot the distribution of year of birth of the first 10,000 records in the Divvy-Trips data:
```bash
data <- read.csv("/shared/Divvy-Trips/rows.csv", nrows=10000)
head(data)
barplot(table(data$BIRTH.YEAR))
```
Note: Due to memory constraints, you will not be able to read the entire data file.
