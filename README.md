# amp-test
Accelerated Mobile Pages test


## Table of contents
- [Local Setup](#local-setup)
- [Installation](#installation)
- [AMP validator](#validator)
- [License](#license)
- [Contributing](#ontributing)

### Local Setup
To preview the website locally:
1. Install [git](https://git-scm.com/) if you don't have them already.
2. Install [yarn](https://yarnpkg.com/lang/en/) to run the service.
3. You also need to install [nodejs](https://nodejs.org/en/) on your local machine.

### Installation

Clone the git repository
```sh
$ git clone https://github.com/FabioAnsaldi/amp-test.git
```

Go to the repository directory and run the following commands:
```sh
$ cd insurance-web-api
$ yarn install
$ yarn run start
```

If the your_local_address_ip is 127.0.0.1, you will see something like below:

```sh
listening on http://127.0.0.1:8080/
```

If you want to set a custom configuration for IP address or service port:

You have to run the service with the optional parameter like below:
```sh
$ yarn run start -a 192.168.1.123 -p 8080
```

For more details of option parameters, run this comand:
```sh
$ yarn run start --help
```

To run files watching, you have to run this command:
```sh
$ yarn run watching
```

### AMP validator
To enable the AMP validator by adding this fragment identifier to your document URL:
```
#development=1
```

For example:
```
http://localhost:8000/amp.html#development=1
```

### License
```
Copyright 2016 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements. See the NOTICE file distributed with this work for
additional information regarding copyright ownership. The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
```

### Contributing
Feel free to make changes to the template files or the document files.
