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

## Clone this Repository
Once you're inside the IDE, you should see a terminal at the bottom.

Inside the terminal, execute this `clone` to copy our examples into your IDE:
```bash
git clone https://github.com/nds-org/thinkchicago-examples
```

The Terminal also allows you to add any packages you want just like an
Ubuntu shell. This allows you to use `apt-get` to retrieve packages
or `curl` / `wget` to retrieve and `unzip` binaries.

```bash
apt-get update
apt-get install vim
```

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

Check the test link and append **/thinkchicago-examples/php/index.php** to the
end of the URL and you should see that your PHP application is being served.

## Java
For Java applications, you will need to build / run using the Cloud9 Terminal.

A simple example in Java using Maven:
```bash
cd /workspace/thinkchicago-examples/java
mvn clean package
```

NOTE: there is no Debugger support for Java in Cloud9 at this time.

### Servlets
You may need to install an additional servlet container, such as Tomcat or Jetty.

For example, using Tomcat, you can copy the built WAR into the *webapps/* directory 
and then start up Tomcat:
```bash
curl http://apache.cs.utah.edu/tomcat/tomcat-7/v7.0.79/bin/apache-tomcat-7.0.79.zip -o  apache-tomcat-7.0.79.zip
unzip apache-tomcat-7.0.79.zip
export CATALINA_HOME=/workspace/apache-tomcat-7.0.79/
cp target/SimpleServlet-1.war ${CATALINE_HOME}/webapps
$CATALINA_HOME/bin/catalina.sh run
```

The terminal should show that your webserver has started on
port 8080, and display progress in unpackaging the WAR file.

Once the application is ready, check the test link and append **/SimpleServer-1** to the
end of the URL and you should see that your Java application is being served.

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

In addition to your username/password, you'll need to enter the RStudio username/password "rstudio/rstudio".

Plot the distribution of year of birth of the first 10,000 records in the Divvy-Trips data:
```bash
data <- read.csv("/shared/Divvy-Trips/rows.csv", nrows=10000)
head(data)
barplot(table(data$BIRTH.YEAR))
```
Note: Due to memory constraints, you will not be able to read the entire data file.

# Loading data in Postgres

You may consider creating a database given the 2FM data.  The following should get you started.
* First, start a PostgreSQL instance
* Second, open the console


Use psql to login as the postgres admin:
```bash
psql -U postgres
```

Create a database and user for the 2FM data:
```bash
CREATE DATABASE fm;
CREATE USER fmuser  WITH ENCRYPTED PASSWORD 'fmpassword';
GRANT USAGE ON SCHEMA public to fmuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO fmuser;
GRANT CONNECT ON DATABASE fm to fmuser;
\c fm
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO fmuser;
GRANT USAGE ON SCHEMA public to fmuser; 
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO fmuser;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO fmuser;
```

Create a table and import the data from CSV:
```bash
CREATE TABLE ACTIVITY (
 ACT_CODE VARCHAR(8) not null,
 ACT_DESC VARCHAR(24)
);

COPY ACTIVITY FROM '/shared/2FM_Tech_Challenge/ACTIVITY.csv' WITH CSV HEADER  DELIMITER ',';
```

You can access this from Cloud9. The following example uses python:

Open Cloud9 and create a new terminal. Install the postgres libraries:
```
apt-get update -y
apt-get install -y postgresql-server-dev-all python-dev
pip install psycopg2
```

Now, create a new python script to read the 2FM data from postgres. Replace "PGSQL_IP_ADDRESS" with the IP address of the Postgres instance, which you can find under the "Config" button in Workbench:

```python
import psycopg2

conn = psycopg2.connect("dbname='fm' user='fmuser' host='PGSQL_IP_ADDRESS' port='5432' password='fmpassword'")
cur = conn.cursor()
cur.execute("SELECT * FROM activity;")
print cur.fetchone()
cur.close()
conn.close()






